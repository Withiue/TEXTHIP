import apiClient from "../utils/apiClient";

const API_URL = "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";

export const searchBooks = async (query: string) => {
  try {
    const response = await apiClient.get(API_URL, {
      params: {
        ttbkey: "ttbhannah0012042137001", // 알라딘 API 키
        Query: query, // 검색어
        QueryType: "Title", // 검색 유형
        MaxResults: 10, // 최대 검색 결과 개수
        SearchTarget: "Book", // 검색 대상
        output: "JS", // JSON 포맷
        Version: "20131101", // API 버전
      },
    });

    // 데이터 추출 및 파싱
    const items = response.data.item || [];
    return items.map((item: any) => ({
      id: item.itemId,
      title: item.title,
      author: item.author,
      cover: item.cover, // 책 표지 URL
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
