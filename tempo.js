const apiKey = '9987fe618a7dbc113956f27c6b08c2b3'
const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector ("img");

const city = document.querySelector("#city");
const degree = document.querySelector("#degree");

const content = document.querySelector(".content");

button.addEventListener("click",()=>{
    if (!input.value) return;
    getweatherdate();
});

async function getweatherdate() {
    let urlApi= `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    try{
        await fetch(urlApi)
        .then((res)=>res.json())
        .then((data)=>{
            if(data?.cod && data.cod==="404"){
                return alert("cidade nao encontrada");
            }
            loadweatherInfo(data);
        })
    } catch (error) {
        alert(error);
    }
}
function loadweatherInfo(data){
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    
    degree.innerHTML = `temperatura: ${Math.floor(data.main.temp)}ºC`;
    
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    content.style.display = "flex";
}
