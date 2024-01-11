var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")

function addBook() {
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
}

function cancelBook(event) {
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
}

var booktitle = document.querySelector(".book-title")
var bookauthor = document.querySelector(".book-author")
var bookdes = document.querySelector(".book-des")
var container=document.querySelector(".container")
var addb=document.querySelector(".add-book")

addb.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "box-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5> ${bookauthor.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
booktitle.value=""
bookauthor.value=""
bookdes.value=""
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

function deleteBook(event)
{
    event.target.parentElement.remove()
}