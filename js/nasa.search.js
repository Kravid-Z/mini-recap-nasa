
function searchNASA(query) {
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then(response => response.json())
        .then(renderResults)
        .catch(console.error)
}

function renderResults(data) {
    const items = data.collection.items;
  
    const container = document.querySelector(".main-content")
   
    container.innerHTML =""
    items.forEach((item)=>{
        container.innerHTML+=SearchResultComponent(item.links[0].href,item.data[0].title,item.data[0].description,item.data[0].nasa_id)
    })
}



function SearchResultComponent(image, title="", description="",id="") {
    return `<div class="col-md-4">
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="apod">
            <div class="card-body">
                <a href="/details.html?nasa_id=${id}"  class="text-light"> 
                <h5>${title}</h5>
                </a>
                <p class="card-text">${description}</p>
            </div>
        </div>
    </div>
</div>`
}




function onLoad() {
    const queryParams = new URLSearchParams(window.location.search)
    const query = queryParams.get("query")
    const resultTitle = document.querySelector("#search-results-text")
    resultTitle.innerText =`Search results for ${query}`
    searchNASA(query)
}
window.onload = onLoad