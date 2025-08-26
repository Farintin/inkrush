import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bg-black/80 backdrop-blur flex justify-around items-center text-white py-5">
      <NavLink to="/" className="flex-1 text-center">
        🏠
      </NavLink>
      <NavLink to="/search" className="flex-1 text-center">
        🔍
      </NavLink>
      <NavLink to="/upload" className="flex-1 text-center">
        ➕
      </NavLink>
      <NavLink to="/inbox" className="flex-1 text-center">
        💬
      </NavLink>
      <NavLink to="/u/me" className="flex-1 text-center">
        👤
      </NavLink>
    </nav>
  );
}
