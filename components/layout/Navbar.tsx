"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const links = [
        {name: "Home", url: "/"},
        {name: "About", url: "/about"},
        {name: "Communities", url: "/communities"},
        {name: "Topics", url: "/topics"},
        {name: "Developers", url: "/developers"},
    ]
    const pathname = usePathname();

    return (
        <header className="p-10 border-b">
            <nav className={"flex items-center justify-between"}>
                <Link href={"/"}>
                    Developer Community Platform
                </Link>
                <div className={"flex gap-x-5"}>
                    {links.map((link) => {
                        const isActive =
                            link.url === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.url);

                        return (
                            <Link
                                key={link.url}
                                href={link.url}
                                className={`uppercase transition-colors ${
                                    isActive
                                        ? "text-cyan-600 font-semibold"
                                        : "hover:text-cyan-600"
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>

    )
}

export default Navbar;