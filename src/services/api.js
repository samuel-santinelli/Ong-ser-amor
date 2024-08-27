// import axios from "axios";
// import { getBaseApiUrl } from "../Config/parameters";

// const LS_AUTH_KEY = "@token";
// const LS_SESSION_KEY = "@session";

// const BASE_URL = getBaseApiUrl()

// const LOCAL_STORAGE = localStorage;
// const SESSION_STORAGE = sessionStorage;

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.timeout = 50_000;
// axios.defaults.validateStatus = (status) => status < 500;

// let sessionJwtToken;

// // console.log("axios.defaults.baseURL", axios.defaults.baseURL)
// // console.log("axios.defaults.timeout", axios.defaults.timeout)

// const ops = {
//   authenticate(jwtToken) {
//     sessionJwtToken = jwtToken;
//     LOCAL_STORAGE.setItem(LS_AUTH_KEY, jwtToken);
//   },

//   clearSession() {
//     sessionJwtToken = "";
//     LOCAL_STORAGE.removeItem(LS_AUTH_KEY);
//     SESSION_STORAGE.removeItem(LS_SESSION_KEY);
//   },

//   async networkError(path) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.get(path);
//       return result;
//     } catch (error) {
//       // console.log("error-networkError", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   return false;
//       // }
//     }
//   },

//   async post(path, data) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.post(path, data);
//       return result;
//     } catch (error) {
//       // console.log("error-post", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },

//   async postDownload(path, data) {
//     try {
//       const ax = getAxiosInstance();
//       const response = await ax({
//         url: path,
//         data: data,
//         method: 'POST',
//         responseType: 'blob', // Important
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "report.pdf");
//       link.click();
//     } catch (error) {
//       // console.log("error-postDownload", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },

//   async get(path) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.get(path);
//       return result;
//     } catch (error) {
//       // console.log("error-get", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },

//   async patch(path, data) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.patch(path, data);
//       return result;
//     } catch (error) {
//       // console.log("error-patch", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },

//   async put(path, data) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.put(path, data);
//       return result;
//     } catch (error) {
//       // console.log("error-put", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },

//   async delete(path, data) {
//     try {
//       const ax = getAxiosInstance();
//       const result = await ax.delete(path, data);
//       return result;
//     } catch (error) {
//       // console.log("error-delete", error)
//       return false
//       // if (!window.navigator.onLine || error.code === "ERR_NETWORK") {
//       //   location.href = "/error500";
//       // }
//     }
//   },
// };

// function handleErrorResponse(response) {
//   if (response.status === 401) {
//     ops.clearSession();
//     location.href = "/";
//   } else {
//     return response;
//   }
// }

// export function getAxiosInstance() {
//   const jwt = sessionJwtToken || LOCAL_STORAGE.getItem("@token");
//   const headers = jwt ? { authorization: jwt } : {};
//   const inst = axios.create({ headers });

//   if (jwt) {
//     // Inclui o interceptor apenas quando o cliente já tem um token no STORAGE.
//     // Caso contrário o processo de autenticação cai.
//     inst.interceptors.response.use(handleErrorResponse);
//   }

//   return inst;
// }

// export default ops;
