import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/Main"
import Projects from "@/components/projects/Projects"
import Container from "@/components/shared/Container"
import { getProjects } from "@/functions/projects"
import { getTechnologies } from "@/functions/technologies"

export default async function Home() {
    const technologies = await getTechnologies()
    const projects = await getProjects()

    return (
        <div>
            <Main technologies={technologies.highlights} />
            <Container className="py-16 flex flex-col items-center gap-10">
                <Projects title="Highlights" list={projects.highlights} />
                <Projects title="Web" list={projects.web} />
                <Projects title="Mobile" list={projects.mobile} />
                <Projects title="Games" list={projects.game} />
                <Curriculum technologies={technologies.all} />
            </Container>
        </div>
    )
}
