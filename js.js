let arrayOfNames = []
let name1=""
let name2=""
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
    let existedLists = document.querySelectorAll("ol li")
    let numberOfExistedLists = document.querySelectorAll("ol li").length
    for (i=0;i<numberOfExistedLists;i++) {
        list.removeChild(existedLists[i])
    }
    for ( i=0;i< numberOfLists;i++) {
    let listName = document.createElement("li")
    listName.innerText = `${name1} + ${name2}`
    listName.classList.add("list-group-item")
    list.appendChild(listName)
    arrayOfPairs.push("")   
}
}

const pairsGeneration = function () {
    let counter = 0
let numberOfUls = document.querySelectorAll("ul li").length
let uls = document.querySelectorAll("ul li")
let ul = document.getElementsByTagName("ul")[0]
let lis = document.querySelectorAll("ol li")
let ol = document.getElementsByTagName("ol")[0]
let rng1 = Math.round(Math.random()*numberOfUls-1)
ul.removeChild(uls[rng1])
ol.replaceChild(lis[counter],uls[rng1])
let rng2 = Math.round(Math.random()*numberOfUls-1)
ul.removeChild(uls[rng2])


counter ++

}

