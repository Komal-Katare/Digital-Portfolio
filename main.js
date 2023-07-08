/**
    * Scrolls to an element with header offset
    */
const scrollto = (el) => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
    }
    /**
    * Mobile nav toggle
    */
    on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
    })
