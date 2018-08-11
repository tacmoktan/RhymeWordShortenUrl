const renderResponseDatamuse = (res)=>{
   // console.log(res.status); returns undefined
    if(!res){
        console.log(res.status);
    }else if(!res.length){
        console.log('length 0...write something');
        displayData.innerHTML = `<h4>Type a proper word dumbass!! </h4>`;
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
        displayData.innerHTML = `<b>You might be interested in these words:</b> <br><ol>${wordList}</ol>`;
    }
    displayData.style.display="block";
}
//extra feature to produce random words
const randomNoGenerator=()=>{

    let a = [];
    let x;
    let i=0;
    while(i<100){
        let count=0;
        x = (parseInt(Math.random()*40));
        a.forEach(item => {
        if(x === item){
            count++;
        }
        });
        if(count===0)
            a.push(x);

        if(a.length===10)
            break;
        i++;
    }
    return a;
}


const renderResponseUrl = (resUrl) =>{

    //console.log(resUrl.status); //logs active when a appropriate url is entered
    let len = Object.keys(resUrl).length //(proper way to find length of object)
    if(!len){
        console.log(resUrl.status);
    }else{
        displayData.innerHTML = `<b>Shortened Url:</b> <br> ${resUrl.shortUrl}`;
        //console.log(resUrl);
        
    }
    displayData.style.display ="block";
}