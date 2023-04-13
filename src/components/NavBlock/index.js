import "./index.scss";
import { ReactComponent as DotaLogo } from '../icons/dotaLogo.svg'
import LinkItem from "../base/LinkItem/index.js";

const NavBlock = () => {
    return (
        <div className="nav-block">
            <nav>
                <LinkItem url="/">
                    <DotaLogo/>
                </LinkItem>
                <LinkItem url="heroes">
                    Герои
                </LinkItem>
                <LinkItem url="teams">
                    Команды
                </LinkItem>
            </nav>
        </div>
    )
}

export default NavBlock;