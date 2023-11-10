export const formFieldData = [
  {
    labelName:'운동 종류',
    title:'text',
    type:'text',
    name:'sportsType',
    placeholder:'어떤 운동인지 알려주세요. 예시) 축구, 농구, 배드민턴 등...',
    required:true,
  },
  {
    labelName:'팀 이름',
    title:'text',
    type:'text',
    name:'teamName',
    placeholder:'팀명을 알려주세요.',
    required:true,
  },
  {
    labelName:'로고 스타일',
    title:'radio',
    type:'radio',
    name:'logoStyle'
    
  },
  {
    labelName: '로고 색상',
    title:'radio',
    type:'radio',
    name:'logoColor'
  }
]

export const logoColorData = [
  {
    colorName: '파랑',
    colorNameEng: 'blue',
    textColor: 'blue-500',
    ringColor: 'blue-500'
  },
  {
    colorName: '보라',
    colorNameEng: 'purple',
    textColor: 'purple-600',
    ringColor: 'purple-500'
  },
  {
    colorName: '분홍',
    colorNameEng: 'pink',
    textColor: 'pink-400',
    ringColor: 'pink-400'
  },
  {
    colorName: '빨강',
    colorNameEng: 'red',
    textColor: 'red-600',
    ringColor: 'red-600'
  },
  {
    colorName: '주황',
    colorNameEng: 'orange',
    textColor: 'orange-400',
    ringColor: 'orange-400'
  },
  {
    colorName: '초록',
    colorNameEng: 'green',
    textColor: 'green-400',
    ringColor: 'green-400'
  },
]

export const logoStyleData = [
  {
    styleName: '마스코트',
    styleEng: 'mascot'
  },
  {
    styleName: '엠블럼',
    styleEng: 'emblem'
  },
  {
    styleName: '글자',
    styleEng: 'wordmark'
  },
  {
    styleName: '빈티지',
    styleEng: 'vintage'
  }
]