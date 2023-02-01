import { NavLink } from "react-router-dom";

const Header = () => {
  const loadActiveClass = (isActive: boolean) => {
    return isActive ? "text-3xl pt-6 underline font-bold" : "text-3xl pt-6";
  };

  return (
    <div className="container mx-auto ">
      <div className="flex gap-8 ">
        <NavLink className={({ isActive }) => loadActiveClass(isActive)} to="/">
          My notes
        </NavLink>
        <NavLink
          className={({ isActive }) => loadActiveClass(isActive)}
          to="/create"
        >
          New
        </NavLink>
      </div>
      <br />
    </div>
  );
};

export default Header;
