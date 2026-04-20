import { useState } from "react"

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container-wrapper">
            <nav className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 px-6 my-2 h-14 flex flex-row md:hidden items-center justify-between">     
                <h1 className="text-(--color-heading) text-2xl">Alexander Proulx</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
                >
                    <span className={`block w-6 h-0.5 bg-(--color-heading) transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>
                    <span className={`block w-6 h-0.5 bg-(--color-heading) transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}/>
                    <span className={`block w-6 h-0.5 bg-(--color-heading) transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
                </button>
            </nav>
            <div className={`absolute right-4 mt-2 w-56 rounded-2xl backdrop-blur-md bg-[#1a0800] border border-white/10 p-6 flex flex-col gap-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <button className="btn-primary">Work</button>
                <button className="btn-primary">About</button>
                <button className="btn-primary">Contact</button>
                <button className="btn-ghost">Resume</button>
            </div>
        </div>
    )
}