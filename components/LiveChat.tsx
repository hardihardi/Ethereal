"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [inputText, setInputText] = useState("")

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }])
      setInputText("")
      // Simulate a response from the chat bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for your message. Our team will get back to you soon.", isUser: false },
        ])
      }, 1000)
    }
  }

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
          >
            <div className="p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Chat</h3>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`${message.isUser ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.isUser
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

