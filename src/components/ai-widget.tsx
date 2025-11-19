"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MessageSquare, X, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"voice" | "chat">("voice");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [inputMessage, setInputMessage] = useState("");
  const vapiVoiceRef = useRef<any>(null);
  const vapiChatRef = useRef<any>(null);

  // Wait for page to fully load before showing widget
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Vapi SDK for voice
  useEffect(() => {
    const initVapi = async () => {
      try {
        if (typeof window !== 'undefined') {
          const { default: Vapi } = await import('@vapi-ai/web');
          vapiVoiceRef.current = new Vapi('d3167409-64a4-4f79-b9b4-ccc1f7333759');
          
          // Setup event listeners
          vapiVoiceRef.current.on('call-end', () => {
            setIsVoiceActive(false);
          });
          
          vapiVoiceRef.current.on('error', (error: any) => {
            console.error('Vapi error:', error);
            setIsVoiceActive(false);
          });
        }
      } catch (error) {
        console.error('Failed to initialize Vapi:', error);
      }
    };
    
    if (isLoaded) {
      initVapi();
    }
  }, [isLoaded]);

  const handleVoiceModeStart = async () => {
    try {
      if (vapiVoiceRef.current) {
        setIsVoiceActive(true);
        await vapiVoiceRef.current.start('563e7f19-0ea8-4985-aaa7-33096e04bb8b');
      }
    } catch (error) {
      console.error('Failed to start voice call:', error);
      setIsVoiceActive(false);
    }
  };

  const handleVoiceModeStop = () => {
    try {
      if (vapiVoiceRef.current) {
        vapiVoiceRef.current.stop();
        setIsVoiceActive(false);
      }
    } catch (error) {
      console.error('Failed to stop voice call:', error);
    }
  };

  const handleVoiceModeToggle = () => {
    if (isVoiceActive) {
      handleVoiceModeStop();
    } else {
      handleVoiceModeStart();
    }
  };

  const handleChatModeStart = async () => {
    try {
      setIsChatActive(true);
      setMessages([{ role: "assistant", content: "Hi! I'm Sheetal, your AI HR assistant. How can I help you today?" }]);
      
      // Initialize chat instance
      if (!vapiChatRef.current && typeof window !== 'undefined') {
        const { default: Vapi } = await import('@vapi-ai/web');
        vapiChatRef.current = new Vapi('d3167409-64a4-4f79-b9b4-ccc1f7333759');
      }
    } catch (error) {
      console.error('Failed to start chat:', error);
      setIsChatActive(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !vapiChatRef.current) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    try {
      // Start a call with text input
      await vapiChatRef.current.start('563e7f19-0ea8-4985-aaa7-33096e04bb8b', {
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en"
        }
      });
      
      // Simulate response (in production, this would come from Vapi events)
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: "I understand your query. Let me help you with that..." }]);
      }, 1000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
    }
  };

  const handleChatMode = () => {
    setMode("chat");
    if (!isChatActive) {
      handleChatModeStart();
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      {/* Floating trigger button - positioned on right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-[9998] group transition-all duration-500 ease-out",
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

        {/* Label - positioned on left of button */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-white/10">
          Talk to AI
        </div>
      </button>

      {/* Widget panel - positioned on right */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-24 right-6 z-[9998] w-96 max-w-[calc(100vw-3rem)] transition-all duration-500 ease-out",
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
                    className="flex-1 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/30"
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      SHEETAL (AI HR)
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

                {mode === "chat" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {/* Chat messages */}
                    <div className="h-64 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                      {messages.map((message, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex",
                            message.role === "user" ? "justify-end" : "justify-start"
                          )}
                        >
                          <div
                            className={cn(
                              "max-w-[80%] px-4 py-2 rounded-2xl",
                              message.role === "user"
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : "bg-white/5 text-gray-300 border border-white/10"
                            )}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-gray-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 shadow-lg shadow-purple-500/30"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-gray-500 text-xs text-center">
                      Powered by SHEETAL AI HR Assistant
                    </p>
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