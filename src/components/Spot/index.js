import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Second, TextSecond, TextPrimary, H2, H3, Title, MobileBody1, Body2, Shadow } from "../../constants.js"
import arrowleft from '../../assets/arrowleft.svg'
import calling from '../../assets/calling.svg'
import location from '../../assets/location.svg'
import time from '../../assets/time.svg'
import { getSpot } from '../../WebAPI.js'

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: ${BgGray};
  padding: 0 16px 0 16px;
`

const TitleDiv = styled.div`
  margin: 68px 0 18px 0;
  display: flex;
  align-items: center;
`

const TitleDesc = styled.h3`
  font-size: ${H3};
  font-weight: 700;
  margin: 0;
`

const TitleIcon = styled(Link)`
  height: 33.33px;
  width: 33.33px;
  margin: 0 11.33px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 14.07px;
  }
`

const MainImageDiv = styled.div`
  height: 160px;
  width: 100%;
  border-radius: 4.09px;
  margin: 0 0 24px 0;
  background: ${Primary};
`

const InfosDiv = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 19px;
  background: ${Second};
  margin: 0 0 24px 0;
`

const Info = styled.div`
  width:100%;
  display: flex;
  align-items: center;

  & + & {
    margin: 8px 0 0 0 ;
  }
`

const InfoIcon = styled.div`
  height: 100%;
  margin: 0 9px 0 0;
  img {
    height: 100%;
  }
`

const InfoDesc = styled.p`
  font-size: ${MobileBody1};
  color: ${TextPrimary};
  font-weight: 400;
  margin: 0;
`

const PostSection = styled.section`
  width: 100%;
  margin: 0 0 24px 0;
`

const PostSectionTitle = styled.h3`
  color: ${Primary};
  font-size: ${Title};
  font-weight: 700;
  margin:0 0 16px 0;
`

const PostSectionDesc = styled.div`
  font-size: ${MobileBody1};
  font-weight: 400;
  line-height: 24px;
  color: ${TextPrimary};
  margin: 0;
  white-space:pre-wrap;
  word-wrap:break-word
`


const Spot = () => {
  const { type, id } = useParams()
  const [spotInfo, setSpotInfo] = useState([])
  useEffect(() => {
    getSpot(type,id).then(response => {
      setSpotInfo(response)
    })
  },[type, id])
  return (
    <Container>
      <TitleDiv>
        <TitleIcon to='/search'><img src={arrowleft}/></TitleIcon>
        <TitleDesc>{spotInfo[0]?.Name}</TitleDesc>
      </TitleDiv>
      <MainImageDiv/>
      <InfosDiv>
        <Info>
          <InfoIcon><img src={location}/></InfoIcon>
          <InfoDesc>{spotInfo[0]?.Address}</InfoDesc>
        </Info>
        <Info>
          <InfoIcon><img src={time}/></InfoIcon>
          <InfoDesc>每日開放</InfoDesc>
        </Info>
        <Info>
          <InfoIcon><img src={calling}/></InfoIcon>
          <InfoDesc>{spotInfo[0]?.Phone}</InfoDesc>
        </Info>
      </InfosDiv>
      <PostSection>
        <PostSectionTitle>景點介紹</PostSectionTitle>
        <PostSectionDesc>{spotInfo[0]?.Description}</PostSectionDesc>
      </PostSection>
      <PostSection>
        <PostSectionTitle>交通方式</PostSectionTitle>
        <PostSectionDesc>
        【奮起湖步道入口】
國光客運：台北西站B棟、嘉義站均可上車。
嘉義縣公車7322、7302：台鐵嘉義站、高鐵嘉義站上車台灣好行阿里山A、B線：A線高鐵嘉義站，B線台鐵嘉義站上車
阿里山小火車：嘉義站搭乘。
於奮起湖站下車，奮起湖步道入口由火車站對面，奮起湖農特產品展售中心旁進入。
        </PostSectionDesc>
      </PostSection>
      <PostSection>
        <PostSectionTitle>嘉義更多景點</PostSectionTitle>
      </PostSection>
    </Container>
  )
}

export default Spot
