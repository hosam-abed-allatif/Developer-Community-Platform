import HeroSection from "@/components/HeroSection";

const WebDevelopment = () => {
    return (
        <>
            <title>Web Development</title>
            <HeroSection small={"web development"} h1={
                <>Building the Modern <br/> Web Experience.</>
            }
                         p={"From serverless backends and API design to modern React frameworks and CSS architecture—connect with developers building scalable, high-performance web applications."}/>
        </>
    )
}

export default WebDevelopment