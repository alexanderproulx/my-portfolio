export default function Headshot() {
    return (
        <div className="relative">
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96">
                <img src="/headshot.png" alt="Headshot" className="object-cover w-full h-full"/>
            </div>

            <div className="absolute top-0 -left-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-[var(--color-heading)] whitespace-nowrap">
                React · Tailwind
            </div>

            <div className="absolute bottom-0 right-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-[var(--color-heading)] whitespace-nowrap">
                Node · Git
            </div>
        </div>
    )
}