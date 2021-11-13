import styled from "styled-components"
import { BgWhite, BgGray, Line, Primary, Second, TextSecond, TextPrimary, H2, H3, Title, MobileBody1, Body2, Shadow } from "../../constants.js"
export const Card = styled.div`
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

export const CardImageDiv = styled.div`
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

export const CardTitle = styled.h4`
  width: 100%;
  font-size: ${Title};
  font-weight: 700;
  color: ${TextPrimary};
  padding: 0 16px;
  margin: 0 0 10px 0;
`

export const CardInfosDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 24px;
  display: flex;
  align-items: center;
`

export const CardInfo = styled.div`
  height: 100%;
  margin: 0 20px 0 0;
  display: flex;
  align-items: center;
  max-width: 66%;

  & + & {
    margin: 0 0 0 0;
  }
`

export const CardIcon = styled.div`
  height: 100%;
  margin: 0 9px 0 0;
  img {
    height: 100%;
  }
`

export const CardInfoDesc = styled.p`
  font-size: ${Body2};
  font-weight: 400;
  color: ${TextSecond};
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
