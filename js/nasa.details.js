
function searchNASA(nasa_id) {
    fetch(`https://images-api.nasa.gov/asset/${nasa_id}`)
        .then(response => response.json())
        .then(renderResults)
        .catch(console.error)
}

function renderResults(data) {
    const items = data.collection.items;
    
    const container = document.querySelector(".main-content")
   
    container.innerHTML =""
    items.filter(item=>item.href.includes("jpg")).forEach((item)=>{
        container.innerHTML+=SearchResultComponent(item.href)
    })
}



function SearchResultComponent(image) {
    return `<div class="col-md-4">
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="apod">
            
        </div>
    </div>
</div>`
}




function onLoad() {
    const queryParams = new URLSearchParams(window.location.search)
    const nasa_id = queryParams.get("nasa_id")
    const resultTitle = document.querySelector("#search-results-text")
    resultTitle.innerText =`${nasa_id}`
    searchNASA(nasa_id)
}
window.onload = onLoad