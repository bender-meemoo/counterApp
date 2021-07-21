let saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const deleteBtn = document.getElementById("delete-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes()
    let countStr =  []
    countStr.push({countSum:count, timeStamp:time})
    for( let i = 0;  i <countStr.length; i++) {
        countStr.push({countSum:count, timeStamp:time})
        saveEl.innerHTML += 
        `
        <li> ${countStr.countSum} ${countStr.timeStamp}</li>
        `
    }
    console.log(countStr)
    countEl.innerHTML = 0
    count = 0
}

deleteBtn.addEventListener("dblclick", function(){
    saveEl.innerHTML = "Previous entries: ";
    console.log(saveEl)
})


