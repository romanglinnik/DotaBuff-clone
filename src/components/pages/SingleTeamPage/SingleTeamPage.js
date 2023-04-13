import teamsService from "../../../service/teams";
import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react";
import "./index.scss";

const SingleTeamPage = () => {
    const data = useLoaderData()
    return(
        <>
        <section className='team_page'>
          <div className="wrapper">
          <Suspense fallback={<h1>Team page is loading...</h1>}>
              <Await resolve={data.currentTeam}>
                {
                  (currentTeam) => (<div className='team_header'>
                      <img src={currentTeam.logo_url} alt='Team logo'/>
                      <div className="team_info">
                        <h1>{currentTeam.name}</h1>
                        <div className="info_container">
                          <div>
                            <span>Победы</span>
                            <span style={{color: 'rgb(102, 187, 106)'}}>{currentTeam.wins}</span>
                          </div>
                          <div>
                            <span>Поражения</span>
                            <span style={{color: 'rgb(255, 76, 76)'}}>{currentTeam.losses}</span>
                          </div>
                          <div>
                            <span>Рейтинг</span>
                            <span>{(currentTeam.rating).toFixed()}</span>
                          </div>
                        </div>
                      </div>
                  </div>)
                }
              </Await>
            </Suspense>
          </div>          
        </section>
      </>
    )
}

export default SingleTeamPage;

export const singleTeamLoader = async ({params}) => {
    console.log(params)
    let response = await teamsService.getById(params.id)
    return defer({
      currentTeam: response
    })
  }