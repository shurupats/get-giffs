
async function searchGif(){
  const searchField = document.querySelector(".container-search__field");
  const gifName  = searchField.value;
  searchField.value = '';
  getGif(gifName, 5).then((data) => printGifs(data));
}

function printGifs(result){
  try{
    // Здесь правильнее использовать просто проверку if без try/catch? 
    if (result.data.length === 0){
      throw new Error(`Нет данных`);
    }
    const gifs = result.data;
    const resultContainer = document.querySelector('.container-result');
    clearResultContainer(resultContainer);
    gifs.forEach(gif => {
    let gifContainer = document.createElement('img');
    gifContainer.className = 'container-result__gif';
    gifContainer.src = gif.images.downsized.url;;
    resultContainer.appendChild(gifContainer);
  });

  }catch(error){
    console.log(error);
  }
}

function clearResultContainer(container){
  container.innerHTML = '';
}

async function getGif(gifName, limit){
  //Если поставить try/catch здесь, код ошибки не будет перехвачен
  const url = `https://api.giphy.com/v1/gifs/search?api_key=h0PbnSCpetJD41tHZQZVTRP2zqETXR6U&q=${gifName}&limit=${limit}&offset=0&rating=g&lang=en`;
  const response = await fetch(url);
  return await response.json();
}

document.querySelector(".button").addEventListener("click", searchGif);
