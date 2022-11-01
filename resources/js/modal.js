const modal = () => {
    var modal = document.querySelector(".boxModal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);

    function toggleModal () {
        modal.classList.toggle("show-modal");
    }
}

export default modal