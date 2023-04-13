import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import HomePage from '../pages/HomePage/HomePage'
import TeamsPage, {teamsPageLoader} from '../pages/TeamsPage/TeamsPage'
import HeroesPage, {heroesPageLoader} from '../pages/HeroesPage/HeroesPage'
import SingleHeroPage, {singleHeroLoader} from '../pages/SingleHeroPage/SingleHeroPage'
import SingleTeamPage, {singleTeamLoader} from '../pages/SingleTeamPage/SingleTeamPage'

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainPage/>}>
      <Route index element={<HomePage />} />
      <Route path="heroes" loader ={heroesPageLoader} element={<HeroesPage />} />
      <Route path="heroes/:id" loader ={singleHeroLoader}element={<SingleHeroPage />} />
      <Route path="teams" loader = {teamsPageLoader} element={<TeamsPage />} />
      <Route path="teams/:id" loader ={singleTeamLoader}element={<SingleTeamPage />} />
    </Route>
  </>
))