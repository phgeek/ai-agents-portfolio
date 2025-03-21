import { Technology } from "@core"

export interface WorkedTechnologiesProps {
    technologies: Technology[]
}

export default function WorkedTechnologies(props: WorkedTechnologiesProps) {
    return props.technologies ? (
        <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-y-zinc-800 rounded-2xl">
            <div className="flex justify-center gap-x-3 flex-wrap">
                {props.technologies.map((technology) => (
                    <div key={technology.id}>
                        <span className="text-red-500">#</span>
                        <span>{technology.name}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}
