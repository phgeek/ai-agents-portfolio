import Message from "@/model/Message"
import MDContent from "../shared/MDContent"
import Image from "next/image"

export interface MessageBalloonProps {
    message: Message
    hideAuthor?: boolean
}

export default function MessageBalloon(props: MessageBalloonProps) {
    return props.message.side === "left" ? <BalloonLeft {...props} /> : <BalloonRight {...props} />
}

function BalloonLeft(props: MessageBalloonProps) {
    return (
        <div className="flex gap-4">
            {!props.hideAuthor && <Image src="/chat.svg" alt="Assistant" width={40} height={40} />}
            <div className={`flex flex-col ${props.hideAuthor && "pl-18"}`}>
                {!props.hideAuthor && (
                    <span className="text-xs text-zinc-600">{props.message.author}</span>
                )}
                <div
                    className={`bg-black text-white px-7 py-4 rounded-r-3xl rounded-bl-3xl ${
                        props.hideAuthor ? "sm:w-72" : "sm:w-80"
                    }`}
                >
                    <MDContent markdown={props.message.text} />
                </div>
            </div>
        </div>
    )
}

function BalloonRight(props: MessageBalloonProps) {
    return (
        <div className={`flex flex-col items-end ${props.hideAuthor && "pr-5"}`}>
            {!props.hideAuthor && (
                <span className="text-xs text-zinc-600">{props.message.author}</span>
            )}
            <div
                className={`bg-red-700 text-white px-7 py-4 rounded-l-3xl rounded-br-3xl ${
                    props.hideAuthor ? "sm:w-72" : "sm:w-80"
                }`}
            >
                {props.message.text}
            </div>
        </div>
    )
}
