export default function DesktopNavbar() {
    return (
        <div className="container-wrapper sticky top-0 z-50">
            <nav className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 px-6 my-6 h-18 hidden md:flex md:flex-row items-center justify-between">
                <h1 className="text-(--color-heading) text-2xl">Alexander Proulx</h1>
                <div className="flex flex-row items-center gap-4">
                    <button className="btn-primary">Work</button>
                    <button className="btn-primary">About</button>
                    <button className="btn-primary">Contact</button>
                    <button className="btn-ghost">Resume</button>
                </div>
            </nav>
        </div>
    )
}
