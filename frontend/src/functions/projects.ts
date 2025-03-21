import { Project, Type } from "@core"
import { httpGet } from "./api"

export async function getProjects() {
    const projects: Project[] = await httpGet("/projects")

    return {
        all: projects,
        get mobile() {
            return projects.filter((project) => project.type === Type.MOBILE)
        },
        get web() {
            return projects.filter((project) => project.type === Type.WEB)
        },
        get game() {
            return projects.filter((project) => project.type === Type.GAME)
        },
        get highlights() {
            return projects.filter((project) => project.highlight)
        },
    }
}

export async function getProject(id: string): Promise<Project | null> {
    return await httpGet(`/projects/${id}`)
}
