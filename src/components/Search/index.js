import { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Second, TextSecond, TextPrimary, H2, H3, Title, MobileBody1, Body2, Shadow } from "../../constants.js"
import mainimage from '../../assets/mainimage.svg'
import locationpink from '../../assets/locationpink.svg'
import location from '../../assets/location.svg'
import ScenicSpotCard from '../Cards/ScenicSpotCard.js'
import { AuthContext } from "../../contexts.js";
import { getInfos } from '../../WebAPI.js'
import { getTypeNameByValue } from '../../utils.js'

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: ${BgGray};
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleDiv = styled.div`
  width: 100%;
  margin: 76px 0 20px 0;
`

const TitleDesc = styled.h3`
  display: inline;
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  color: ${TextPrimary};
`
const TitleDescHighLight = styled(TitleDesc)`
  color: ${Primary}
`

const SeeMoreButton = styled.button`
`

const Search = () => {
  const { location, keyword, type } = useContext(AuthContext)
  const [searchResults, setSearchResults] = useState([])
  const [isMore, setIsMore] = useState(true)
  const [skip, setSkip] = useState(0)
  useEffect(() => {
    getInfos(12, type, location, keyword, skip).then(response => {
      setSearchResults(response)
    })
  },[location, keyword, type])
  return (
    <Container>
      <TitleDiv>
        <TitleDesc>{keyword ? `含有「${keyword}」，` : ''}{location ? `${location}的` : ''}{getTypeNameByValue(type)}</TitleDesc>
      </TitleDiv>
      {searchResults.map(result => {
        return (
          <ScenicSpotCard key={result.ID} spot={result}/>
        )
      })}
    </Container>
  )
}

export default Search
