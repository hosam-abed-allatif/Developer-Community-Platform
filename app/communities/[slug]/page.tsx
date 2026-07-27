import HeroSection from "@/components/HeroSection";
import {COMMUNITIES} from "@/backend/communities"

const Community = async ({params,}: {
    params: Promise<{ slug: string }>;
}) => {
    const {slug} = await params;
    const community = COMMUNITIES.find((community) => community.slug === slug);

    return (
        <HeroSection
            small={`${community.totalMembers} members`}
            h1={community.title}
            p={community.description}
        >
            <button
                className={"bg-cyan-900 border rounded-full mt-10 px-3 py-2 cursor-pointer hover:bg-cyan-500 hover:text-cyan-900"}>Join
                Community
            </button>
        </HeroSection>
    );
};

export default Community;