import Badge from "./Badge";
import techColors from "./techColors";

type ProjectProps = {
    imgSrc: string
    title: string,
    description: string,
    siteLink: string,
    githubLink: string,
    technologies: string[],
}

function Project({imgSrc, title, description, siteLink, githubLink, technologies}: ProjectProps) {
    return (
        <div className="flex flex-col text-center gap-2">
            <img src={imgSrc} alt={`${title} screenshot`}></img>
            <h3 className="text-lg text-cyan">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((tech) => (
                    <Badge key={tech} label={tech} colors={techColors[tech]}></Badge>
                ))}
            </div>
            <p className="text-aquatic">{description}</p>
            <a href={siteLink}><button className="bg-cherry text-black w-full p-1 rounded-2xl">Live site</button></a>
            <a href={githubLink}><button className="bg-cyan text-black w-full p-1 rounded-2xl">Github link</button></a>
        </div>
)
}

export default Project;