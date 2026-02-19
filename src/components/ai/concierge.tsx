"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, X, Mic, Phone, Loader2, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetellWebClient } from "retell-client-js-sdk"

// Initialize client outside component to persist across re-renders
const retellWebClient = new RetellWebClient();


interface ConciergeProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function Concierge({ isOpen, onOpenChange }: ConciergeProps) {
    // Internal state for call status only
    const [callStatus, setCallStatus] = React.useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [agentState, setAgentState] = React.useState<'listening' | 'speaking' | 'idle'>('idle');

    React.useEffect(() => {
        // Setup event listeners
        retellWebClient.on("call_started", () => {
            console.log("Call started");
            setCallStatus('active');
            setAgentState('idle');
        });

        retellWebClient.on("call_ended", () => {
            console.log("Call ended");
            setCallStatus('idle');
            setAgentState('idle');
        });

        retellWebClient.on("error", (error: any) => {
            console.error("Retell error:", error);
            setCallStatus('error');
            setErrorMessage("Connection failed. Please try again.");
            // Reset after delay
            setTimeout(() => {
                setCallStatus('idle');
                setErrorMessage(null);
            }, 3000);
        });

        retellWebClient.on("agent_start_talking", () => {
            setAgentState('speaking');
        });

        retellWebClient.on("agent_stop_talking", () => {
            setAgentState('listening');
        });

        retellWebClient.on("update", (update: any) => {
            // Can handle real-time transcripts here if needed
            console.log("Update:", update);
        });

        return () => {
            retellWebClient.stopCall(); // Cleanup on unmount
        };
    }, []);

    const toggleCall = async () => {
        if (callStatus === 'active' || callStatus === 'connecting') {
            retellWebClient.stopCall();
            setCallStatus('idle');
            return;
        }

        try {
            setCallStatus('connecting');
            setErrorMessage(null);

            // Fetch access token from our backend (Netlify Function)
            const response = await fetch('/.netlify/functions/retell-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}) // Agent ID is handled by backend env var
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to get access token');
            }

            const data = await response.json();

            // Start the call
            await retellWebClient.startCall({
                accessToken: data.accessToken,
            });

        } catch (error: any) {
            console.error("Failed to start call:", error);
            setCallStatus('error');
            setErrorMessage(error.message || "Failed to connect");
            setCallStatus('idle');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <Card className="w-[350px] mb-4 shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 fade-in border-primary/20 overflow-hidden">
                    <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Bot className="h-6 w-6" />
                            <div>
                                <CardTitle className="text-base font-bold">Home Pros Assistant</CardTitle>
                                <p className="text-xs opacity-90">Voice Concierge</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 text-white hover:bg-white/20">
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-6 bg-white min-h-[300px] flex flex-col items-center justify-center gap-6">

                        {/* Status Indicator / Animation */}
                        <div className="relative">
                            <div className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
                                callStatus === 'idle' && "bg-slate-100 text-slate-400",
                                callStatus === 'connecting' && "bg-yellow-100 text-yellow-500 animate-pulse",
                                callStatus === 'active' && agentState === 'speaking' && "bg-primary/20 text-primary scale-110",
                                callStatus === 'active' && agentState === 'listening' && "bg-green-100 text-green-600",
                                callStatus === 'error' && "bg-red-100 text-red-500"
                            )}>
                                {callStatus === 'idle' && <Mic className="h-10 w-10" />}
                                {callStatus === 'connecting' && <Loader2 className="h-10 w-10 animate-spin" />}
                                {callStatus === 'active' && agentState === 'speaking' && <Volume2 className="h-10 w-10 animate-pulse" />}
                                {callStatus === 'active' && agentState === 'listening' && <Mic className="h-10 w-10" />}
                                {callStatus === 'error' && <X className="h-10 w-10" />}
                            </div>

                            {/* Ripple effect when active */}
                            {callStatus === 'active' && (
                                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping -z-10"></div>
                            )}
                        </div>

                        {/* Status Text */}
                        <div className="text-center space-y-1">
                            <h3 className="font-bold text-lg text-charcoal">
                                {callStatus === 'idle' && "Start a Conversation"}
                                {callStatus === 'connecting' && "Connecting..."}
                                {callStatus === 'active' && agentState === 'speaking' && "AI is speaking..."}
                                {callStatus === 'active' && agentState === 'listening' && "Listening..."}
                                {callStatus === 'active' && agentState === 'idle' && "Connected"}
                                {callStatus === 'error' && "Connection Error"}
                            </h3>
                            <p className="text-sm text-slate-500">
                                {callStatus === 'idle' && "Tap the button below to talk to our AI assistant about booking or services."}
                                {callStatus === 'connecting' && "Establishing secure voice connection..."}
                                {callStatus === 'active' && "Go ahead, I'm listening."}
                                {errorMessage && <span className="text-red-500 block mt-2">{errorMessage}</span>}
                            </p>
                        </div>

                        {/* Control Button */}
                        <Button
                            onClick={toggleCall}
                            size="lg"
                            className={cn(
                                "w-full h-14 text-lg font-bold shadow-lg transition-all active:scale-95",
                                callStatus === 'active' || callStatus === 'connecting'
                                    ? "bg-red-100 text-red-600 hover:bg-red-200"
                                    : "bg-primary text-white hover:bg-red-700"
                            )}
                            disabled={callStatus === 'connecting'}
                        >
                            {callStatus === 'active' || callStatus === 'connecting' ? (
                                <>
                                    <Phone className="mr-2 h-5 w-5 rotate-135" /> End Call
                                </>
                            ) : (
                                <>
                                    <Phone className="mr-2 h-5 w-5" /> Start Call
                                </>
                            )}
                        </Button>

                    </CardContent>
                </Card>
            )}

            {!isOpen && (
                <Button
                    onClick={() => onOpenChange(true)}
                    size="lg"
                    className="h-14 w-14 rounded-full shadow-xl hover:scale-105 transition-transform bg-primary text-primary-foreground animate-in zoom-in duration-300"
                >
                    <Bot className="h-7 w-7" />
                </Button>
            )}
        </div>
    )
}
