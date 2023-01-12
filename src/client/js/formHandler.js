import { checkForUrl } from "./checkURL";
import {polarityChecker} from './polarityChecker'
import 'regenerator-runtime/runtime'

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const data = await response.json();
         return data;
      }catch(error) {
      console.log("error", error);
      }
  }


const handleSubmit =async (event) => {
    const serverUrl="https://evaluate-a-news-article-with-nlp.onrender.com/add-url"

   event.preventDefault()
     // check what text was put into the form field
    let formText = document.getElementById('article-url').value
    document.getElementById('article-url').value=''

    if(checkForUrl(formText)){
      postData(serverUrl,{url:formText}).then(data=>{
        document.getElementById("agreement").textContent=`Agreement : ${data.agreement}`
        document.getElementById("subjectivity").textContent=`Subjectivity : ${data.subjectivity}`
        document.getElementById("confidence").textContent=`Confidence : ${data.confidence}`
        document.getElementById("irony").textContent=`Irony : ${data.irony}`
        document.getElementById("score_tag").textContent=`Score tag : ${polarityChecker(data.score_tag)}`
      })
    }else{
        alert("You enterd invalid url , please try again with valid one")
        document.getElementById("agreement").textContent=`Agreement :`
        document.getElementById("subjectivity").textContent=`Subjectivity : `
        document.getElementById("confidence").textContent=`Confidence : `
        document.getElementById("irony").textContent=`Irony : `
        document.getElementById("score_tag").textContent=`Score tag : `
        return undefined;
    }
}
export { handleSubmit }
