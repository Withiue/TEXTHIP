export interface OnboardingData {
	id: number;
	title: string;
	content: string;
	image?: any; // 메인 이미지
	templateImages?: any[]; // 템플릿 이미지 배열 (상황별 템플릿용)
  }

  const data: OnboardingData[] = [
	{
	  id: 1,
	  title: "나만의 독서 기록",
	  content: "책을 기록하며, 나만의 이야기를 쌓아보세요",
	  image: require('@/assets/images/onboarding_home.png'),
	},
	{
	  id: 2,
	  title: "상황별 템플릿",
	  content: "인생책 소개, 읽고싶은 책, 책 속 한 줄 등 \n다양한 상황에 맞춘 디자인을 만나보세요.",
	  templateImages: [
		require('@/assets/images/기간별 추천 16_9.png'),
		require('@/assets/images/인생책 추천 16_9.png'),
		require('@/assets/images/읽고 싶은 책 16_9.png'),
		require('@/assets/images/책 속 한 줄 16_9_회.png')
	],
	},
	{
	  id: 3,
	  title: "간편한 SNS 공유",
	  content: "사진 사이즈 맞추는 번거로움 없이, \n간편하게 공유해보세요",
	  image: require('@/assets/images/onboarding_share.png'),
	},
  ];
  
  export default data;