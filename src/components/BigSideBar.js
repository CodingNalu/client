import { useAppContext } from "../context/appContext.js";
import Navlinks from "./NavLinks.js";
import Logo from "./Logo.js";
import Wrapper from "../assets/wrappers/BigSidebar.js";
const BigSideBar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
