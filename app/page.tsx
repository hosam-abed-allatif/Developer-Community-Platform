import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const Home = () => {
    return (
        <HeroSection
            small={"Developer Community Platform"}
            h1={
                <>Ship Better Code <br/> with a Community <br/> Behind You.</>
            }
            p={"Get real-time feedback, solve tricky technical blockers, and stay ahead of modern tech stacks."}
        >
            <div className={"mt-5 flex items-center gap-x-5"}>
                <Link className={"border p-3 rounded-full bg-cyan-900"} href={"/communities"}>
                    Explore Communities
                </Link>
                <Link className={"border p-3 rounded-full border-cyan-900 "} href={"/developers"}>
                    Meet Developers
                </Link>
            </div>
        </HeroSection>
    )
}
export default Home;