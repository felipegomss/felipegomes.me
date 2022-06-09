import { DiTerminalBadge } from "react-icons/di";
import "./index.scss";
function Header() {
  return (
    <nav>
      <span>
        <DiTerminalBadge size={"2em"} />
      </span>
      <span className="back">
        <a href="/">Back</a>
      </span>
      <span></span>
    </nav>
  );
}

export default Header;
