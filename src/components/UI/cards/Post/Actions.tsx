import users from "@/constants/users";
import type { PostStatsType } from "@/types/posts";
import {
  Send,
  // Share2
} from "lucide-react";
import Avatar from "../../Avatar";
import type { UserType } from "@/types";

export default function Actions({
  // profile,
  // stats,
  ...restProps
}: {
  profile?: UserType;
  stats: PostStatsType;
}) {
  // const { comments } = stats;

  return (
    <div className="comp-Actions" {...restProps}>
      <div className="row p-1">
        <div className="users">
          {users.slice(0, 3).map((u, i) => (
            <div key={i} className="user">
              <Avatar profile={u} width={36} />
            </div>
          ))}
        </div>
        <span className="comment text">whats title of the book? ...</span>
        {/* <button className="iconButton">
          <MessageCircle
            size={30}
            style={{
              strokeWidth: 1.8,
              stroke: "rgba(0,0,0,.3)",
            }}
          />
          <span className="text text-[16px] text-gray-800 font-semibold absolute">
            {comments}
          </span>
        </button> */}
        <button className="iconButton">
          <Send size={32} className="stroke-gray-800 stroke-[1.5]" />
        </button>
      </div>
      {/* {profile && (
        <div className="row">
          <div className="profile">
            <Avatar profile={profile} width={40} />
          </div>

          <div className="comp-CommentBox">
            <textarea
              name="comment"
              id="comment"
              placeholder="add comment..."
            ></textarea>
          </div>
        </div>
      )} */}
    </div>
  );
}
