
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternaModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", "");
})

