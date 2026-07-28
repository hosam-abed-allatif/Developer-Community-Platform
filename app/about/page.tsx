import HeroSection from "@/components/HeroSection";

const About = () => {
    return (
        <>
            <title>About</title>
            <HeroSection
                small={"about"}
                h1={<>Nehna Top <br/> wl Ba2e <br/> Photoshop.</>}
                p={"We’re on a mission to connect developers worldwide, break down technical barriers, and create a collaborative ecosystem where everyone—from beginners to senior architects—can learn, share, and grow."}
            />
        </>
    )
}

export default About;