import Readme from "@/components/projects/Readme"
import Container from "@/components/shared/Container"
import Header from "@/components/shared/Header"
import ImageCarousel from "@/components/shared/ImageCarousel"
import Technologies from "@/components/technologies/Technologies"
import { getReadme } from "@/functions/github"
import { getProject } from "@/functions/projects"

// export const revalidate = 3600 // 1 hour

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params
    const project = await getProject(id)

    if (!project) return null

    const readme = await getReadme(project?.repository)

    return (
        <div className="bg-black">
            <Header />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{project.name}</h1>
                <ImageCarousel images={project?.images.slice(1)} />
                <Technologies list={project?.technologies} sizeSmall />
                <Readme markdown={readme} />
            </Container>
        </div>
    )
}
