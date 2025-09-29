import type { PostType } from "@/types/posts";
import { Ellipsis } from "lucide-react";
// import Quote from "./Quote";
import Header, { Column } from "../../Header";
import Content from "./Content";
import Avatar from "../../Avatar";
import Actions from "./Actions";

export default function Post({ post, ...restProps }: { post: PostType }) {
  const {
    // kind,
    profile,
    content,
    desc,
    stats,
  } = post;
  return (
    <div key={post.id} className="comp-Post" {...restProps}>
      {profile && (
        <Header
          className="comp-PostHeader"
          style={{
            padding: "0px 16px",
          }}
        >
          <Column>
            <div className="user flex items-center gap-1" {...restProps}>
              <Avatar profile={profile} width={45} />
              <span className="text name capitalize font-semibold">
                {profile?.name}
              </span>
            </div>
          </Column>
          <Column className="justify-end">
            <button className="iconButton" style={{ padding: 0, margin: 0 }}>
              <Ellipsis className="icon" />
            </button>
          </Column>
        </Header>
      )}
      <Content content={content} />
      {desc && <p className="py-1 px-8 text-gray-800">{desc}</p>}
      {stats && <Actions stats={stats} profile={profile} />}
    </div>
  );
}
