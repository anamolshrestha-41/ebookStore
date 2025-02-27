const URL = "https://potterapi-fedeperin.vercel.app/en/spells";
const harryPara = document.querySelector("#Harry");
const btn = document.querySelector("#btn");

// we will use fetch for fetching



const getHarry = async () => {
    console.log("getting data........")

    let response = await fetch(URL); // it will send the get request from here
    console.log(response);  //hmm...! kinda JSON 
    let data = await response.json();
    harryPara.innerText = data[12].text;
}

//.json will return the second promise

btn.addEventListener("click", getHarry);
