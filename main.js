//Datamuse api
//information to reach api
const datamuseUrl = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";

//selecting elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const displayData = document.querySelector('#displayData');

//ajax function
const getData = async () => {
    const wordQuery = inputField.value; 
    const endpoint = `${datamuseUrl}${queryParams}${wordQuery}`; 
    try{
        const responseDatamuse = await fetch(endpoint); //returns promise (which is an object)
        if(responseDatamuse.ok){
            const jsonResponseDatamuse = await  responseDatamuse.json(); //js obj to json obj
            //console.log(jsonResponseDatamuse);
            renderResponseDatamuse(jsonResponseDatamuse); //json obj contains array of other objs. i.e.{obj1,obj2,obj3...}
        }else{
            throw new Error('Request failed!');
        }
    }catch(error){
        console.log(error);
        displayData.innerHTML = "Request failed!";
        displayData.style.display ="block";
    }
}

const emptyDisplayData = ()=>{
    while(displayData.firstChild){
        displayData.removeChild(displayData.firstChild); //clears the displayed Data
    }
}

const displaySuggestions = (event)=>{
    event.preventDefault();
    console.log('submit clicked');
    emptyDisplayData(); 
    getData();
}
//click events to clear the displayed suggestions
submit.addEventListener('click',displaySuggestions); 

//Url shortener api
//information to reach Api
const apiKey = "53fb317df1684429aa374624fb6dbe4d";
const url2 ="https://api.rebrandly.com/v1/links";

//selecting elements
const shorten  = document.querySelector('#shorten');

//ajax function
const postData = async () =>{
    const urlToShorten = input.value;
    const data = JSON.stringify({destination: urlToShorten});    
    try{
        const responseUrl = await fetch(url2,{
            method:"POST",
            body: data,
            headers:{
                "Content-type":"application/json",
                "apikey":apiKey
            }
        }); //returns a promise and assigns it to responseUrl
        if(responseUrl.ok){
            const jsonResponseUrl = await responseUrl.json(); //js obj to json obj
            renderResponseUrl(jsonResponseUrl);
        }else{
            throw new Error('Request failed!');
           
        }
    }catch(error){
        console.log(error);
        displayData.innerHTML = "Request failed!";
        displayData.style.display ="block";
    }
}

//click events and clear the displayed data
const displayShortenedUrl = ()=> {
    event.preventDefault();
    console.log('shorten clicked')
    emptyDisplayData(); //this function is declared at ajax function area of datamuseapi
    postData();
}
shorten.addEventListener('click',displayShortenedUrl);

//Switching between 2 Apis

const switchDatamuse = document.querySelector("#datamuseApi");
const switchUrlShortener = document.querySelector('#urlShortener');
let pageBanner = document.querySelector('#title');
let instructInput = document.querySelector('h3'); 

switchUrlShortener.onclick = ()=>{
    emptyDisplayData();
    input.value ="";
    displayData.style.display ="none";

    pageBanner.textContent = "Url Shortener";
    instructInput.textContent = "Enter a url here!";

    submit.style.display = "none";
    shorten.style.display = "block";

    switchDatamuse.style.display = "block";
    switchUrlShortener.style.display ="none";
}

switchDatamuse.onclick = ()=>{
    emptyDisplayData();
    input.value="";
    displayData.style.display ="none";

    pageBanner.textContent = "Word Rhymer";
    instructInput.textContent = "Enter a word here!";
    
    submit.style.display = "block";
    shorten.style.display = "none";

    switchDatamuse.style.display ="none";
    switchUrlShortener.style.display = "block";
}
