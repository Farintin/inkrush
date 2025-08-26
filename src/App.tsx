import { Outlet } from "react-router-dom";
import BottomNav from "@/components/UI/BottomNav";
import Screen from "./components/Screen";

export default function App() {
  return (
    <div
      className="
      w-screen
    h-screen
    flex flex-col
    bg-ink-bg 
    text-ink-text
    "
    >
      {/* Render active page */}
      <Screen>
        <Outlet />
      </Screen>
      {/* Persistent bottom nav */}
      <BottomNav />
    </div>
  );
}
