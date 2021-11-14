import {
  Card,
  CardImageDiv,
  CardTitle,
  CardInfosDiv,
  CardInfo,
  CardIcon,
  CardInfoDesc,
} from './CardElements.js'
import time from '../../assets/time.svg'
import location from '../../assets/location.svg'
const ScenicSpotCard = ({ spot }) => {
  return (
    <Card to={`/spot/ScenicSpot/${spot.ID}`}>
      <CardImageDiv><img src={spot.Picture?.PictureUrl1} alt={spot.Picture?.PictureDescription1} /></CardImageDiv>
      <CardTitle>{spot.Name}</CardTitle>
      <CardInfosDiv>
        <CardInfo>
          <CardIcon><img src={location}/></CardIcon>
          <CardInfoDesc>{spot.Address?.substring(0,3)}</CardInfoDesc>
        </CardInfo>
        <CardInfo>
          <CardIcon><img src={time}/></CardIcon>
          <CardInfoDesc>{spot.OpenTime}</CardInfoDesc>
        </CardInfo>
      </CardInfosDiv>
    </Card>
  )
}

export default ScenicSpotCard
