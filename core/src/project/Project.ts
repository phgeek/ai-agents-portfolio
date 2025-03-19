import Technology from "../technology/Technology"
import { Level } from "./Level"
import { Type } from "./Type"

export default interface Project {
    id: number
    name: string
    description: string
    images: string[]
    type: Type
    level: Level
    repository: string
    highlight: boolean
    technologies: Technology[]
}
