import HeroSection from "@/components/HeroSection";

const Community = async ({params,}: {
    params: Promise<{ slug: string }>;
}) => {
    const {slug} = await params;

    return (
        <HeroSection
            small="communities/[slug]"
            h1={slug}
            p={`Welcome to the ${slug} community!`}
        />
    );
};

export default Community;