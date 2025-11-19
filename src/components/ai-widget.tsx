"use client";

import { useState, useEffect } from "react";
import { Mic, MessageSquare, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"voice" | "chat">("voice");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  // Wait for page to fully load before showing widget
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVoiceModeToggle = () => {
    setIsVoiceActive(!isVoiceActive);
    // Here you would integrate with your voice AI service
  };

  const handleChatMode = () => {
    setMode("chat");
    // Trigger Vapi widget
    const vapiWidget = document.querySelector('vapi-widget') as any;
    if (vapiWidget) {
      if (typeof vapiWidget.open === 'function') {
        vapiWidget.open();
      } else {
        const widgetButton = vapiWidget.shadowRoot?.querySelector('button') || 
                            document.querySelector('[data-vapi-button]');
        if (widgetButton) {
          (widgetButton as HTMLElement).click();
        }
      }
    }
    setIsOpen(false);
  };

  if (!isLoaded) return null;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 left-6 z-[9998] group transition-all duration-500 ease-out",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
        aria-label="Talk to AI"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-full p-4 shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Mic className="w-6 h-6" />
            )}
          </div>

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping opacity-75"></div>
        </div>

        {/* Label */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-white/10">
          Talk to AI
        </div>
      </button>

      {/* Widget panel */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-24 left-6 z-[9998] w-96 max-w-[calc(100vw-3rem)] transition-all duration-500 ease-out",
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          )}
        >
          <div className="relative">
            {/* Glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse"></div>
            
            {/* Main panel */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 border-b border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-md animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2">
                        <Mic className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mode switcher */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode("voice")}
                    className={cn(
                      "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      mode === "voice"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Voice Mode
                    </span>
                  </button>
                  <button
                    onClick={handleChatMode}
                    className={cn(
                      "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      mode === "chat"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Chat Mode
                    </span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {mode === "voice" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="text-center space-y-2">
                      <p className="text-gray-300 text-sm">
                        Click Start to begin a voice conversation with our AI assistant
                      </p>
                      <p className="text-gray-500 text-xs">
                        Available 24/7 • Human-grade conversations
                      </p>
                    </div>

                    {/* Voice visualizer */}
                    <div className="relative h-32 flex items-center justify-center">
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center gap-1",
                        isVoiceActive && "animate-pulse"
                      )}>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full transition-all duration-300",
                              isVoiceActive
                                ? "animate-[pulse_1s_ease-in-out_infinite]"
                                : "h-4"
                            )}
                            style={{
                              height: isVoiceActive ? `${Math.random() * 60 + 20}px` : "16px",
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Start button - Blue, round */}
                    <button
                      onClick={handleVoiceModeToggle}
                      className={cn(
                        "w-full py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-xl relative overflow-hidden group",
                        isVoiceActive
                          ? "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-red-500/50"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/50"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        {isVoiceActive ? (
                          <>
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                            Stop
                          </>
                        ) : (
                          <>
                            <Phone className="w-5 h-5" />
                            Start Voice Call
                          </>
                        )}
                      </span>
                    </button>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[
                        "Natural conversation",
                        "Instant responses",
                        "Multi-language",
                        "Smart routing"
                      ].map((feature, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
                        >
                          <p className="text-gray-300 text-xs">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
