"use client";

import * as React from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Business Knowledge Base ─────────────────────────────────────────────────
const BUSINESS = {
  name: "Home Pros Group",
  owner: "Keith",
  phone: "780-932-7337",
  email: "info@homeprosgroup.com",
  website: "homeprosgroup.com",
  address: "53 Umbach Road, Stony Plain, AB T7Z 1G1",
  hours: "Mon-Fri 9am-5pm, Sat 8am-5pm",
  areas: [
    "Stony Plain",
    "Spruce Grove",
    "Parkland County",
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Leduc",
    "Fort Saskatchewan",
    "Devon",
    "Beaumont",
    "Edson",
  ],
  services: {
    furnace: {
      name: "Furnace & Duct Cleaning (Residential)",
      price: "$285 single furnace / $385 dual furnace + GST",
      description:
        "Complete furnace and duct cleaning — ALL hot and cold air registers in your home included. No vent counting, no hidden fees. Most companies charge per vent; we never do.",
      includes: [
        "Full furnace inspection and cleaning",
        "All supply and return air ducts",
        "Every register in your home (hot and cold)",
        "Before/after photos",
        "100% satisfaction guarantee",
      ],
    },
    duct: {
      name: "Duct Cleaning",
      price: "Included with furnace cleaning — all registers, one flat rate",
      description:
        "Our duct cleaning is always bundled with furnace cleaning at a flat rate. Every register in your home is included — no counting, no surprises.",
    },
    dryer: {
      name: "Dryer Vent Cleaning",
      price: "Call for a quote — 780-932-7337",
      description:
        "Professional dryer vent cleaning to prevent fires and improve drying efficiency. Lint buildup in dryer vents is a leading cause of house fires.",
    },
    commercialDuct: {
      name: "Commercial Duct Cleaning",
      price: "Custom quote based on building size",
      description:
        "Industrial-grade duct cleaning for offices, warehouses, restaurants, and commercial buildings across Greater Edmonton.",
    },
    commercialFurnace: {
      name: "Commercial Furnace Cleaning",
      price: "Custom quote based on system size",
      description:
        "Professional commercial furnace maintenance and cleaning for businesses. Keep your HVAC system running efficiently and extend equipment life.",
    },
    dustCollector: {
      name: "Dust Collector Cleaning",
      price: "Custom quote — 780-932-7337",
      description:
        "Specialized dust collector cleaning for workshops, manufacturing facilities, and industrial operations.",
    },
  },
} as const;

// ─── Intent Detection & Response Engine ──────────────────────────────────────

interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
}

type ConversationStage =
  | "greeting"
  | "service_inquiry"
  | "pricing"
  | "scheduling"
  | "collecting_info"
  | "collected_name"
  | "collected_email"
  | "collected_phone"
  | "submitted"
  | "general";

function detectIntent(
  message: string
): {
  intent: string;
  service?: string;
  confidence: number;
} {
  const lower = message.toLowerCase();

  // Greeting
  if (
    /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|yo|what'?s up)/i.test(
      lower
    )
  ) {
    return { intent: "greeting", confidence: 0.9 };
  }

  // Service-specific detection
  if (/furnace/i.test(lower) && /commercial/i.test(lower)) {
    return { intent: "service", service: "commercialFurnace", confidence: 0.9 };
  }
  if (/duct/i.test(lower) && /commercial/i.test(lower)) {
    return { intent: "service", service: "commercialDuct", confidence: 0.9 };
  }
  if (/dust\s*collector/i.test(lower)) {
    return { intent: "service", service: "dustCollector", confidence: 0.9 };
  }
  if (/dryer\s*vent/i.test(lower)) {
    return { intent: "service", service: "dryer", confidence: 0.9 };
  }
  if (/furnace/i.test(lower)) {
    return { intent: "service", service: "furnace", confidence: 0.9 };
  }
  if (/duct/i.test(lower)) {
    return { intent: "service", service: "duct", confidence: 0.9 };
  }

  // Pricing
  if (/price|cost|how much|rate|fee|charge|quote|estimate/i.test(lower)) {
    return { intent: "pricing", confidence: 0.85 };
  }

  // Scheduling / Booking
  if (
    /book|schedule|appointment|available|when|come out|visit|set up|callback/i.test(
      lower
    )
  ) {
    return { intent: "scheduling", confidence: 0.85 };
  }

  // Area/Location
  if (
    /area|serve|location|come to|cover|where|city|town|edmonton|spruce|stony|parkland|st\.?\s*albert|sherwood|leduc|fort sask|devon|beaumont|edson/i.test(
      lower
    )
  ) {
    return { intent: "area", confidence: 0.85 };
  }

  // Contact
  if (/phone|call|email|contact|reach|talk.*keith|speak/i.test(lower)) {
    return { intent: "contact", confidence: 0.85 };
  }

  // Hours
  if (/hour|open|close|time|weekend|saturday|sunday/i.test(lower)) {
    return { intent: "hours", confidence: 0.85 };
  }

  // All services
  if (/service|what.*do|offer|provide/i.test(lower)) {
    return { intent: "services_list", confidence: 0.8 };
  }

  // Satisfaction / guarantee
  if (/guarantee|satisfaction|warranty|refund/i.test(lower)) {
    return { intent: "guarantee", confidence: 0.85 };
  }

  // Yes / affirmative
  if (/^(yes|yeah|yep|sure|ok|okay|absolutely|please|definitely)\b/i.test(lower)) {
    return { intent: "affirmative", confidence: 0.8 };
  }

  // No / negative
  if (/^(no|nah|not|nope|never)\b/i.test(lower)) {
    return { intent: "negative", confidence: 0.8 };
  }

  return { intent: "unknown", confidence: 0.3 };
}

function generateResponse(
  intent: string,
  service: string | undefined,
  stage: ConversationStage,
  contactInfo: { name?: string; email?: string; phone?: string }
): { text: string; nextStage: ConversationStage } {
  // If we're in the middle of collecting info, guide accordingly
  if (stage === "collecting_info") {
    return {
      text: `To get you connected with Keith for a callback, can I get your name?`,
      nextStage: "collected_name",
    };
  }
  if (stage === "collected_name") {
    return {
      text: `Thanks${contactInfo.name ? `, ${contactInfo.name}` : ""}! What's the best email to reach you at?`,
      nextStage: "collected_email",
    };
  }
  if (stage === "collected_email") {
    return {
      text: "And a phone number where Keith can call you back?",
      nextStage: "collected_phone",
    };
  }

  switch (intent) {
    case "greeting":
      return {
        text: `Welcome to Home Pros Group! 👋 I'm here to help you with furnace cleaning, duct cleaning, dryer vent cleaning, and more.\n\nHow can I help you today? You can ask about:\n• Our services and pricing\n• Service areas\n• Booking a callback with Keith`,
        nextStage: "general",
      };

    case "service": {
      const svc = service
        ? BUSINESS.services[service as keyof typeof BUSINESS.services]
        : null;
      if (svc) {
        const includesList =
          "includes" in svc
            ? `\n\nIncludes:\n${(svc as typeof BUSINESS.services.furnace).includes.map((i) => `✅ ${i}`).join("\n")}`
            : "";
        return {
          text: `**${svc.name}**\n\n${svc.description}\n\n💰 **Pricing:** ${svc.price}${includesList}\n\nWould you like me to set up a callback with Keith to book this service?`,
          nextStage: "service_inquiry",
        };
      }
      return {
        text: "We offer furnace cleaning, duct cleaning, dryer vent cleaning, commercial duct and furnace cleaning, and dust collector cleaning. Which service are you interested in?",
        nextStage: "service_inquiry",
      };
    }

    case "pricing":
      return {
        text: `Here's our residential pricing:\n\n🏠 **Furnace & Duct Cleaning:**\n• Single furnace: **$285 + GST**\n• Dual furnace: **$385 + GST**\n• ALL registers included — no vent counting!\n\n🔥 **Dryer Vent Cleaning:** Call for quote\n🏢 **Commercial:** Custom quotes based on building/system size\n\nMost companies charge per vent — we never do. One flat rate covers your entire home.\n\nWant me to arrange a callback with Keith for a quote?`,
        nextStage: "pricing",
      };

    case "scheduling":
      return {
        text: "I'd love to help get you booked! Let me collect a few details so Keith can call you back to schedule the perfect time.\n\nCan I get your name?",
        nextStage: "collected_name",
      };

    case "area":
      return {
        text: `We serve the Greater Edmonton area including:\n\n📍 ${BUSINESS.areas.join(", ")}\n\nNot sure if we serve your area? Just ask and I'll let you know! Or call us at **${BUSINESS.phone}**.`,
        nextStage: "general",
      };

    case "contact":
      return {
        text: `You can reach Home Pros Group anytime:\n\n📞 **Phone:** ${BUSINESS.phone}\n📧 **Email:** ${BUSINESS.email}\n📍 **Address:** ${BUSINESS.address}\n⏰ **Hours:** ${BUSINESS.hours}\n\nOr I can arrange a callback right here — just say the word!`,
        nextStage: "general",
      };

    case "hours":
      return {
        text: `Our business hours are:\n\n⏰ **${BUSINESS.hours}**\n\nWe're closed Sundays. For after-hours inquiries, leave me your info and Keith will call you back first thing!`,
        nextStage: "general",
      };

    case "services_list":
      return {
        text: `Home Pros Group offers:\n\n1️⃣ **Furnace & Duct Cleaning** — $285/$385 flat rate, all registers included\n2️⃣ **Dryer Vent Cleaning** — prevent fires, improve efficiency\n3️⃣ **Commercial Duct Cleaning** — offices, restaurants, warehouses\n4️⃣ **Commercial Furnace Cleaning** — business HVAC maintenance\n5️⃣ **Dust Collector Cleaning** — workshops and industrial\n\nWhich service interests you? I can give you more details on any of these.`,
        nextStage: "general",
      };

    case "guarantee":
      return {
        text: "Absolutely! We stand behind our work with a **100% satisfaction guarantee**. If you're not completely satisfied, we'll come back and make it right — FREE of charge.\n\nWe also provide before/after photos so you can see the difference. Want to book a service?",
        nextStage: "general",
      };

    case "affirmative":
      if (
        stage === "service_inquiry" ||
        stage === "pricing" ||
        stage === "general"
      ) {
        return {
          text: "Let's get you set up with a callback from Keith. Can I get your name?",
          nextStage: "collected_name",
        };
      }
      return {
        text: "How can I help you further? Ask about any of our services, pricing, or I can set up a callback for you.",
        nextStage: "general",
      };

    case "negative":
      return {
        text: "No problem at all! If you have any other questions about our services, feel free to ask anytime. I'm here to help!",
        nextStage: "general",
      };

    default:
      return {
        text: `I appreciate you reaching out! I can help with:\n\n• **Service info** — furnace, duct, dryer vent, commercial cleaning\n• **Pricing** — our flat-rate residential packages\n• **Booking** — arrange a callback with Keith\n• **Service areas** — cities we cover\n\nWhat would you like to know more about?`,
        nextStage: "general",
      };
  }
}

// ─── Chat Widget Component ──────────────────────────────────────────────────

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [stage, setStage] = React.useState<ConversationStage>("greeting");
  const [contactInfo, setContactInfo] = React.useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});
  const [isSending, setIsSending] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Listen for global open-chat events from other components
  React.useEffect(() => {
    const handler = () => handleOpen();
    window.addEventListener("open-chat-widget", handler);
    return () => window.removeEventListener("open-chat-widget", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Send greeting on first open
  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          role: "bot",
          text: `Hi there! 👋 Welcome to **Home Pros Group** — Spruce Grove and Stony Plain's trusted furnace and duct cleaning specialists.\n\nI can help you with:\n• Service details and pricing\n• Booking a callback with Keith\n• Answering questions about our service areas\n\nHow can I help you today?`,
          timestamp: new Date(),
        },
      ]);
    }
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    // Simulate brief typing delay for natural feel
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const submitInquiry = async (info: {
    name?: string;
    email?: string;
    phone?: string;
  }) => {
    setIsSending(true);
    try {
      // Collect conversation summary
      const conversationSummary = messages
        .map(
          (m) => `${m.role === "bot" ? "Bot" : "Visitor"}: ${m.text}`
        )
        .join("\n");

      const res = await fetch("/api/chat-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: info.name || "Unknown",
          email: info.email || "",
          phone: info.phone || "",
          conversation: conversationSummary,
        }),
      });

      if (res.ok) {
        addBotMessage(
          `Excellent! I've sent your details to Keith. Here's a summary:\n\n📋 **Name:** ${info.name}\n📧 **Email:** ${info.email || "Not provided"}\n📞 **Phone:** ${info.phone || "Not provided"}\n\nKeith will reach out to you shortly to schedule your service. In the meantime, you can always call us directly at **${BUSINESS.phone}**.\n\nThanks for choosing Home Pros Group! Is there anything else I can help with?`
        );
      } else {
        addBotMessage(
          `I wasn't able to send your info electronically, but no worries! You can reach Keith directly:\n\n📞 **${BUSINESS.phone}**\n📧 **${BUSINESS.email}**\n\nHe'll be happy to help you get booked!`
        );
      }
    } catch {
      addBotMessage(
        `I had trouble submitting your info, but you can reach Keith directly at **${BUSINESS.phone}** or **${BUSINESS.email}**. He'll get you taken care of!`
      );
    } finally {
      setIsSending(false);
      setStage("submitted");
    }
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Handle contact info collection stages
    if (stage === "collected_name") {
      const newInfo = { ...contactInfo, name: trimmed };
      setContactInfo(newInfo);
      const resp = generateResponse("", undefined, "collected_name", newInfo);
      addBotMessage(resp.text);
      setStage(resp.nextStage);
      return;
    }
    if (stage === "collected_email") {
      const newInfo = { ...contactInfo, email: trimmed };
      setContactInfo(newInfo);
      const resp = generateResponse("", undefined, "collected_email", newInfo);
      addBotMessage(resp.text);
      setStage(resp.nextStage);
      return;
    }
    if (stage === "collected_phone") {
      const newInfo = { ...contactInfo, phone: trimmed };
      setContactInfo(newInfo);
      // Submit the inquiry
      addBotMessage(
        "Perfect! Let me send your details to Keith right now..."
      );
      setTimeout(() => submitInquiry(newInfo), 1200);
      return;
    }

    // Normal intent detection
    const { intent, service } = detectIntent(trimmed);
    const response = generateResponse(intent, service, stage, contactInfo);
    addBotMessage(response.text);
    setStage(response.nextStage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Format message text with bold markdown
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Chat with Home Pros AI Assistant"
        >
          <div className="relative">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />

            {/* Main button */}
            <div className="relative flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl transition-all bg-gradient-to-r from-primary to-red-700 text-white hover:scale-105 active:scale-95 cursor-pointer">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="font-bold text-sm md:text-base whitespace-nowrap">
                Chat with Us
              </span>
            </div>
          </div>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[400px] max-h-[min(600px,calc(100vh-2rem))] flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="flex flex-col h-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-red-700 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    Home Pros Assistant
                  </h3>
                  <p className="text-[11px] text-white/80 leading-tight">
                    Online — typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[300px] max-h-[400px] bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-2 items-end",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
                      msg.role === "bot"
                        ? "bg-primary/10 text-primary"
                        : "bg-charcoal text-white"
                    )}
                  >
                    {msg.role === "bot" ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                      msg.role === "bot"
                        ? "bg-white text-slate-800 border border-slate-200 rounded-bl-md shadow-sm"
                        : "bg-primary text-white rounded-br-md shadow-sm"
                    )}
                  >
                    {formatText(msg.text)}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-200 px-3 py-2.5 bg-white flex-shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    stage === "collected_name"
                      ? "Enter your name..."
                      : stage === "collected_email"
                        ? "Enter your email..."
                        : stage === "collected_phone"
                          ? "Enter your phone number..."
                          : "Type a message..."
                  }
                  disabled={isSending}
                  className="flex-1 h-10 px-4 text-sm rounded-full border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50 text-slate-800 placeholder:text-slate-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isSending}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 active:scale-95"
                  aria-label="Send message"
                >
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Branding */}
            <div className="text-center py-1.5 bg-slate-50 border-t border-slate-100 flex-shrink-0">
              <a
                href="https://aiprecisionmarketing.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-slate-400 hover:text-primary transition-colors"
              >
                Powered by AI Precision Marketing
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
