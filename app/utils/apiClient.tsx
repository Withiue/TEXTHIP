import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000", // 프록시 서버를 설정한 경우 사용
  timeout: 5000,
});

export default apiClient;
