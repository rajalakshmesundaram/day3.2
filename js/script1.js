const URL ="https://restcountries.com/v3.1/all"
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr)
xhr.onreadystatechange = () =>{
    console.log(xhr.readyState)
}

xhr.onload = () =>{
    console.log(JSON.parse(xhr.response))
    const countries = JSON.parse(xhr.response)
    for(let country of countries){
console.log("The name of the countries ==>",country.name.common,"    ","The name of the region==>",country.region,"    ","The name of the subregion==>",country.subregion,"   ","population==>",country.population)
}
}

