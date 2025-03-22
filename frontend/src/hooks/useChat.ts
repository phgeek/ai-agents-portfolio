import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import Message from "@/model/Message"
import talkToAssistant from "@/functions/chat"
import { useState } from "react"

export default function useChat() {
    const [chatId] = useLocalStorage<string>("chatId", Id.generate())
    const [messages, setMessages] = useLocalStorage<Message[]>("messages", [])
    const [thinking, setThinking] = useState(false)

    async function addMessage(text: string) {
        try {
            setThinking(true)

            const newMessage: Message = {
                id: Id.generate(),
                text,
                author: "Guest",
                side: "right",
            }

            setMessages((msgs) => [...msgs, newMessage])

            const answer = await talkToAssistant(chatId, newMessage)

            if (!answer) return

            const answerMessage: Message = {
                id: Id.generate(),
                text: answer,
                author: "Assistant",
                side: "left",
            }

            setMessages((msgs) => [...msgs, answerMessage])
        } finally {
            setThinking(false)
        }
    }

    function clearMessages() {
        setMessages([])
    }

    return {
        chatId,
        messages,
        thinking,
        addMessage,
        clearMessages,
    }
}
