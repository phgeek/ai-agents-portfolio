import ChatButton from "@/components/chat/ChatButton"

export default function Layout(props: any) {
    return (
        <div>
            {props.children}
            <ChatButton />
        </div>
    )
}
