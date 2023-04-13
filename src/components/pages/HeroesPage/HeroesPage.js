import "./index.scss";
import LinkItem from "../../base/LinkItem";
import heroesService from "../../../service/heros";
import { useLoaderData } from "react-router-dom"

const HeroesPage = () => {
    const list = useLoaderData()
    
    return (
        <div className="heroes-section">
            <div className="wrapper">
                <h1>Все герои</h1>
                <div className="heroes-container">
                    {
                    list && list.map((item) => 
                        <LinkItem url={`${item.id}`}>
                            <div className="hero-item" style={{backgroundImage:`url(${`https://cdn.cloudflare.steamstatic.com/${item.img}`})`}}>
                                <div className="hero-name">{item.localized_name}</div>
                                <div className="hero-mask"></div>
                            </div>
                        </LinkItem>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroesPage;

export const heroesPageLoader = async () => {
    const result = await heroesService.getList()
    return result.sort((a, b) => a.localized_name > b.localized_name ? 1 : -1)
}