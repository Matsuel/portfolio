import { createContext } from "react";

const NavbarContext = createContext({
    isMenuOpen: false,
    toggleMenu: () => { }
});

export default NavbarContext;