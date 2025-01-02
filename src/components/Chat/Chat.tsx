import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';



interface ChatProps {
  conversation: (messages: { role: string; content: string }[]) => void;
}

const Chat: React.FC<ChatProps> = ({ conversation }) => {
  const [messageStatus, setMessageStatus] = useState({message:null, status:null});
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! Come posso aiutarti oggi?' },
    { role: 'user', content: 'Ciao, quanti ragazzi tra i 18 e 25 anni vogliono piu campi da tennis a Ravenna?' },
    { role: 'assistant', content: 'Secondo un sondaggio immaginario, circa il 72% dei ragazzi tra i 18 e i 35 anni a Ravenna ha espresso interesse per la creazione di più campi da tennis nella città.' },
  ]);

  const [inputValue, setInputValue] = useState('');

  // Reference to the bottom of the messages list
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: inputValue },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: 'This is a placeholder response.' },
        ]);
      }, 0); // Timeout duration in milliseconds (10 seconds)

      conversation(
        [
          ...messages,
          { role: 'user', content: inputValue },
        ]
      )
    }
  };
  

  return (
    <div className="flex flex-col bg-gray-50/80 rounded-lg shadow-1 dark:bg-gray-dark dark:shadow-card h-full"  style={{ maxHeight: '850px' }}>
      {/* Messages Container */}
      <div className="overflow-y-auto p-4 h-full" 
      style={{ maxHeight: '850px' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0 mr-2">
                <Image
                  src="/images/chat/user-chat.gif"
                  alt="Assistant"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            )}
            <div
              className={`rounded-xl p-4 max-w-xl ${
                message.role === 'user'
                  ? 'bg-[rgba(0,161,129,0.5)] text-white'
                  : 'bg-white text-black'
              }`}
            >
              {message.role === 'assistant' ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                <span>{message.content}</span>
              )}
            </div>
            {message.role === 'user' && (
              <div className="flex-shrink-0 ml-2">
                <Image
                  src="/images/user/user-03.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        ))}
        {/* Dummy div to maintain scroll position */}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Area */}
      <div className="p-4 bg-white rounded-b-lg">
        <input
          type="text"
          className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
