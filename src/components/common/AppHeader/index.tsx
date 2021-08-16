import { useState } from "react";
import { AppBrandNav } from "../AppBrandNav";
import { AppNav } from "../AppNav";
import "./AppHeader.scss";

export const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="appheader">
      <AppBrandNav showMenu={showMenu} setShowMenu={setShowMenu} />
      <AppNav showMenu={showMenu} />
    </header>
  );
};
