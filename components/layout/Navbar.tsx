import Link from "next/link";

const Navbar = () => {
    const links = [
        {name: "Home", url: "/"},
        {name: "About", url: "/about"},
        {name: "Communities", url: "/communities"},
        {name: "Topics", url: "/topics"},
        {name: "Developers", url: "/developers"},
    ]

    return (
        <header className="p-10 border-b">
            <nav className={"flex items-center justify-between"}>
                <Link href={"/"}>
                    Developer Community Platform
                </Link>
                <div className={"flex gap-x-5"}>
                    {links.map(link => (
                        <Link key={link.url} href={link.url}>{link.name}</Link>
                    ))}
                </div>
            </nav>
        </header>

    )
}

export default Navbar;