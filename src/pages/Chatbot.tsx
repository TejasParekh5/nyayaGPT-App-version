
import { useState } from "react";
import Layout from "@/components/Layout";
import { Mic, Send, Volume2 } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import Card from "@/components/Card";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your NyaySetu legal assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [
      ...messages,
      {
        id: Date.now(),
        text: input,
        isUser: true,
        timestamp: new Date(),
      },
    ];
    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          id: Date.now() + 1,
          text: "Thank you for your question. Let me provide you with information about this legal matter...",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: question,
        isUser: true,
        timestamp: new Date(),
      },
    ]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          text: `Here's information about ${question.toLowerCase().replace("?", "")}: [Legal information would be provided here]`,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-nyaysetu-blue text-white p-4">
          <h1 className="text-xl font-semibold">Legal Assistant</h1>
          <p className="text-sm opacity-80">Ask any legal question</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl py-3 px-4 ${
                  message.isUser
                    ? "bg-nyaysetu-orange text-white rounded-tr-none"
                    : "bg-white text-nyaysetu-grey shadow-md rounded-tl-none"
                }`}
              >
                <div className="text-sm">{message.text}</div>
                {!message.isUser && (
                  <div className="mt-2 flex justify-end">
                    <button className="text-nyaysetu-blue p-1 rounded-full">
                      <Volume2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Questions */}
        <div className="px-4 py-3 bg-white">
          <div className="mb-2 text-sm font-medium text-nyaysetu-grey">
            Suggested Questions:
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              className="px-3 py-1.5 bg-gray-100 text-nyaysetu-grey rounded-full text-sm whitespace-nowrap"
              onClick={() => handleQuickQuestion("What are tenant rights?")}
            >
              What are tenant rights?
            </button>
            <button
              className="px-3 py-1.5 bg-gray-100 text-nyaysetu-grey rounded-full text-sm whitespace-nowrap"
              onClick={() => handleQuickQuestion("How to file FIR?")}
            >
              How to file FIR?
            </button>
            <button
              className="px-3 py-1.5 bg-gray-100 text-nyaysetu-grey rounded-full text-sm whitespace-nowrap"
              onClick={() => handleQuickQuestion("Legal document verification?")}
            >
              Legal document verification?
            </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-1 border border-gray-300 rounded-full overflow-hidden flex items-center pr-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="h-8 w-8 rounded-full flex items-center justify-center text-nyaysetu-blue"
                onClick={handleSend}
              >
                <Send size={18} />
              </button>
            </div>
            <button className="ml-2 h-10 w-10 bg-nyaysetu-blue rounded-full flex items-center justify-center text-white shadow-md">
              <Mic size={20} />
            </button>
          </div>
        </div>

        {/* Need Legal Aid Floating Button */}
        <div className="fixed bottom-24 right-6">
          <PrimaryButton
            className="shadow-lg"
            onClick={() => window.location.href = "/legal-aid"}
          >
            Need Legal Aid?
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
