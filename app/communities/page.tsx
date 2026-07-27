import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import {COMMUNITIES} from "@/backend/communities"
import CommunityCard from "@/components/CommunityCard";

const Communities = () => {
    return (
        <>
            <HeroSection small={"communities"} h1={
                <>Built Around <br/> What You Code.</>
            }
                         p={"Dive into topic-focused groups, stay updated on breaking trends, and collaborate directly with engineers who share your passion."}/>

            <div className="max-w-md mx-72 mt-10 flex gap-x-5">
                <Link className={"border hover:bg-gray-800 px-3 py-1 rounded-full"}
                      href={"/communities/web-development"}>web</Link>
                <Link className={"border hover:bg-gray-800 px-3 py-1 rounded-full"}
                      href={"/communities/mobile-development"}>mobile</Link>
                <Link className={"border hover:bg-gray-800 px-3 py-1 rounded-full"}
                      href={"/communities/ui-ux"}>ui-ux</Link>
            </div>
            <div className={"mx-72 mt-10 grid grid-cols-3 gap-3"}>
                {COMMUNITIES.map((community) => (
                    <CommunityCard key={community.slug} slug={community.slug} totalMembers={community.totalMembers}
                                   title={community.title} description={community.description}/>
                ))}
            </div>
        </>
    )
}

export default Communities;