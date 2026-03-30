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

    const getWhatsAppLink = () => {
        const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
        const encodedTitle = encodeURIComponent(projectTitle || "a project");
        return `https://wa.me/91${number}?text=Hi%2C+I%27m+interested+in+renting+the+${encodedTitle}`;
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        // Add user message
        const newUserMessage = { id: Date.now(), sender: "user", text: userText };
        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot typing and respond based on keywords
        setTimeout(() => {
            setIsTyping(false);
            const lowerMsg = userText.toLowerCase();

            let responseText = "";
            let whatsappLink = null;

            const infoKeywords = ["what", "how", "component", "part", "include", "feature", "work", "detail"];
            const durationKeywords = ["duration", "long", "days", "week", "period"];
            const docsKeywords = ["report", "documentation", "pdf", "synopsis"];
            const priceKeywords = ["price", "cost", "rent", "fee", "charge", "how much", "rate", "book", "available", "reserve", "order"];

            if (priceKeywords.some((kw) => lowerMsg.includes(kw))) {
                responseText = `Great choice! To get pricing and book the "${projectTitle}", reach out to us directly on WhatsApp:`;
                whatsappLink = getWhatsAppLink();
            } else if (infoKeywords.some((kw) => lowerMsg.includes(kw))) {
                responseText = `The "${projectTitle}" is a ready-made, fully functional project available for rental. It includes all core components such as source code, working UI, backend logic, database integration, and documentation. Perfect for demos, submissions, or learning!`;
            } else if (durationKeywords.some((kw) => lowerMsg.includes(kw))) {
                responseText = "Rentals are typically available for 1–4 weeks depending on your project timeline. For exact duration, contact us on WhatsApp.";
            } else if (docsKeywords.some((kw) => lowerMsg.includes(kw))) {
                responseText = "Yes, we provide full project documentation and synopses. Ask us on WhatsApp for details.";
            } else {
                responseText = "I can help with questions about components, duration, and documentation. For pricing and booking, please reach out on WhatsApp.";
                whatsappLink = getWhatsAppLink();
            }

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: responseText,
                    whatsappLink: whatsappLink,
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
                                {msg.whatsappLink && (
                                    <a
                                        href={msg.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95"
                                        style={{ backgroundColor: "#25D366" }}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                )}
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
