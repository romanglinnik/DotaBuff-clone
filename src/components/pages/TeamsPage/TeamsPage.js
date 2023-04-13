import "./index.scss";
import { useLoaderData } from "react-router-dom"
import teamsService from "../../../service/teams";
import LinkItem from "../../base/LinkItem";
import ProgressBar from "../../base/ProgressBar";

const TeamsPage = () => {
    const list = useLoaderData()
    return (
        <div className="teams-section">
            <div className="wrapper">
                <h1>Команды</h1>
                <div className="teams-block">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className="team_rank">Ранг</div>
                                </th>
                                <th>
                                    <div className="team_name">Имя</div>
                                </th>
                                <th>
                                    <div className="team_rating">Рейтинг</div>
                                </th>
                                <th>
                                    <div className="team_wins">Победы</div>
                                </th>
                                <th>
                                    <div className="team_loses">Поражения</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            list && list.map((item, index) => 
                                <tr>
                                    <td>{index + 1}st</td>
                                    <td>
                                        <div className="team_info">
                                            <img src={item.logo_url}/>
                                            <div className="team_title">
                                                <LinkItem url={`${item.team_id}`}  key={item.team_id}>{item.name}</LinkItem>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="info_value">
                                            {(item.rating).toFixed()}
                                        </div>
                                        <ProgressBar progress={item.rating}></ProgressBar>
                                    </td>
                                    <td>
                                        <div className="info_value">
                                            {(item.wins).toFixed()}
                                        </div>
                                        <ProgressBar progress={item.wins}></ProgressBar>
                                    </td>
                                    <td>
                                        <div className="info_value">
                                            {(item.losses).toFixed()}
                                        </div>
                                        <ProgressBar progress={item.losses}></ProgressBar>
                                    </td>
                                </tr>)  
                            }
                        </tbody>
                    </table>
                </div>
            </div>      
        </div>
    )
}

export default TeamsPage;

export const teamsPageLoader = async () => {
    const result = await teamsService.getList()
    return result.slice(0, 100)
}