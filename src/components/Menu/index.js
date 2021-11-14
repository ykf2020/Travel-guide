import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Second, Third, TextPrimary, Title, MobileBody1 } from "../../constants.js"
import { locations, getLocationValueByName } from '../../utils.js'
import logo from '../../assets/logo.svg'
import setting from '../../assets/setting.svg'
import hotel from '../../assets/hotel.svg'
import scenicspot from '../../assets/scenicspot.svg'
import activity from '../../assets/activity.svg'
import restaurant from '../../assets/restaurant.svg'
import arrowdowncircle from '../../assets/arrowdowncircle.svg'
import search from '../../assets/search.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../contexts.js";
const Header = styled.div`
  width: 100%;
  height: 56px;
  background: ${BgWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Line};
  position: fixed;
  z-index: 10;
`

const Logo = styled(Link)`
  height: 40px;
  img {
    height: 100%;
  }
`

const ToggleIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${Third};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 76%;
  }
`

const Icon1 = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  img {
    width: 100%;
  }
`

const Icon2 = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  img {
    width: 100%;
  }
`

const SearchPanel = styled.div`
  padding:56px 16px 0 16px;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: ${BgGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s all ease;
  transform: translateY(-85%);
  visibility: hidden;

  ${({ isSearchPanelOpen }) =>
    isSearchPanelOpen &&
    `
    transform: translateY(0%);
    visibility: visible;
  `}
`

const InputFirst = styled.input`
  width: 100%;
  height: 100%;
  background: ${BgGray};
  border: 1px solid ${Line};
  border-radius: 8px;
  outline: none;
  padding: 0px 12px;
`

const InputSecond = styled.input`
  width: 100%;
  height: 100%;
  background: ${BgGray};
  border: 1px solid ${Line};
  border-radius: 8px;
  padding: 0px 12px;
  outline: none;
`

const InputDiv = styled.div`
  width: 343px;
  height: 43px;
  margin-bottom: 12px;
  position: relative;

  &:first-child {
    margin-top: 8px;
  }
`

const SearchButton = styled(Link)`
  width: 343px;
  height: 44px;
  background: ${Primary};
  border-radius: 8px;
  border: none;
  color: white;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
`

const LocationPanel = styled.div`
  width: 343px;
  min-height: 200px;
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  z-index: 7;
  background: ${BgWhite};
  border-radius: 8px;
  transition: 0.4s all ease;
  transform: translateY(-15%);
  visibility: hidden;
  opacity:0;
  ${({ isLocationPanelOpen }) =>
    isLocationPanelOpen &&
    `
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;
  `}
`

const LocationButton = styled.div`
  width: 88px;
  height: 40px;
  border: 1px solid ${Primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 12px;
  border-radius: 8px;
  font-size: 18px;

  ${({active}) =>
    active && `
      background: ${Primary};
      color: white;
    `
  }
`

const TopicSection = styled.section`
  width: 100%;
  max-height: calc(100% - 64px - 55px - 55px - 8px);
  /* minus search button height and input height */
`

const TopicTitle = styled.h2`
  font-size: ${Title};
  color: ${TextPrimary};
  font-weight: 700;
  margin: 0 0 12px 0;
`
const TopicsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 18px - 12px);
  flex-wrap: wrap;
`

const TopicDiv = styled.div`
  width: 50%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  ${({active}) =>
    active && `
      background: ${Second};
    `
  }
`

const TopicButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${Primary};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 60%;
  }
`

const TopicDesc = styled.p`
  font-size: ${MobileBody1};
  color: ${TextPrimary};
  margin: 6px 0 0 0 ;
`

const Menu = () => {
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false)
  const [isLocationPanelOpen, setIsLocationPanelOpen] = useState(false)
  const { location, setLocation, keyword, setKeyword, type, setType } = useContext(AuthContext)
  const handleBackToHome = () => {
    setIsSearchPanelOpen(false)
    setLocation('')
    setKeyword('')
  }
  return (
    <>
      <Header>
        <ToggleIcon onClick={() => {setIsSearchPanelOpen(!isSearchPanelOpen)}}><img src={setting}/></ToggleIcon>
        <Logo to='/' onClick={handleBackToHome}><img src={logo} alt="logo" /></Logo>
      </Header>
      <SearchPanel isSearchPanelOpen={isSearchPanelOpen}>
        <InputDiv onClick={() => {setIsLocationPanelOpen(!isLocationPanelOpen)}}>
          <InputFirst disabled value={location} placeholder="選擇目的地"/>
          <LocationPanel isLocationPanelOpen={isLocationPanelOpen} onClick={(e)=> e.stopPropagation()}>
            {locations.map(l => {
              return(
                <LocationButton onClick={() => {setLocation(l.name)}} active={location === l.name}>{l.name}</LocationButton>
              )
            })}
          </LocationPanel>
          <Icon1><img src={arrowdowncircle}/></Icon1>
        </InputDiv>
        <InputDiv>
          <InputSecond onChange={(e)=>{setKeyword(e.target.value)}} value={keyword} placeholder="搜尋關鍵字"/>
          <Icon2><img src={search}/></Icon2>
        </InputDiv>
        <TopicSection>
          <TopicTitle>精選主題</TopicTitle>
          <TopicsContainer>
            <TopicDiv active={type==='ScenicSpot'} onClick={() => setType('ScenicSpot')}>
              <TopicButton><img src={scenicspot}/></TopicButton>
              <TopicDesc>熱門景點</TopicDesc>
            </TopicDiv>
            <TopicDiv active={type==='Activity'} onClick={() => setType('Activity')}>
              <TopicButton><img src={activity}/></TopicButton>
              <TopicDesc>觀光活動</TopicDesc>
            </TopicDiv>
            <TopicDiv active={type==='Restaurant'} onClick={() => setType('Restaurant')}>
              <TopicButton><img src={restaurant}/></TopicButton>
              <TopicDesc>在地美食</TopicDesc>
            </TopicDiv>
            <TopicDiv active={type==='Hotel'} onClick={() => setType('Hotel')}>
              <TopicButton><img src={hotel}/></TopicButton>
              <TopicDesc>休息住宿</TopicDesc>
            </TopicDiv>
          </TopicsContainer>
        </TopicSection>
        <SearchButton to='/search' onClick={() => {setIsSearchPanelOpen(false)}}>開始搜尋</SearchButton>
      </SearchPanel>
    </>
  )
}

export default Menu
