const target = document.querySelector(".content")
const today = new Date()
const isItLeesBirthday = today.getDate() === 23 && today.getMonth() === 3
target.textContent = isItLeesBirthday ? "yes" : "no"
