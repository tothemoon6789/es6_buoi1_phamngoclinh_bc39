const content = document.querySelector(".heading").innerHTML
const myArrContent = [...content]
let html = ""
myArrContent.forEach(element => {
    if (element.trim() !== "") {
        html += `<span>${element}</span>`
        console.log(element);
    }
});
document.querySelector(".heading").innerHTML = html