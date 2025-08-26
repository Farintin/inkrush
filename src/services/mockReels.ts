import type { Reel } from "./api";

export const mockReels: Reel[] = [
  {
    id: "1",
    playUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbUrl:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    caption: "The classic bunny test video 🐇",
    author: {
      id: "u1",
      handle: "@alice",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    stats: { likes: 120, comments: 34, shares: 12, views: 1024 },
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    playUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Elephants_Dream_s5_both.jpg",
    caption: "Dreaming of elephants 🐘✨",
    author: {
      id: "u2",
      handle: "@bob",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    stats: { likes: 88, comments: 21, shares: 5, views: 889 },
    createdAt: new Date().toISOString(),
  },
];
