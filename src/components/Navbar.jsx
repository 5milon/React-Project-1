
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-lg p-2 z-10 fixed">
          <div className="flex-1">
            <a className="btn btn-ghost gap-0 text-2xl font-bold">
              <span className="text-green-600">InFo</span>
              <span className="p-0 m-0 text-red-500">Byte</span>
            </a>
          </div>
          <div className="flex gap-4">
            <nav className="flex gap-4 font-bold">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/bookmarks"
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
              >
                Bookmarks
              </NavLink>
            </nav>
            <input
              type="checkbox"
              value="cyberpunk"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
