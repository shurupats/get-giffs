
function searchGif(){
  let status = document.querySelector(".container-search__field").value;
  let cat = getGif(status);

}

async function getGif(gifName){
  let result = [];
  let str = `https://api.giphy.com/v1/gifs/search?api_key=h0PbnSCpetJD41tHZQZVTRP2zqETXR6U&q=` + gifName + `&limit=5&offset=0&rating=g&lang=en`;
  let response = await fetch(str);
  result = await response.json().data;

  return result;
}

document.querySelector(".button").addEventListener("click", searchGif);
