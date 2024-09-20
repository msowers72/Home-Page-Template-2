/**
* Template Name: Gp
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Updated: Jun 14 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  // function toggleScrolled() {
  //   const selectBody = document.querySelector('body');
  //   const selectHeader = document.querySelector('#header');
  //   if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  //   window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  // }

  // document.addEventListener('scroll', toggleScrolled);
  // window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  // mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      console.log(navmenulink.hash)
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      
      if (!section) return;
      let position = window.scrollY + 200;
      
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        
        navmenulink.classList.add('active');
        
      } else {
        navmenulink.classList.remove('active');
        
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Code for the Pagination feature
let link = document.getElementsByClassName('page-link');
let announce1 = document.querySelector('.announce1');
let announce2 = document.querySelector('.announce2');
let announce3 = document.querySelector('.announce3');
let announce4 = document.querySelector('.announce4');
let announce5 = document.querySelector('.announce5');
let announce6 = document.querySelector('.announce6');

let currentValue = 1;



// activeLink function
function activeLink() { 
 
  for (l of link) {
    l.classList.remove('my-active');
   
  };
  event.target.classList.add('my-active');  
  currentValue = event.target.value;
 let current_page = currentValue
 console.log(currentValue)
 console.log(current_page)
 
  // Logic for pagination
  if (current_page === 1) {
    announce1.style.display = "block"
  } else if (current_page !== 1) {
    announce1.style.display = "none"
  } 

   if (current_page === 2) {
    announce2.style.display = "block"
  } else if (current_page !== 2) {
    announce2.style.display = "none"
  }

  if (current_page === 3) {
    announce3.style.display = "block"
  } else if (current_page !== 3) {
    announce3.style.display = "none"
  }

  if (current_page === 4) {
    announce4.style.display = "block"
  } else if (current_page !== 4) {
    announce4.style.display = "none"
  }

  if (current_page === 5) {
    announce5.style.display = "block"
  } else if (current_page !== 5) {
    announce5.style.display = "none"
  }

  if (current_page === 6) {
    announce6.style.display = "block"
  } else if (current_page !== 6) {
    announce6.style.display = "none"
  }
   
 
  
};

function backBtn() {
  console.log(currentValue)
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove('my-active');
    };
    currentValue--;
    link[currentValue - 1].classList.add('my-active');
    
    if (currentValue === 5) {
      announce5.style.display = "block";
      announce6.style.display = "none";
    } else if (currentValue === 4) {
      announce4.style.display = "block";
      announce5.style.display = 'none';
    } else if (currentValue === 3) {
      announce3.style.display = "block";
      announce4.style.display = "none";
    } else if (currentValue === 2) {
      announce2.style.display = "block";
      announce3.style.display = "none";
    } else if (currentValue === 1) {
      announce1.style.display = "block";
      announce2.style.display = "none"
    }

  };
};

function nextBtn() {
  if (currentValue < 6) {
    for (l of link) {
      l.classList.remove('my-active');
    };
    currentValue++;
    link[currentValue - 1].classList.add('my-active');

    if (currentValue === 2) {
      announce2.style.display = "block";
      announce1.style.display = "none";
    } else if (currentValue === 3) {
      announce3.style.display = "block";
      announce2.style.display = "none";
    } else if (currentValue === 4) {
      announce4.style.display = "block";
      announce3.style.display = "none";
    } else if (currentValue === 5) {
      announce5.style.display = "block";
      announce4.style.display = "none";
    } else if (currentValue === 6) {
      announce6.style.display = "block";
      announce5.style.display = "none";
    }
  };
};



// Slider JavaScript
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlider');
   

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };

    

    slides[slideIndex - 1].style.display = 'block';
   
};

// Code for the new navbar
let nav_toggle = document.querySelector('.nav_toggle');

let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');

let nav_menu = document.querySelector('.nav_menu');


// nav_toggle.addEventListener("click", () => {
  
//   nav_menu.classList.toggle('active');
//   nav_toggle_icon.setAttribute('name',
//     nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
//   );
// });

// sticky navbar

// new navbar navigation
const searchButton = document.querySelector('nav .desktop-nav .link-search');


const closeButton = document.querySelector('.search-container .link-close ');
const desktopNav = document.querySelector('.desktop-nav');
const searchContainer = document.querySelector('.search-container');

const overlay = document.querySelector('.overlay');

const tabSearch = document.querySelector('nav .desktop-nav .tab-search');
const firstLink = document.querySelector('#first-link');
const firstLinkClass = document.querySelector('.first-link')
const firstCloseButton = document.querySelector('.search-container .firstLink-close ');

const secondSearch = document.querySelector('nav .desktop-nav .second-search');
const secondLink = document.querySelector('#second-link');
const secondLinkClass = document.querySelector('.second-link')
const secondCloseButton = document.querySelector('.search-container .secondLink-close ');

const thirdSearch = document.querySelector('nav .desktop-nav .third-search');
const thirdLink = document.querySelector('#third-link');
const thirdLinkClass = document.querySelector('.third-link')
const thirdCloseButton = document.querySelector('.search-container .thirdLink-close ');

const fourthSearch = document.querySelector('nav .desktop-nav .fourth-search');
const fourthLink = document.querySelector('#fourth-link');
const fourthLinkClass = document.querySelector('.fourth-link')
const fourthCloseButton = document.querySelector('.search-container .fourthLink-close ');

const fiveSearch = document.querySelector('nav .desktop-nav .five-search');
const fiveLink = document.querySelector('#five-link');
const fiveLinkClass = document.querySelector('.five-link')
const fiveCloseButton = document.querySelector('.search-container .fiveLink-close ');

const sixSearch = document.querySelector('nav .desktop-nav .six-search');
const sixLink = document.querySelector('#six-link');
const sixLinkClass = document.querySelector('.six-link')
const sixCloseButton = document.querySelector('.search-container .sixLink-close ');

const sevenSearch = document.querySelector('nav .desktop-nav .seven-search');
const sevenLink = document.querySelector('#seven-link');
const sevenLinkClass = document.querySelector('.seven-link')
const sevenCloseButton = document.querySelector('.search-container .sevenLink-close ');

const eightSearch = document.querySelector('nav .desktop-nav .eight-search');
const eightLink = document.querySelector('#eight-link');
const eightLinkClass = document.querySelector('.eight-link')
const eightCloseButton = document.querySelector('.search-container .eightLink-close ');






searchButton.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    searchContainer.classList.remove('hide');
    overlay.classList.add('show');
});

tabSearch.addEventListener('click', () => {
    if(x.matches) {
     console.log("You are there")
    firstsearchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
    firstmobileSearch.classList.remove('hide')
    mobileSearchContainer.classList.add('hide')
    } else {
        console.log(("i worked"))
        desktopNav.classList.add('hide');
        firstLink.classList.remove('hide');
        overlay.classList.add('show');
    }

   
});

secondSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    secondLink.classList.remove('hide');
    overlay.classList.add('show');
});

thirdSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    thirdLink.classList.remove('hide');
    overlay.classList.add('show');
});

fourthSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    fourthLink.classList.remove('hide');
    overlay.classList.add('show');
});

fiveSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    fiveLink.classList.remove('hide');
    overlay.classList.add('show');
});

sixSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    sixLink.classList.remove('hide');
    overlay.classList.add('show');
});

sevenSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    sevenLink.classList.remove('hide');
    overlay.classList.add('show');
});

eightSearch.addEventListener('click', () => {
    desktopNav.classList.add('hide');
    eightLink.classList.remove('hide');
    overlay.classList.add('show');
});



closeButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    searchContainer.classList.add('hide');
    overlay.classList.remove('show');
});

firstCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    firstLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

secondCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    secondLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});
thirdCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    thirdLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

fourthCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    fourthLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

fiveCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    fiveLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

sixCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    sixLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

sevenCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    sevenLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});

eightCloseButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    eightLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});



overlay.addEventListener('click', () => {
    desktopNav.classList.remove('hide');
    searchContainer.classList.add('hide');
    firstLinkClass.classList.add('hide');
    secondLinkClass.classList.add('hide');
    thirdLinkClass.classList.add('hide');
    fourthLinkClass.classList.add('hide');
    fiveLinkClass.classList.add('hide'); 
    sixLinkClass.classList.add('hide');
    sevenLinkClass.classList.add('hide');
    eightLinkClass.classList.add('hide');
    overlay.classList.remove('show');
});


// code for Match-media
var x = window.matchMedia("(max-width: 768px)")


// Mobile Version
const menuIconContainer = document.querySelector("nav .menu-icon-container");

const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active")
});

const searchBar = document.querySelector('.mobile-search-container .search-bar');

const mobileSearchContainer = document.querySelector(".nav-container .mobile-search-container")

const firstsearchBar = document.querySelector('.firstmobile-search-container .search-bar')


const nav = document.querySelector(".nav-container nav");

const searchInput = document.querySelector(".mobile-search-container input");

const firstsearchInput = document.querySelector('.firstmobile-search-container input')


const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

const firstCancelBtn = document.querySelector(".firstmobile-search-container .cancel-btn");

const firstcancelBtn = document.querySelector(".firstmobile-search-container .cancel-btn")

const firstmobileSearch = document.querySelector('.firstmobile-search-container')


searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
});



cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove('active');
    nav.classList.remove('move-up');
    desktopNav.classList.remove('move-down');
    desktopNav.classList.remove('hide');
});

firstCancelBtn.addEventListener("click", () => {
    mobileSearchContainer.classList.remove('hide')
    firstsearchBar.classList.remove("active");
    firstmobileSearch.classList.add('hide')
    nav.classList.remove('move-up');
    desktopNav.classList.remove('move-down');
    desktopNav.classList.remove('hide');
    
});