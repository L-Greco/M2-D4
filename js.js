let arrayOfNames = []
const addNames = function () {
    let name = document.getElementsByTagName("input")[0].value
    let listName = document.createElement("li")
    listName.classList.add("list-group-item")
    listName.innerText= `${name}`
    let list = document.getElementsByTagName("ul")[0]
    list.appendChild(listName)
    arrayOfNames.push(name)
}
let arrayOfPairs = []
const makingOfTheLists = function () {  
    let list = document.getElementsByTagName("ol")[0]
    let numberOfLists = document.getElementsByTagName("select")[0].value
    for ( i=0;i< numberOfLists;i++) {
    let listName = document.createElement("li")
    listName.classList.add("list-group-item")
    list.appendChild(listName)
    arrayOfPairs.push("")
    
}
}

