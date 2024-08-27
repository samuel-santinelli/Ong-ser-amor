export function getBaseApiUrl (){
    if(location.href.includes("localhost") || location.href.includes("127.0.0")){
        return "http://localhost:3000"
    }
    return import.meta.env.VITE_REACT_API_URL
}