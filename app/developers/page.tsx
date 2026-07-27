import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const Developers = () => {
    return (
        <>
            <HeroSection small={"Developers"} h1={
                <>Discover & Connect <br/> with World-Class Developers.</>
            }
                         p={"Find engineers building with your favorite tech stacks, share expertise, and expand your professional engineering circle."}/>

            <div className="max-w-md mx-72 mt-10 flex gap-x-5">
                <Link className={"border hover:bg-gray-800 px-3 py-1 rounded-full"}
                      href={"/developers/top-rated"}>top rated</Link>
                <Link className={"border hover:bg-gray-800 px-3 py-1 rounded-full"}
                      href={"/developers/new-members"}>new members</Link>
            </div>
        </>
    )
}
export default Developers;