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
    let countStr = `${count} (${time})`
    saveEl.innerHTML += `<li>${countStr}</li>`
    countEl.innerHTML = 0
    count = 0
}

deleteBtn.addEventListener("dblclick", function(){
    saveEl.innerHTML = "Previous entries: ";
    console.log(saveEl)
})


