import Tab from "@/components/Tab";
// src/pages/Home.tsx
import {
  AlignRight,
  // MessageCircle,
  Search,
  // Share2
} from "lucide-react";
import StatusRow from "@/components/StatusRow";
import Header, { Column } from "@/components/UI/Header";
import LastReadRow from "@/components/LastReadRow";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <Tab
      className="
    bg-white"
    >
      <Header>
        <Column>
          <button className="iconButton ">
            <AlignRight size={32} className="icon" />
          </button>
        </Column>
        <Column className="flex-12 justify-center">
          <span className="text feedType active">For You</span>
          <div className="p-1 rounded-full bg-pink-500 m-3" />
          <span className="text feedType">Following</span>
        </Column>
        <Column className="justify-end">
          <button className="iconButton ">
            <Search size={28} className="icon" />
          </button>
        </Column>
      </Header>
      <StatusRow />
      <LastReadRow />
      <Posts />
      <Posts />
    </Tab>
  );
}
