import Link from "next/link";

interface DeveloperProps {
    id: string;
    username: string;
    description: string;
    pic: string;
}

const DeveloperCard = ({username, description, pic}: DeveloperProps) => {
    return (
        <div className="border border-gray-900 bg-cyan-900 p-3 rounded-xl space-y-3">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600 font-bold text-sm">
                    {pic}
                </div>
                <div>
                    <h3 className="font-semibold text-sm">
                        <Link href={`/developers/${username}`}>@{username}</Link>
                    </h3>
                </div>
            </div>
            <p className="text-xs text-gray-300 mt-3">{description}</p>
        </div>
    );
}

export default DeveloperCard;