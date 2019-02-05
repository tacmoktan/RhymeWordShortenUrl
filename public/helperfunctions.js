const renderResponseDatamuse = (res)=>{
   // console.log(res.status); returns undefined
    if(!res){
        console.log(res.status);
    }else if(!res.length){
        console.log('length 0...write something');
        displayData.innerHTML = `<h4 class="errorMessage">Type a proper word!! </h4>`;
    }else{
        //console.log(res);
        
        let wordList =[];
        /* //uncomment this and comment whole key section (codeacademy way)
        for(let i=0;i<Math.min(res.length,10);i++){ 
            wordList.push(`<li> ${res[i].word} </li>`);  // word is the key for key-value pair of res[i]
        }*/

        //to generate Random words
        //key sections starts
        let keys = randomNoGenerator();
        //console.log(keys); //array of generated random numbers
        keys.forEach( key =>{
            if(res[key]!=undefined)
                wordList.push(`<li>${res[key].word}</li>`);
        });
        //key sections ends
        
        wordList = wordList.join("");  //.join('') turns the array into single string
        displayData.innerHTML = `<div id="responseWords"> <b>You might be interested in these words:</b> <br><ol>${wordList}</ol> </div>`;
    }
    /* displayData.style.display="block"; */
}
//extra feature to produce random & unique words
const randomNoGenerator=()=>{

    let a = [];    //array to store random & unique numbers
    
    let i=0;
    while(i<100){
        let randomNum = (Math.floor(Math.random()*40));  //generates random no. from 0 to 40
        let count=1;            //counts occurence of number x i.e. initially once
        
        a.forEach(num => {
            if(num === randomNum)
                count++;       //i.e num has occured more than once (not a unique number)
        });

        if(count===1)      
            a.push(randomNum);

        if(a.length===10)
            break;
    }
    return a;
}


const renderResponseUrl = (resUrl) =>{

    //console.log(resUrl.status); //logs active when a appropriate url is entered
    let len = Object.keys(resUrl).length //(proper way to find length of object)
    if(!len){
        console.log(resUrl.status);
    }else{
        displayData.innerHTML = `<div id="shortenedUrl"><b>Shortened Url:</b>${resUrl.shortUrl}</div>`;
        //console.log(resUrl);
        
    }
    /* displayData.style.display ="block"; */
}