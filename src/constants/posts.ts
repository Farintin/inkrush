import type { PostsType } from "@/types/posts";

export const posts: PostsType = [
  {
    id: "p1",
    profileId: "u1",
    kind: "quote",
    content: {
      text: "Fear is the mind-killer…",
      images: [
        "src/assets/images/books/Agito Cosmos.jpeg",
        "src/assets/images/books/Agito Cosmos - cover.jpeg",
      ],
      workRef: { workId: "w1", detail: { chapter: 3 } },
    },
    desc: "Fear is the mind-killer…",
    stats: { likes: 120, comments: 8, shares: 5, saves: 30 },
  },
];

// posts.ts (home feed)
// export const posts = [
//   { id:"p1", authorUserId:"u2", kind:"quote", text:"Fear is the mind-killer…", workRef:{workId:"w1",chapter:"3"}, stats:{likes:120,comments:8,shares:5,saves:30}, createdAt:"..." },
//   { id:"p2", authorUserId:"u4", kind:"audio_snippet", caption:"Tiny habit loop 🔁", media:{kind:"audio",url:"/snips/atomic.mp3",start:5,end:35}, workRef:{workId:"w2"}, stats:{likes:89,comments:12,shares:9,saves:41}, createdAt:"..." },
//   { id:"p3", authorUserId:"u5", kind:"reel", caption:"Stoic morning routine", media:{kind:"video",url:"/vids/stoic.mp4",aspect:9/16}, workRef:{workId:"w3"}, stats:{likes:240,comments:31,shares:22,saves:60}, createdAt:"..." },
//   { id:"p4", authorUserId:null, clubId:"club1", kind:"club_announcement", caption:"Reading sprint tonight!", stats:{likes:45,comments:10,shares:2,saves:5}, createdAt:"..." },
// ];
