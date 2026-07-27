import React from "react";


interface HeroSectionProps {
    small: string;
    h1: React.ReactNode;
    p: string;
    children?: React.ReactNode;
}

const HeroSection = ({small, h1, p, children}: HeroSectionProps) => {
    return (
        <section className={"max-w-md mx-72"}>
            <small className={"uppercase"}>{small}</small>
            <h1 className={"mt-4 text-3xl font-bold"}>
                {h1}
            </h1>
            <p className={"mt-5"}>{p}</p>
            {children}
        </section>
    )
}

export default HeroSection;