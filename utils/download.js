import React from "react";
import { SvgXml } from "react-native-svg";

const logo = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M19.5 12V19H5.5V12H3.5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V12H19.5ZM13.5 12.67L16.09 10.09L17.5 11.5L12.5 16.5L7.5 11.5L8.91 10.09L11.5 12.67V3H13.5V12.67Z" fill="white"/>
</svg>
`;

const download = () => {
  const DownloadSvg = () => <SvgXml xml={logo} />;
  return <DownloadSvg />;
};

export default download;