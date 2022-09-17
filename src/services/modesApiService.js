export function fetchModes(){
    return fetch("https://demo7919674.mockable.io").then(res=>{
            return res.json();
        }
    )
}