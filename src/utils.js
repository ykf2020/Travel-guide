export const locations = [
  {
    name: '臺北市',
    value: 'Taipei'
  },
  {
    name: '新北市',
    value: 'NewTaipei'
  },
  {
    name: '桃園市',
    value: 'Taoyuan'
  },
  {
    name: '臺中市',
    value: 'Taichung'
  },
  {
    name: '臺南市',
    value: 'Tainan'
  },
  {
    name: '高雄市',
    value: 'Kaohsiung'
  },
  {
    name: '基隆市',
    value: 'Keelung'
  },
  {
    name: '新竹市',
    value: 'Hsinchu'
  },
  {
    name: '新竹縣',
    value: 'HsinchuCounty'
  },
  {
    name: '苗栗縣',
    value: 'MiaoliCounty'
  },
  {
    name: '彰化縣',
    value: 'ChanghuaCounty'
  },
  {
    name: '南投縣',
    value: 'NantouCounty'
  },
  {
    name: '雲林縣',
    value: 'YunlinCounty'
  },
  {
    name: '嘉義縣',
    value: 'ChiayiCounty'
  },
  {
    name: '嘉義市',
    value: 'Chiayi'
  },
  {
    name: '屏東縣',
    value: 'PingtungCounty'
  },
  {
    name: '宜蘭縣',
    value: 'YilanCounty'
  },
  {
    name: '花蓮縣',
    value: 'HualienCounty'
  },
  {
    name: '臺東縣',
    value: 'TaitungCounty'
  },
  {
    name: '金門縣',
    value: 'KinmenCounty'
  },
  {
    name: '澎湖縣',
    value: 'PenghuCounty'
  },
  {
    name: '連江縣',
    value: 'LienchiangCounty'
  },
]

export const types = [
  {
    name: '熱門景點',
    value:'ScenicSpot',
  },
  {
    name: '觀光活動',
    value: 'Activity'
  },
  {
    name: '在地美食',
    value: 'Restaurant'
  },
  {
    name: '休息住宿',
    value: 'Hotel'
  },
]

export const getLocationValueByName = (name) => {
  let ans
  locations.forEach(location => {
    if(location.name === name){
      ans = location
    }
  })
  return ans.value
}

export const getTypeNameByValue = (value) => {
  let ans
  types.forEach(type => {
    if(type.value === value){
      ans = type
    }
  })
  return ans.name
}
