const api = async (url) => {
    console.log("url==",url);
    
    return await fetch(url)
        .then(response => response.text())
        .then((res) => {
            console.log("APIIIIII result=",res);
            return JSON.parse(res);            
        })
}

export default api;