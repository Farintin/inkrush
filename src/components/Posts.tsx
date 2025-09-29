import { posts } from "@/constants/posts";
import users from "@/constants/users";
import // Play
"lucide-react";
import Post from "./UI/cards/Post";

export default function Posts() {
  const postCards = posts.map((post) => ({
    ...post,
    profile: users.find((u) => u.id === post.profileId),
  }));
  return (
    <div className="comp-Posts">
      {postCards.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
