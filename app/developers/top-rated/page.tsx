import HeroSection from "@/components/HeroSection";
import {DEVELOPERS} from "@/backend/developers";
import DeveloperCard from "@/components/DeveloperCard";

const TopRated = () => {
    return (
        <>
            <HeroSection small={"Top Rated"} h1={
                <>Celebrating the Best <br/> in the Community.</>
            }
                         p={"Meet our top-rated developers, top open-source contributors, and community leaders. Recognized for their exceptional code contributions, mentorship, and technical insights."}/>
            <div className={"mx-72 mt-10 grid grid-cols-3 gap-3"}>
                {DEVELOPERS.map((developer) => (
                    developer.type === "top-rated" &&
                    <DeveloperCard key={developer.id} id={developer.id}
                                   username={developer.username}
                                   description={developer.description} pic={developer.pic}/>
                ))}
            </div>
        </>
    )
}
export default TopRated