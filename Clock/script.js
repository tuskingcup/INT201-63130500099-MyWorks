function change() {
    let last1 = document.getElementById("img1").src;
    let last2 = document.getElementById("img2").src;

    document.getElementById("img1").src = document.getElementById("img3").src;
    document.getElementById("img2").src = last1;
    document.getElementById("img3").src = document.getElementById("img4").src;
    document.getElementById("img4").src = last2;
}
