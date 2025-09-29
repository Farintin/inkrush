// App.tsx
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import BottomNav from "./components/BottomNav";
import UploadModal from "./components/UploadModal";
import Screen from "./components/Screen";

export default function App() {
  const element = useRoutes(routes);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div
      className="
      w-screen
    h-screen
    flex flex-col bg-neutral-100 dark:bg-neutral-950"
    >
      <Screen>{element}</Screen>
      <BottomNav onUploadClick={() => setShowUpload(true)} />
      <UploadModal open={showUpload} onClose={() => setShowUpload(false)} />
    </div>
  );
}
