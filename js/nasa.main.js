
const searchButtonHandler = function(){
    const searchInput = document.getElementById("search-input")
    const query = searchInput.value
    if(query){
        window.location.href=`/search.html?query=${searchInput.value}`
    }
    else{
        alert('Please type something to search 🤓')
    }
}
window.onload=function(){
    const searchButton = document.getElementById("search-button")
    searchButton.onclick=searchButtonHandler
}