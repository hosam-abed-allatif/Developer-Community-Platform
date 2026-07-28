import {DEVELOPERS} from "@/backend/developers"
import PostCard from "@/components/PostCard";

const Community = async ({params,}: {
    params: Promise<{ username: string }>;
}) => {
    const {username} = await params;
    const developer = DEVELOPERS.find((developer) => developer.username === username);
    if (!developer) {
        return;
    }
    return (
        <div className="mx-72">
            <title>{developer.username}</title>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600 font-bold text-xl">
                        {developer.pic}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">@{developer.username}</h1>
                        <p className="text-sm text-gray-500 mt-2">{developer.role} Developer</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xs font-semibold uppercase">
                        About
                    </h2>
                    <p className="text-sm">
                        {developer.description}
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xs font-semibold uppercase">
                        Interests
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {developer.interests.map((interest) => (
                            <span
                                key={interest}
                                className="text-xs bg-cyan-800 px-3 py-1 rounded-full">
                {interest}
              </span>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xs font-semibold uppercase">
                        Posts
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        {developer.posts.map((post) => (
                            <PostCard username={developer.username} id={post.id} key={post.id} title={post.title}
                                      description={post.description}/>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Community;