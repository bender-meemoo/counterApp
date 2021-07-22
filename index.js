let saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const deleteBtn = document.getElementById("delete-btn")
let count = 0;
let countStr =  [];
let time = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function getTime() {
    let today = new Date();
    time = today.getHours() + ":" + today.getMinutes()
    return time;
}

function render() {
    countStr.push( {countSum: count, timeStamp: getTime(time) })
    localStorage.setItem("countSum", JSON.stringify(countStr), "timeStamp", JSON.stringify(countStr))
    console.log(localStorage.getItem("countSum"))
    let listEntries = "";
    for( let i = 0;  i <countStr.length; i++) {
        listEntries +=
        `
            <li> ${countStr[i].countSum} (${countStr[i].timeStamp})</li>
        `
    }

    saveEl.innerHTML = listEntries
    console.log(countStr)
    countEl.innerHTML = 0
    count = 0
}

deleteBtn.addEventListener("dblclick", function(){
    saveEl.innerHTML = "";
    console.log(saveEl)
})

console.log(getTime())
