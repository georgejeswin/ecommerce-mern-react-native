// const hostIP = "http://10.0.2.2:3000";
// let baseURL = `${hostIP}/api/v1/`; //API IP address or domain

import { Platform } from "react-native";

let baseURL = "";
{
  Platform.OS == "android"
    ? (baseURL = "http://10.0.2.2:5000/api/v1/")
    : (baseURL = "http://localhost:5000/api/v1/");
}

export default baseURL;
