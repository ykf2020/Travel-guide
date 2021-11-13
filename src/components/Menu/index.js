import { useState, useEffect } from "react"
import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Third, TextPrimary, Title, MobileBody1 } from "../../constants.js"
import logo from '../../assets/logo.svg'
import setting from '../../assets/setting.svg'
import arrowdowncircle from '../../assets/arrowdowncircle.svg'
import search from '../../assets/search.svg'

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

const Logo = styled.div`
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

const SearchButton = styled.button`
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
`

const TopicButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${Primary};
`

const TopicDesc = styled.p`
  font-size: ${MobileBody1};
  color: ${TextPrimary};
  margin: 6px 0 0 0 ;
`

const array = ['基隆','台北','新北','桃園','新竹','苗栗','台中','彰化','雲林','嘉義','台南','高雄','屏東','台東','花蓮','澎湖','綠島','小琉球','金門', '馬祖']

const Menu = () => {
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false)
  const [isLocationPanelOpen, setIsLocationPanelOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <Header>
        <ToggleIcon onClick={() => {setIsSearchPanelOpen(!isSearchPanelOpen)}}><img src={setting}/></ToggleIcon>
        <Logo><img src={logo} alt="logo" /></Logo>
      </Header>
      <SearchPanel isSearchPanelOpen={isSearchPanelOpen}>
        <InputDiv onClick={() => {setIsLocationPanelOpen(!isLocationPanelOpen)}}>
          <InputFirst disabled value={location} placeholder="選擇目的地"/>
          <LocationPanel isLocationPanelOpen={isLocationPanelOpen}>
            {array.map(arr => {
              return(
                <LocationButton onClick={() => {setLocation(arr)}} active={location === arr}>{arr}</LocationButton>
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
            <TopicDiv>
              <TopicButton/>
              <TopicDesc>歷史文化</TopicDesc>
            </TopicDiv>
            <TopicDiv>
              <TopicButton/>
              <TopicDesc>歷史文化</TopicDesc>
            </TopicDiv>
            <TopicDiv>
              <TopicButton/>
              <TopicDesc>歷史文化</TopicDesc>
            </TopicDiv>
            <TopicDiv>
              <TopicButton/>
              <TopicDesc>歷史文化</TopicDesc>
            </TopicDiv>
          </TopicsContainer>
        </TopicSection>
        <SearchButton>開始搜尋</SearchButton>
      </SearchPanel>
    </>
  )
}

export default Menu
