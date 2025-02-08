import React from "react";
import { SvgXml } from "react-native-svg";

const logo = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM7 9L8.41 10.41L11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9Z" fill="white"/>
</svg>
`;

const upload = () => {
  const UploadSvg = () => <SvgXml xml={logo} />;
  return <UploadSvg />;
};

export default upload;