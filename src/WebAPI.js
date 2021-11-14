import jsSHA from 'jssha'
import { locations, types, getLocationValueByName } from './utils.js'
import { AppID, AppKey } from './config.js'
const BASE_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism"

export const getInfos = (top = 4, type = 'ScenicSpot', location, keyword, skip) => {
  let locationValue = ''
  if(location) {
      locationValue = getLocationValueByName(location)
  }
  return fetch(`${BASE_URL}/${type}${locationValue ? `/${locationValue}` : ''}?$top=${top}${keyword ? `&$filter=contains(Name%2C'${keyword}')`:'' }${skip ? `&$skip=${skip}`: ''}&$format=JSON`, {
    headers: getAuthorizationHeader()
  }).then(res => res.json())
}

export const getSpot = (type, id) => {
  return fetch(`${BASE_URL}/${type}?$filter=ID%20eq%20'${id}'&$top=30&$format=JSON`, {
    headers: getAuthorizationHeader()
  }).then(res => res.json())
}



function getAuthorizationHeader() {
//  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
}
