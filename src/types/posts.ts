import type { UserType } from ".";

export type PostStatsType = {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
};

export type WorkRefType = {
  workId: string;
  detail?: {
    chapter?: number;
    page?: number;
    range?: { start: number; end: number };
  };
};

export type PostContentType = {
  workRef?: WorkRefType;
  text?: string;
  images?: string[];
  audio?: string;
  video?: string;
};

export type PostType = {
  id: string;
  profileId?: string;
  profile?: UserType; // user or club avatar
  kind: "quote" | "audio_snippet" | "reel" | "club_announcement";
  content: PostContentType;
  desc?: string;
  stats: PostStatsType;
};

export type PostsType = PostType[];
