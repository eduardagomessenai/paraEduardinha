var toogleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light")

    const isLight = html.classList.contains("light");

    const srcValue = isLight ? "../img/126248825.jpg" : "../img/eudnv.jpg";
    const altValue = isLight ? "Imagem de perfil de uma pessoa em preto e branco" : "Imagem de perfil menina modo colorido";

    document.querySelector("#profile img").setAttribute("src", srcValue);
    document.querySelector("#profile img").setAttribute("alt", altValue);

}