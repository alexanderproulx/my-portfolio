export default function Headshot() {
    return (
        <div className="rounded-full overflow-hidden w-64 h-64 md:w-104 md:h-104">
            <img src="/logo.png" alt="Headshot" width={104} height={104} className="object-contain w-full h-full"/>
        </div>
    )
}