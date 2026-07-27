import Link from "next/link";

const Home = () => {
    return (
        <section className={"max-w-md mx-72"}>
            <small>Developer Community Platform</small>
            <h1 className={"mt-4 text-3xl font-bold"}>
                Ship Better Code <br/> with a Community <br/> Behind You.
            </h1>
            <p className={"mt-5"}>Get real-time feedback, solve tricky technical blockers, and stay ahead of modern
                tech stacks.</p>
            <div className={"mt-5 flex items-center gap-x-5"}>
                <Link className={"border p-3 rounded-full bg-cyan-900"} href={"/communities"}>
                    Explore Communities
                </Link>
                <Link className={"border p-3 rounded-full border-cyan-900 "} href={"/developers"}>
                    Meet Developers
                </Link>
            </div>
        </section>
    )
}
export default Home;