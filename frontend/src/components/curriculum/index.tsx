import { Technology } from "@core"
import WorkedTechnologies from "./WorkedTechnologies"
import Experience from "./Experience"
import MiniCV from "./MiniCV"

export interface CurriculumProps {
    technologies: Technology[]
}

export default function Curriculum(props: CurriculumProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MiniCV />
            <Experience />
            <WorkedTechnologies technologies={props.technologies} />
        </div>
    )
}
