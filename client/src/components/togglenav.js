const toggleBurger = () => {
    let burgerIcon = document.getElementsByClassName('navbar-burger burger');
    let dropMenu = document.getElementsByClassName('navbarBasicExample');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
  };