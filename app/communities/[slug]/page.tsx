import HeroSection from "@/components/HeroSection";
import {COMMUNITIES} from "@/backend/communities";

const Community = async ({params,}: {
    params: Promise<{ slug: string }>;
}) => {
    const {slug} = await params;

    const community = COMMUNITIES.find((item) => item.slug === slug);
    if (!community) {
        return;
    }
    return (
        <>
            <title>{community.title}</title>
            <HeroSection
                small={`${community.totalMembers.toLocaleString()} members`}
                h1={community.title}
                p={community.description}
            >
                <button
                    className="bg-cyan-900 border rounded-full mt-10 px-3 py-2 cursor-pointer hover:bg-cyan-500 hover:text-cyan-900">
                    Join Community
                </button>
            </HeroSection>
        </>
    );
};

export default Community;