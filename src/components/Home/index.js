import { useState, useEffect } from 'react'
import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Second, TextSecond, TextPrimary, H2, H3, Title, MobileBody1, Body2, Shadow } from "../../constants.js"
import mainimage from '../../assets/mainimage.svg'
import locationpink from '../../assets/locationpink.svg'
import location from '../../assets/location.svg'
import time from '../../assets/time.svg'
import { getScenicSpots, getRestaurants, getHotels, getActivities } from '../../WebAPI.js'
import ScenicSpotCard from '../Cards/ScenicSpotCard.js'

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: ${BgGray};
  padding: 0 16px 0 16px;
`

const MainBanner = styled.div`
  width: 100%;
  height: 152px;
  border-radius: 16px;
  box-shadow: ${Shadow};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin: 66px 0 40px 0;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;

  }
`

const MainSlogan = styled.h1`
  font-size: ${H2};
  font-weight: 700;
  color: ${TextPrimary};
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;
`

const InfoTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
`

const InfoTitleDesc = styled.div`
  font-size: ${H3};
  font-weight: 700;
  margin: 0;
`

const InfoTitleIcon = styled.div`
  width: 18px;
  height: 18px;
  margin: 0 14px 0 0;

  img {
    width: 100%
  }
`

const Card = styled.div`
  width: 100%;
  height: 235px;
  border-radius: 16px;
  background: ${BgWhite};
  box-shadow: ${Shadow};
  overflow: hidden;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
`

const CardImageDiv = styled.div`
  width: 100%;
  height: 163px;
  background: ${Primary};
  margin: 0 0 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
`

const CardTitle = styled.h4`
  width: 100%;
  font-size: ${Title};
  font-weight: 700;
  color: ${TextPrimary};
  padding: 0 16px;
  margin: 0 0 10px 0;
`

const CardInfosDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 24px;
  display: flex;
  align-items: center;
`

const CardInfo = styled.div`
  height: 100%;
  margin: 0 20px 0 0;
  display: flex;
  align-items: center;
  max-width: 66%;

  & + & {
    margin: 0 0 0 0;
  }
`

const CardIcon = styled.div`
  height: 100%;
  margin: 0 9px 0 0;
  img {
    height: 100%;
  }
`

const CardInfoDesc = styled.p`
  font-size: ${Body2};
  font-weight: 400;
  color: ${TextSecond};
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const SeeMoreButton = styled.button`
  border: none;
  background: none;
  color: ${Primary};
`

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [hotels, setHotels] = useState([])
  const [activities, setActivities] = useState([])
  const [scenicspots, setScenicspots] = useState([])

  useEffect(()=>{
    getScenicSpots().then(response => {
      setScenicspots(response)
    })
    getActivities().then(response => {
      setActivities(response)
    })
    getRestaurants().then(response => {
      setRestaurants(response)
    })
    getHotels().then(response => {
      setHotels(response)
    })
  },[])

  return (
    <Container>
      <MainBanner>
        <MainSlogan>探索。<br/>福爾摩沙</MainSlogan>
        <img src={mainimage}/>
      </MainBanner>
      <InfoSection>
        <InfoTitle>
          <InfoTitleIcon><img src={locationpink}/></InfoTitleIcon>
          <InfoTitleDesc>熱門景點</InfoTitleDesc>
        </InfoTitle>
        {scenicspots.map(spot => {
          return (
            <ScenicSpotCard key={spot.ID} spot={spot}/>
          )
        })}
        <SeeMoreButton>更多熱門景點</SeeMoreButton>
      </InfoSection>
      <InfoSection>
        <InfoTitle>
          <InfoTitleIcon><img src={locationpink}/></InfoTitleIcon>
          <InfoTitleDesc>觀光活動</InfoTitleDesc>
        </InfoTitle>
        {activities.map(activity => {
          return (
            <Card>
              <CardImageDiv><img src={activity.Picture?.PictureUrl1} alt={activity.Picture?.PictureDescription1} /></CardImageDiv>
              <CardTitle>{activity.Name}</CardTitle>
              <CardInfosDiv>
                <CardInfo>
                  <CardIcon><img src={location}/></CardIcon>
                  <CardInfoDesc>{activity.Address ? activity.Address.substring(0,3) : activity.Location}</CardInfoDesc>
                </CardInfo>
                <CardInfo>
                  <CardIcon><img src={time}/></CardIcon>
                  <CardInfoDesc>{activity.StartTime}</CardInfoDesc>
                </CardInfo>
              </CardInfosDiv>
            </Card>
          )
        })}
        <SeeMoreButton>更多觀光活動</SeeMoreButton>
      </InfoSection>
      <InfoSection>
        <InfoTitle>
          <InfoTitleIcon><img src={locationpink}/></InfoTitleIcon>
          <InfoTitleDesc>在地美食</InfoTitleDesc>
        </InfoTitle>
        {restaurants.map(restaurant => {
          return (
            <Card>
              <CardImageDiv><img src={restaurant.Picture?.PictureUrl1} alt={restaurant.Picture?.PictureDescription1} /></CardImageDiv>
              <CardTitle>{restaurant.Name}</CardTitle>
              <CardInfosDiv>
                <CardInfo>
                  <CardIcon><img src={location}/></CardIcon>
                  <CardInfoDesc>{restaurant.Address.substring(0,3)}</CardInfoDesc>
                </CardInfo>
                <CardInfo>
                  <CardIcon><img src={time}/></CardIcon>
                  <CardInfoDesc>{restaurant.OpenTime}</CardInfoDesc>
                </CardInfo>
              </CardInfosDiv>
            </Card>
          )
        })}
        <SeeMoreButton>更多在地美食</SeeMoreButton>
      </InfoSection>
      <InfoSection>
        <InfoTitle>
          <InfoTitleIcon><img src={locationpink}/></InfoTitleIcon>
          <InfoTitleDesc>住宿推薦</InfoTitleDesc>
        </InfoTitle>
        {hotels.map(hotel => {
          return (
            <Card>
              <CardImageDiv><img src={hotel.Picture?.PictureUrl1} alt={hotel.Picture?.PictureDescription1} /></CardImageDiv>
              <CardTitle>{hotel.Name}</CardTitle>
              <CardInfosDiv>
                <CardInfo>
                  <CardIcon><img src={location}/></CardIcon>
                  <CardInfoDesc>{hotel.Address}</CardInfoDesc>
                </CardInfo>
              </CardInfosDiv>
            </Card>
          )
        })}
        <SeeMoreButton>更多住宿推薦</SeeMoreButton>
      </InfoSection>
    </Container>
  )
}

export default Home
