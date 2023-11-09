import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="self-center w-5/6">
      <ul className="flex justify-between">
        <Link to="/">
          <li className="p-2 rounded-sm hover:bg-slate-800 active:bg-slate-800">
            HOME
          </li>
        </Link>

        <Link to="/characters/1">
          <li className="p-2 rounded-sm hover:bg-slate-800 active:bg-slate-800">
            CHARACTERS
          </li>
        </Link>

        <Link to="/about">
          <li className="p-2 rounded-sm hover:bg-slate-800 active:bg-slate-800">
            ABOUT US
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
