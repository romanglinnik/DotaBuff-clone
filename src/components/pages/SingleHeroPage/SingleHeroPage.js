import "./index.scss";
import heroesService from "../../../service/heros";
import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense , useEffect } from "react";
import styled from "styled-components";

const SingleHeroPage = () => {
    const data = useLoaderData()
    useEffect(() => {
      }, [data])
    return(
        <>
        <section className='hero_page'>
            
                <Suspense fallback={<h1>Hero page is loading...</h1>}>
                <Await resolve={data.currentHero}>
                    {
                    (currentHero) => (
                        <div className="wrapper">
                            <div className='hero__container'>
                                <img alt="Abaddon" src={`https://cdn.cloudflare.steamstatic.com/${currentHero.img}`}></img>
                                <div className="hero-item">
                                    <div className="hero-icon" style={{backgroundImage:`url(${`https://cdn.cloudflare.steamstatic.com/${currentHero.img}`})`}}></div>
                                    <div className="hero-title">
                                        <h1>
                                            {currentHero.localized_name}
                                        </h1>
                                        <div className="hero-role">
                                            {currentHero.attack_type} - 
                                            <span> {currentHero.roles.join(', ')}</span>
                                        </div>
                                    </div>
                                    <div className="attr-container">
                                        <div className="hero-winrate">
                                            {`Win Rate`}
                                            <HeroWinRate win_rate={(currentHero.pro_win / currentHero.pro_pick * 100)}>{(currentHero.pro_win / currentHero.pro_pick * 100).toFixed(2)}%</HeroWinRate>
                                        </div>
                                        <div className="hero-attributes">
                                            <div className="attributes">
                                                <div className="icon strength"></div>
                                                <HeroBaseAttributeStr primary_attr={currentHero.primary_attr}>{currentHero.base_str} + {currentHero.str_gain}</HeroBaseAttributeStr>
                                            </div>
                                            <div className="attributes">
                                                <div className="icon agility"></div>
                                                <HeroBaseAttributeAgi primary_attr={currentHero.primary_attr}>{currentHero.base_agi} + {currentHero.agi_gain}</HeroBaseAttributeAgi>
                                            </div>
                                            <div className="attributes">
                                                <div className="icon intelligence"></div>
                                                <HeroBaseAttributeInt primary_attr={currentHero.primary_attr}>{currentHero.base_int} + {currentHero.int_gain}</HeroBaseAttributeInt>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero_characteristic">
                                <div className="characteristic_column">
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Базовая атака:</span>
                                        {currentHero.primary_attr === "str" ? currentHero.base_attack_min + currentHero.base_str 
                                        : currentHero.primary_attr === "agi" ? currentHero.base_attack_min + currentHero.base_agi 
                                        : currentHero.base_attack_min + currentHero.base_int} - {currentHero.primary_attr === "str" ? currentHero.base_attack_max + currentHero.base_str 
                                        : currentHero.primary_attr === "agi" ? currentHero.base_attack_max + currentHero.base_agi 
                                        : currentHero.base_attack_max + currentHero.base_int}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Дальность атаки:</span>
                                        {currentHero.attack_range}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Скорость атаки:</span>
                                        {currentHero.base_attack_time + currentHero.base_agi}
                                    </span>
                                </div>
                                <div className="characteristic_column">
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Здоровье:</span>
                                        {currentHero.base_health + (currentHero.base_str*20)}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Восстановление здоровья:</span>
                                        {(currentHero.base_health_regen + (currentHero.base_str*0.1)).toFixed(2)}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Мана:</span>
                                        {currentHero.base_mana + (currentHero.base_str*12)}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Восстановление маны:</span>
                                        {(currentHero.base_mana_regen + (currentHero.base_int*0.05)).toFixed(2)}
                                    </span>
                                </div>
                                <div className="characteristic_column">
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Базовая броня:</span>
                                        {(currentHero.base_armor + (currentHero.base_agi*0.167)).toFixed()}
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Сопротивление магии:</span>
                                        {currentHero.base_mr}%
                                    </span>
                                    <span className="characteristic_column_cell">
                                        <span className="cell-title">Скорость передвижения:</span>
                                        {currentHero.move_speed}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </Await>
                </Suspense>
            
        </section>
      </>
    )
}

export default SingleHeroPage;

export const singleHeroLoader = async ({params}) => {
    let response = await heroesService.getById(params)
    let popular = response.sort((a, b) => a.turbo_picks < b.turbo_picks ? 1 : -1)
    let hero = popular.find(item => item.id == params.id)
    return defer({
      currentHero: hero
    })
  }

    const HeroBaseAttributeStr = styled.div`
  color: ${props => props.primary_attr === "str" ? 'rgb(244, 67, 54)' :'rgba(255, 255, 255, 0.87)'}
`
    const HeroBaseAttributeAgi = styled.div`
  color: ${props => props.primary_attr === "agi" ? 'rgb(57, 212, 2)' :'rgba(255, 255, 255, 0.87)'}
`
    const HeroBaseAttributeInt = styled.div`
  color: ${props => props.primary_attr === "int" ? 'rgb(1, 235, 244)' :'rgba(255, 255, 255, 0.87)'}
`
  const HeroWinRate = styled.span`
  color: ${props => (props.win_rate >= 50) ? '#A9CF54' : '#C23C2A'};
  `