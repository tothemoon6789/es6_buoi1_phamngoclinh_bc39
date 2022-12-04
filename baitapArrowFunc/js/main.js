let content = "";
const changeColor = (color) => {
    document.getElementById("house").className = `house ${color}`
}
const colorList =  ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];
colorList.forEach(element => {
    content += `<button class="color-button ${element}" onclick="changeColor('${element}')"></button>`
});

document.getElementById("colorContainer").innerHTML = content

