
const ashokGiri = document.querySelector(".ashokGiri")

const loadText = () => {
    setTimeout(() => {
        ashokGiri.innerText = "Ashok Giri"
        ashokGiri.style.color = "wheat"

    }, 0);
    setTimeout(() => {
        ashokGiri.innerText = "Sauta Boy"
        ashokGiri.style.color = "pink"

    }, 4000);
    setTimeout(() => {
        ashokGiri.innerText = "Web Developer"
        ashokGiri.style.color = "hotpink"
    }, 8000);
}
loadText()
setInterval(loadText, 12000)


// ABOUT ME PAGE IS HERE
// FORM VALIDATION IS HERE

const name = document.querySelector("#name")
const phone = document.querySelector("#phone")
const error = document.querySelector("#error")

const form = document.querySelector("#form")

form.addEventListener('submit', (e) => {
    let errorMessage = []
    if (name.value.trim() === "" || name.value.trim() == null) {
        errorMessage.push("Name is Required ! ")
    }
    else {
        if (!name.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
            errorMessage.push("Name Must Have First And Last Name ! ")
        }
    }
    if (phone.value.trim() === "" || phone.value.trim() == null) {
        errorMessage.push("Phone is Required ! ")
    }
    else {
        if (!phone.value.match(/^977\d{10}$/) && (!phone.value.match(/^98\d{8}$/)) && (!phone.value.match(/^96\d{8}$/))) {
            errorMessage.push("Invalid Phone")
        }
    }

    if (errorMessage.length > 0) {
        e.preventDefault()
        error.innerText = errorMessage.join("")
    }
})


function validName() {
    if (name.value.trim() === "" || name.value.trim() == null) {
        error.innerText = "Name is Required ! "
    }
    else {
        if (!name.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
            error.innerText = "Name Must Have First And Last Name ! "
        }
        else {
            error.innerText = ""

        }
    }




}
function validPhone() {
    if (phone.value.trim() === "" || phone.value.trim() == null) {
        error.innerText = "Phone is Required ! "
    }
    else {
        if (!phone.value.match(/^977\d{10}$/) && (!phone.value.match(/^98\d{8}$/)) && (!phone.value.match(/^96\d{8}$/))) {
            error.innerText = "Invalid Phone"
        }
        else {
            error.innerText = ""
        }
    }
}
// clearing the field
name.value = ""
phone.value = ""




