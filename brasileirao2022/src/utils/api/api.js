const defaultUrl = "https://api-teamsbrazilian2022.herokuapp.com/characters";

export const api ={
    createTime: async (time) => {
        fetch(defaultUrl+ "/characters/create", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(time),
        })
    }
}