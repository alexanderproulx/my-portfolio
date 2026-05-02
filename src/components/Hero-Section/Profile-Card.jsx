export default function ProfileCard() {
    return (
        <div className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 h-full flex flex-col items-left p-8">
                <h1 className="text-(--color-heading) text-5xl">Hi, I'm Xander.</h1>
                <p className="text-(--color-body) text-lg mt-4 max-w-180">
                    I am a third year Computer Science student at Brock University,
                    currently pursuing a degree in Computer Science with a concentration
                    in Software Engineering. I have past experience in React based web development,
                    and I currently specialize in creating full stack web applications.

                </p>
                <div className="flex flex-row items-center gap-4 mt-4">
                    <button className="btn-primary">My Work</button>
                    <button className="btn-ghost">Contact Me</button>
                </div>
        </div>
    )
}