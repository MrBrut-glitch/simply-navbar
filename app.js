const navbar = document.querySelector(".navbar");
  window.onscroll = () => {
    if(window.pageYOffset > 50) {
      navbar.classList.add("animeNav");
    } else {
      navbar.classList.remove("animeNav");
    }
}
