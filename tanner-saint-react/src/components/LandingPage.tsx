function LandingPage() {
    return (
        <div className="flex flex-col text-center justify-center text-2xl gap-4 min-h-screen w-screen text-aquatic">
            <h1>Hello, I'm Tanner</h1>
            <p>I'm a full stack web developer</p>
            <a href="#about_me">
                <button 
                    className="border-2 text-lg border-cherry text-cherry rounded-lg mx-auto p-1"
                >Get to know me</button>
            </a>
        </div>
    )
}

export default LandingPage;