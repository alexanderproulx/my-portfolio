import Headshot from "./Hero-Section/Headshot"
import ProfileCard from "./Hero-Section/Profile-Card"

export default function Hero() { 
    return (
        <div className="container-wrapper flex flex-col md:flex-row items-center gap-6 md:gap-24">
            <ProfileCard />
            <Headshot />
        </div>
    )
}