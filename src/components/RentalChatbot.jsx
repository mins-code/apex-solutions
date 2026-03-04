"use client";

import { useState, useEffect, useRef } from "react";

export default function RentalChatbot({ isOpen, onClose, projectTitle }) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Initial greeting when opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    sender: "bot",
                    text: `Hi! I'm the Apex Assistant. You're looking to rent the ${projectTitle}. How can I help you finalize this?`,
                },
            ]);
        }
    }, [isOpen, projectTitle, messages.length]);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const newUserMessage = { id: Date.now(), sender: "user", text: inputValue };
        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot typing and response
        setTimeout(() => {
            setIsTyping(false);
            const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: `To finalize this rental, please reach out directly on WhatsApp:\n\n📱 +${number}\n\nPlease mention the specific project when reaching out.`,
                    isAction: false,
                },
            ]);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="relative w-full max-w-[400px] h-[600px] max-h-[90vh] glass-panel rounded-3xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(79,70,229,0.3)] animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-glass-border bg-[#020617]/80">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-500/30">
                                <span className="font-cinzel font-bold text-white">A</span>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#020617] shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                        </div>
                        <div>
                            <h3 className="text-white font-medium text-sm">Apex Assistant</h3>
                            <p className="text-green-400 text-xs">Verified Maker</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-white/50 hover:text-white transition-colors"
                        aria-label="Close Chat"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#020617]/50 to-transparent">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-line ${msg.sender === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-white/10 text-white/90 border border-white/5 rounded-bl-none"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex items-start">
                            <div className="bg-white/10 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1">
                                <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-glass-border bg-[#020617]/90">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-500 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
