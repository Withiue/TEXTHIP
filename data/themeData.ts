// 각 테마별 카드 데이터
export const themeImages = {
  legend: [
    {
      num: 1,
      color: '#86E3CE',
      image: require('@/assets/images/legend169yellow.png'),
    },
    {
      num: 2,
      color: '#D0E6A5',
      image: require('@/assets/images/legend169yellow.png'),
    },
    {
      num: 3,
      color: '#FFDD94',
      image: require('@/assets/images/legend169yellow.png'),
    },
    {
      num: 4,
      color: '#FA897B',
      image: require('@/assets/images/legend169yellow.png'),
    },
    {
      num: 5,
      color: '#CCABD8',
      image: require('@/assets/images/legend169yellow.png'),
    },
  ],
  period: [
    {
      num: 1,
      color: '#86E3CE',
      image: require('@/assets/images/period169purple.png'),
    },
    {
      num: 2,
      color: '#D0E6A5',
      image: require('@/assets/images/period169purple.png'),
    },
    {
      num: 3,
      color: '#FFDD94',
      image: require('@/assets/images/period169purple.png'),
    },
    {
      num: 4,
      color: '#FA897B',
      image: require('@/assets/images/period169purple.png'),
    },
    {
      num: 5,
      color: '#CCABD8',
      image: require('@/assets/images/period169purple.png'),
    },
  ],
  want: [
    {
      num: 1,
      color: '#86E3CE',
      image: require('@/assets/images/want169pink.png'),
    },
    {
      num: 2,
      color: '#D0E6A5',
      image: require('@/assets/images/want169pink.png'),
    },
    {
      num: 3,
      color: '#FFDD94',
      image: require('@/assets/images/want169pink.png'),
    },
    {
      num: 4,
      color: '#FA897B',
      image: require('@/assets/images/want169pink.png'),
    },
    {
      num: 5,
      color: '#CCABD8',
      image: require('@/assets/images/want169pink.png'),
    },
  ],
  line: [
    {
      num: 1,
      color: '#86E3CE',
      image: require('@/assets/images/line169yellow.png'),
    },
    {
      num: 2,
      color: '#D0E6A5',
      image: require('@/assets/images/line169yellow.png'),
    },
    {
      num: 3,
      color: '#FFDD94',
      image: require('@/assets/images/line169yellow.png'),
    },
    {
      num: 4,
      color: '#FA897B',
      image: require('@/assets/images/line169yellow.png'),
    },
    {
      num: 5,
      color: '#CCABD8',
      image: require('@/assets/images/line169yellow.png'),
    },
  ],
};

// 타입 정의
export type ThemeId = 'legend' | 'period' | 'want' | 'line';