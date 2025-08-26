import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import FeedPage from "./features/feed/FeedPage";
// import SearchPage from "./features/search/SearchPage"
import UploadPage from "./features/upload/UploadPage";
// import ProfilePage from "./features/profile/ProfilePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // the shell
    children: [
      { index: true, element: <FeedPage /> }, // `/`
      //   { path: "search", element: <SearchPage /> }, // `/search`
      { path: "upload", element: <UploadPage /> }, // `/upload`
      //   { path: "u/:handle", element: <ProfilePage /> }, // `/u/john`
      { path: "r/:reelId", element: <FeedPage mode="single" /> }, // `/r/abc123`
    ],
  },
]);
