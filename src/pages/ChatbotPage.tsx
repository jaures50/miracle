import React from "react";

const ChatbotPage: React.FC = () => {
  return (

    <div className="flex flex-col h-[calc(100vh-64px)] p-6">

      {/* titre */}

      <h2
        className="text-2xl font-bold mb-6"
        style={{ color: "var(--primary)" }}
      >
        AI Chatbot
      </h2>

      {/* zone messages */}

      <div
        className="flex-1 overflow-y-auto p-4 rounded-lg border"
        style={{ borderColor: "var(--border-color)" }}
      >

        {/* message AI */}

        <div className="mb-4 flex">
          <div
            className="p-3 rounded-lg max-w-md"
            style={{ background: "var(--bg-sidebar)", color: "white" }}
          >
            Hello 👋  
            Ask me anything about design!
          </div>
        </div>

        {/* message utilisateur */}

        <div className="mb-4 flex justify-end">
          <div
            className="p-3 rounded-lg max-w-md"
            style={{ background: "var(--primary)", color: "white" }}
          >
            How can I create a social media design?
          </div>
        </div>

      </div>

      {/* input */}

      <div className="mt-4 flex gap-3">

        <input
          type="text"
          placeholder="Ask something..."
          className="flex-1 p-3 rounded-lg border outline-none"
          style={{ borderColor: "var(--border-color)" }}
        />

        <button
          className="px-6 rounded-lg text-white font-semibold"
          style={{ background: "var(--primary)" }}
        >
          Send
        </button>

      </div>

    </div>

  );
};

export default ChatbotPage;