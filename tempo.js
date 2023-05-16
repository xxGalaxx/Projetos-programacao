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
    let urIApi= 'h'
    try{
        await fetch(urlapi)
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
    degree.innerHTML = `temperatura: ${math.floor(data.main.temp)}ºC`;
    img.src = ``
    content.style.display = "flex";
}