'use client';

import { useEffect, useState } from 'react';
import { Phone, X, PhoneCall } from 'lucide-react';

export function RetellWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const AGENT_ID = 'agent_4396fcbf2a8b61ef6d2317619f';

  useEffect(() => {
    // Load Retell Web SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/retell-sdk@latest/dist/retell-sdk.min.js';
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const startCall = async () => {
    if (!isLoaded || !(window as any).RetellWebClient) {
      console.error('Retell SDK not loaded');
      return;
    }

    try {
      // Initialize Retell client
      const retellClient = new (window as any).RetellWebClient();

      // Start the call with the agent
      await retellClient.startCall({
        agentId: AGENT_ID,
        sampleRate: 24000,
      });

      setIsOpen(true);
    } catch (error) {
      console.error('Error starting call:', error);
      // Fallback to regular phone call
      window.location.href = 'tel:+18254359977';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={startCall}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Talk to AI Agent"
        >
          <div className="relative">
            {/* Pulsing ring animation */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>

            {/* Main button */}
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-red-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group-hover:gap-4">
              <PhoneCall className="w-6 h-6 animate-pulse" />
              <span className="font-bold text-lg whitespace-nowrap">
                Talk to Our AI Agent
              </span>
            </div>
          </div>
        </button>
      )}

      {/* Call Interface Modal */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-red-700 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-black">AI Voice Agent</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/90 text-sm">
                Connected to Home Pros Group
              </p>
            </div>

            {/* Call Status */}
            <div className="p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Phone className="w-12 h-12 text-primary" />
              </div>

              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Call in Progress
              </h4>

              <p className="text-slate-600 mb-6">
                Speak naturally with our AI agent to learn about our services or book an appointment!
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Voice AI Active</span>
                </div>
                <div className="text-xs text-slate-500">
                  Or call directly: <a href="tel:+18254359977" className="text-primary font-bold">+1 (825) 435-9977</a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 bg-slate-50 border-t flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
              >
                End Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
