import Link from "next/link";

interface CommunityCardProps {
    slug: string;
    totalMembers: number;
    title: string;
    description: string;
}

const CommunityCard = ({title, totalMembers, slug, description}: CommunityCardProps) => {
    return (
        <div className="border border-gray-900 bg-cyan-900 p-3 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <span className="text-xs text-white text-end">
              {totalMembers}
            </span>
            </div>
            <p className="text-sm text-gray-400">{description}</p>
            <Link
                href={`/communities/${slug}`}
                className="inline-block mt-2 text-sm font-semibold text-cyan-500 hover:underline"
            >
                Read More &rarr;
            </Link>
        </div>
    )
}

export default CommunityCard;