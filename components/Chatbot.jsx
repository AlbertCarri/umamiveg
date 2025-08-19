"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";


const PigChefIcon = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    
    <path
      d="M32 8c-8 0-14 4-16 10-1-2-3-3-5-3-3 0-5 2-5 5 0 2 1 4 3 5v3c0 4 2 7 5 9h36c3-2 5-5 5-9v-3c2-1 3-3 3-5 0-3-2-5-5-5-2 0-4 1-5 3-2-6-8-10-16-10z"
      fill="#ffffff"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    
    <ellipse
      cx="32"
      cy="40"
      rx="18"
      ry="16"
      fill="#ffc0cb"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    
    <circle cx="26" cy="36" r="2" fill="#000" />
    <circle cx="38" cy="36" r="2" fill="#000" />
    
    <ellipse
      cx="32"
      cy="44"
      rx="4"
      ry="3"
      fill="#ff91a4"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    
    <circle cx="30" cy="44" r="0.8" fill="#000" />
    <circle cx="34" cy="44" r="0.8" fill="#000" />
    
    <path
      d="M28 48 Q32 52 36 48"
      stroke="#000"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export function Chatbot({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages,
        }),
      });

      if (!response.ok) throw new Error("Error en la respuesta");

      const data = await response.json();

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: "Lo siento, hubo un error. Por favor intenta de nuevo.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={"fixed bottom-4 right-4 z-50"}>
      {!isOpen ? (
        // Botón flotante con el cerdito chef
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 drop-shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 border-2 border-white"
        >
          <PigChefIcon className="w-50 h-50 animate-bounce " />
        </Button>
      ) : (
        <Card className="w-80 h-[600px] bg-gray-800 shadow-2xl border-2 flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-t-lg">
            <div className="flex items-center gap-2">
              <PigChefIcon className="w-8 h-8" />
              <h3 className="font-semibold text-lg">Chef Bot</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-pink-200 dark:hover:bg-pink-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4 overflow-scroll scrollbar-hide">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm">
                  ¡Hola! Soy Chef Bot 🐷👨‍🍳
                  <br />
                  ¿En qué puedo ayudarte hoy?
                </div>
              )}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
