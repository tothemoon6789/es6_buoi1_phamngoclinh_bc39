const diemTrungBinh = (...score) => {
    let count = 0;
    let total = 0;
   
    score.forEach(element => {
    
        if (Number.isInteger(element)) {
            total += element
        }
        count++
    });
    if (count === 0) return
    return total / count
}
document.getElementById("btnKhoi1").onclick = () => {
    document.getElementById("tbKhoi1").innerHTML = diemTrungBinh(
        document.getElementById("inpToan").value*1,
        document.getElementById("inpLy").value*1,
        document.getElementById("inpHoa").value*1,
    )
}
document.getElementById("btnKhoi2").onclick = () => {
    document.getElementById("tbKhoi2").innerHTML = diemTrungBinh(
        document.getElementById("inpVan").value*1,
        document.getElementById("inpSu").value*1,
        document.getElementById("inpDia").value*1,
        document.getElementById("inpEnglish").value*1
    )
}