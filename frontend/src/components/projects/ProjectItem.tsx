import { Project } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ProjectItemProps {
    project: Project
}

export default function ProjectItem(props: ProjectItemProps) {
    return (
        <Link href={`/projects/${props.project.id}`}>
            <div
                className="
                    relative rounded-2xl overflow-hidden border border-y-zinc-800
                    min-w-64 min-h-64
                "
            >
                <Image
                    src={props.project.images[0]}
                    alt={props.project.name}
                    fill
                    objectFit="object-cover"
                />
            </div>
        </Link>
    )
}
