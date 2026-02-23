"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, X, Mic, Phone, Loader2, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Configuration from environment variables
const AGENT_ID = process.env.NEXT_PUBLIC_RETELL_AGENT_ID || 'agent_4396fcbf2a8b61ef6d2317619f';
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+18254359977';


interface ConciergeProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function Concierge({ isOpen, onOpenChange }: ConciergeProps) {
    // Internal state for call status only
    const [callStatus, setCallStatus] = React.useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [agentState, setAgentState] = React.useState<'listening' | 'speaking' | 'idle'>('idle');
    const [isLoaded, setIsLoaded] = React.useState(false);
    const retellClientRef = React.useRef<any>(null);

    React.useEffect(() => {
        console.log("🤖 Initializing Retell AI Widget");
        console.log("📋 Agent ID:", AGENT_ID);
        console.log("📞 Phone Number:", PHONE_NUMBER);

        // Load Retell Web SDK
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/retell-sdk@latest/dist/retell-sdk.min.js';
        script.async = true;
        script.onload = () => {
            console.log("✅ Retell SDK loaded successfully");
            console.log("🔍 RetellWebClient available:", typeof (window as any).RetellWebClient);
            setIsLoaded(true);
        };
        script.onerror = (error) => {
            console.error("❌ Failed to load Retell SDK:", error);
            setErrorMessage("Failed to load voice SDK. Please refresh the page.");
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (retellClientRef.current) {
                try {
                    retellClientRef.current.stopCall();
                } catch (e) {
                    console.error("Error stopping call:", e);
                }
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const toggleCall = async () => {
        // Stop call if already active
        if (callStatus === 'active' || callStatus === 'connecting') {
            if (retellClientRef.current) {
                try {
                    retellClientRef.current.stopCall();
                } catch (e) {
                    console.error("Error stopping call:", e);
                }
            }
            setCallStatus('idle');
            setAgentState('idle');
            return;
        }

        // Check if SDK is loaded
        if (!isLoaded || !(window as any).RetellWebClient) {
            console.error('❌ Retell SDK not loaded');
            console.error('isLoaded:', isLoaded);
            console.error('RetellWebClient:', typeof (window as any).RetellWebClient);
            setErrorMessage("Voice system still loading. Redirecting to phone...");
            // Fallback to phone call
            setTimeout(() => {
                window.location.href = `tel:${PHONE_NUMBER}`;
            }, 1500);
            return;
        }

        try {
            setCallStatus('connecting');
            setErrorMessage(null);

            // Initialize Retell client if not already done
            if (!retellClientRef.current) {
                retellClientRef.current = new (window as any).RetellWebClient();

                // Setup event listeners
                retellClientRef.current.on("call_started", () => {
                    console.log("Call started");
                    setCallStatus('active');
                    setAgentState('idle');
                });

                retellClientRef.current.on("call_ended", () => {
                    console.log("Call ended");
                    setCallStatus('idle');
                    setAgentState('idle');
                });

                retellClientRef.current.on("error", (error: any) => {
                    console.error("Retell error:", error);
                    setCallStatus('error');
                    setErrorMessage("Connection failed. Please try again.");
                    // Reset after delay
                    setTimeout(() => {
                        setCallStatus('idle');
                        setErrorMessage(null);
                    }, 3000);
                });

                retellClientRef.current.on("agent_start_talking", () => {
                    setAgentState('speaking');
                });

                retellClientRef.current.on("agent_stop_talking", () => {
                    setAgentState('listening');
                });

                retellClientRef.current.on("update", (update: any) => {
                    console.log("Update:", update);
                });
            }

            // Get access token from our API
            console.log("🔑 Fetching access token from API...");
            const tokenResponse = await fetch('/api/retell-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!tokenResponse.ok) {
                const errorData = await tokenResponse.json();
                throw new Error(errorData.error || 'Failed to get access token');
            }

            const { accessToken } = await tokenResponse.json();
            console.log("✅ Access token received");

            // Start the call with access token
            await retellClientRef.current.startCall({
                accessToken: accessToken,
                sampleRate: 24000,
            });

        } catch (error: any) {
            console.error("Failed to start call:", error);
            setCallStatus('error');
            setErrorMessage(error.message || "Failed to connect");

            // Fallback to phone call
            setTimeout(() => {
                window.location.href = `tel:${PHONE_NUMBER}`;
            }, 2000);

            setTimeout(() => {
                setCallStatus('idle');
                setErrorMessage(null);
            }, 3000);
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
                <button
                    onClick={() => onOpenChange(true)}
                    disabled={!isLoaded}
                    className="group relative"
                    aria-label="Talk to AI Agent"
                >
                    <div className="relative">
                        {/* Pulsing ring animation */}
                        {isLoaded && (
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                        )}

                        {/* Main button */}
                        <div className={cn(
                            "relative flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all",
                            isLoaded
                                ? "bg-gradient-to-r from-primary to-red-700 text-white hover:scale-105 cursor-pointer"
                                : "bg-slate-300 text-slate-500 cursor-wait"
                        )}>
                            {isLoaded ? (
                                <>
                                    <Bot className="w-6 h-6 animate-pulse" />
                                    <span className="font-bold text-lg whitespace-nowrap">
                                        Talk to AI Agent
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    <span className="font-bold text-sm whitespace-nowrap">
                                        Loading...
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </button>
            )}
        </div>
    )
}
