
import { useContext } from "react";
import Navbar2 from "./Navbar2";
import { ThemeDataContext } from "../context/themeContext";


function Navbar() {
const [theme] = useContext(ThemeDataContext)


  return (
    <div className={theme}>
      <h2>Afnan</h2>
      <Navbar2  />
    </div>
  );
}

export default Navbar;
