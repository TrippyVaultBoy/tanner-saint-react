import headshot from "../assets/tanner-saint.jpg";

function AboutMe() {
    return (
        <div className="flex flex-col text-center justify-center gap-4 pt-8 text-aquatic w-screen h-screen">
            <h2 className="text-cyan text-2xl">About Me</h2>

            <div className="flex justify-center">
                <img className="w-64 h-64 rounded-2xl" src={headshot} alt="my headshot"></img>
            </div>
            
            <div className="typewriter">
                <h3 id="text" className="text-cyan text-2xl">I'm Tanner Saint</h3>
            </div>
            
            <div className="flex flex-row justify-center gap-2">
                <p>Frontend</p>
                <div className="w-px h-full bg-aquatic"></div>
                <p>Responsive Design</p>
                <div className="w-px h-full bg-aquatic"></div>
                <p>Backend</p>
            </div>
            
            <div className="flex flex-col text-center gap-4 mx-4 text-md">
                <p>I’m a full stack developer with a passion for learning new skills and bringing ideas to life. I build functional, good-looking websites with a focus on responsive, user-friendly design.</p>
                <p>I do my best work when creativity and logical problem-solving come together.</p>
                <p>When I’m not building websites, you can usually find me watching Star Wars or playing the latest video games.</p>
            </div>

            <button className="bg-cyan text-black mx-auto w-40 h-16 rounded-lg">Contact Me</button>
        </div>
    )
}

export default AboutMe;