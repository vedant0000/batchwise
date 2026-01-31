import { useState } from "react"
import ChatbotButton from "./ChatbotButton"
import ChatbotPanel from "./ChatbotPanel"

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ChatbotButton onClick={() => setOpen(prev => !prev)} />
      {open && <ChatbotPanel close={() => setOpen(false)} />}
    </>
  )
}
