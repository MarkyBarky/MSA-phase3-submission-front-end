if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("SW Registered");
    console.log(registration);
  }).catch(error =>{
    console.log("SW Registration Failed!");
    console.log(error);
  })


}
const scale = document.querySelector('.scale');
const ui = document.querySelector('.ui');
const rootElement = document.getElementsByTagName('html')[0];

function resize() {
    const windowWidth = window.innerWidth;
    const scaleFactorX = windowWidth / 800;

    const fontSize = 10 * scaleFactorX;

    rootElement.style.fontSize = `${fontSize}px`;
}

resize();

window.addEventListener('resize', resize);

var myForm = document.getElementById('myForm')

myForm = addEventListener('submit', function(e){
  e.preventDefault()

  var country = this.document.getElementById('country').value
  
  var url = "https://api.covid19api.com/total/dayone/country/" +country

   fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    var length = res.length
    var index = length - 1 
    var confirmed = document.getElementById('confirmed')
   
    var deaths = document.getElementById('deaths')

    confirmed.innerHTML = ''
    
    deaths.innerHTML = ''

    confirmed.append("Total Confirmed Cases since Feb 28 2020: " + res[index].Confirmed)
   
    deaths.append("Total Deaths: " + res[index].Deaths)

  })
})

const covidFactsEl = document.getElementById("covid-facts");
const loadMoreBtn = document.getElementById("load-more");


const loadSomeCovidFacts = () => {
  const MY_COVID_API = "http://localhost:8010/proxy";
  fetch(MY_COVID_API)
  .then(response => response.json())
  .then(responseJson =>  {

    // TODO display facts on page
    for (let {fact} of responseJson){
      console.log(fact);
      const covidFact = document.createElement("p");
      covidFact.innerText = fact;
      covidFactsEl.append(covidFact);
    }


  })
}

  
  loadMoreBtn.addEventListener("click", () => {
    loadSomeCovidFacts();

  })
   
  