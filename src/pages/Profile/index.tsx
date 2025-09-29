import Tab from "@/components/Tab";
import Header, { Column } from "@/components/UI/Header";
import { Bell, Settings, Store } from "lucide-react";

export default function Profile() {
  return (
    <Tab
      className="
        bg-white"
    >
      <Header>
        <Column>
          <button className="iconButton">
            <Store size={32} className="icon" />
          </button>
        </Column>
        <Column className="justify-end">
          <button className="iconButton">
            <Bell size={28} className="icon" />
          </button>
          <button className="iconButton ">
            <Settings size={28} className="icon" />
          </button>
        </Column>
      </Header>
    </Tab>
  );
}
