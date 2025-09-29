// routes.tsx
import type { RouteObject } from "react-router-dom";
// import FeedPage from "./features/feed/FeedPage";
// import SearchPage from "./features/search/SearchPage"
// import UploadPage from "./features/upload/UploadPage";

// import ProfilePage from "./features/profile/ProfilePage"
import Home from "./pages/Home";
import Casts from "./pages/Casts";
import Clubs from "./pages/Clubs";
import Profile from "./pages/Profile";

export const routes: RouteObject[] = [
  // { index: true, element: <FeedPage /> }, // `/`
  //   { path: "search", element: <SearchPage /> }, // `/search`
  // { path: "upload", element: <UploadPage /> }, // `/upload`
  //   { path: "u/:handle", element: <ProfilePage /> }, // `/u/john`
  // { path: "r/:reelId", element: <FeedPage mode="single" /> }, // `/r/abc123`

  { index: true, element: <Home /> },
  { path: "/casts", element: <Casts /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/profile", element: <Profile /> },
];
