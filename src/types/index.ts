import type { PropsWithChildren, CSSProperties } from "react";

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export type UserType = {
  id: string;
  name: string;
  username: string;
  profilePic: string;
};

export type BookType = {
  id: string;
  title: string;
  cover: string;
};

export type CastType = {
  id: string;
  type: "new" | "quote" | "audio" | "reel" | "club_spotlight";
  text?: string; // for quotes
  audio?: string; // for audio snippets
  video: string; // for audio snippets
  profileId?: string;
  profile?: UserType; // user or club avatar
  clubName?: string; // only for clubs
  // bookCover?: string; // optional image for book/quote
  bookId?: string;
  book?: BookType;
};
