import Link from "next/link";

interface PostProps {
    username: string
    id: string;
    title: string;
    description: string;
}

const PostCard = ({username, id, title, description}: PostProps) => {
    return (
        <div className="flex flex-col gap-2 border border-gray-800 bg-cyan-900 p-4 rounded-md">
            <h3 className="font-semibold text-base text-cyan-400">
                <Link href={`${username}/posts/${id}`}> {title}</Link>
            </h3>
            <p className="text-xs">{description}</p>
        </div>
    );
}
export default PostCard;