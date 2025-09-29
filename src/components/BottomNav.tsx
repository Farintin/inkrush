// components/BottomNav.tsx
// import { NavLink } from "react-router-dom";
// import { Home, BookOpen, Users, User, Plus } from "lucide-react";

// export default function BottomNav({
//   onUploadClick,
// }: {
//   onUploadClick: () => void;
// }) {
//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 flex justify-around items-center py-2">
//       <NavLink to="/" className="p-2">
//         <Home size={24} />
//       </NavLink>
//       <NavLink to="/casts" className="p-2">
//         <BookOpen size={24} />
//       </NavLink>
//       <button
//         onClick={onUploadClick}
//         className="p-3 bg-indigo-600 text-white rounded-full shadow-lg -mt-6"
//       >
//         <Plus size={24} />
//       </button>
//       <NavLink to="/clubs" className="p-2">
//         <Users size={24} />
//       </NavLink>
//       <NavLink to="/profile" className="p-2">
//         <User size={24} />
//       </NavLink>
//     </nav>
//   );
// }

import { Home, Video, Users, User, PlusSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

interface BottomNavProps {
  onUploadClick: () => void;
}

export default function BottomNav({ onUploadClick }: BottomNavProps) {
  return (
    <nav className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex justify-around py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-neutral-500"
        }
      >
        <Home className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/casts"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-neutral-500"
        }
      >
        <Video className="w-6 h-6" />
      </NavLink>
      <button
        onClick={onUploadClick}
        className="text-neutral-500 hover:text-blue-500"
      >
        <PlusSquare className="w-6 h-6" />
      </button>
      <NavLink
        to="/clubs"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-neutral-500"
        }
      >
        <Users className="w-6 h-6" />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-neutral-500"
        }
      >
        <User className="w-6 h-6" />
      </NavLink>
    </nav>
  );
}
