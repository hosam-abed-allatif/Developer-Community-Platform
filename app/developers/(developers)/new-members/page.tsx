import HeroSection from "@/components/HeroSection";
import {DEVELOPERS} from "@/backend/developers";
import DeveloperCard from "@/components/DeveloperCard";

const NewMembers = () => {
    return (
      <>
              <title>New Members</title>
          <HeroSection small={"New Members"} h1={
              <>Welcome to the Next <br/> Generation of Creators.</>
          }
                       p={"Say hello to our newest community members! Discover developers who recently joined, explore their technical interests, and help them feel right at home."}/>

          <div className={"mx-72 mt-10 grid grid-cols-3 gap-3"}>
              {DEVELOPERS.map((developer) => (
                  developer.type === "new-members" &&
                  <DeveloperCard key={developer.id} id={developer.id}
                                 username={developer.username}
                                 description={developer.description} pic={developer.pic}/>
              ))}
          </div></>
    )
}
export default NewMembers