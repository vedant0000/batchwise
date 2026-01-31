import { useState } from "react"
import { collegeKnowledge } from "../../../data/collegeData"

export default function ChatbotPanel({ close }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask me anything about the college!" }
  ])
  const [input, setInput] = useState("")

  const getReply = (question) => {
    const lower = question.toLowerCase()

    for (let item of collegeKnowledge) {
      if (item.keywords.some(k => lower.includes(k))) {
        return item.answer
      }
    }

    return "Sorry, I only answer college-related queries."
  }

  const send = () => {
    if (!input.trim()) return

    const reply = getReply(input)

    setMessages(prev => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: reply }
    ])

    setInput("")
  }

  return (
    <div className="chatbot-panel">
      <div className="chatbot-header">
        <span>College Assistant</span>
        <button onClick={close}>✕</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}