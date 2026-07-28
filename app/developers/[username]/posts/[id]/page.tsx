import {DEVELOPERS} from "@/backend/developers"
import NotFound from "@/app/not-found";

const PostView = async ({params,}: {
    params: Promise<{ id: string }>;
}) => {
    const {id} = await params;
    const post = DEVELOPERS.flatMap((developer) => developer.posts).find((post) => post.id === id);
    if (!post) {
        return NotFound();
    }

    return (
        <div className="mx-72 space-y-6">
            <title>{post.title}</title>
            <h1 className={"text-xl font-bold text-cyan-400"}>{post.title}</h1>
            <p className={"text-sm"}>{post.description}</p>
        </div>
    );
};

export default PostView;