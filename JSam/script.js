// Animation for Slogan end Languages
anime({
    targets: '#scrDown',
    color: 'rgba(255, 255, 255, 0.3',
    translateY: 20,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 1200,
});
anime({
    targets: '#scrDown1',
    color: 'rgba(255, 255, 255, 0.3',
    translateY: 20,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 1200,
});

// Home page, section one
// For languages div
let languages = document.querySelector("#languages");
let languagesLi = document.querySelectorAll("#languages li");
let languagesPlaceClickI = document.querySelector("#languagesPlaceClick i");
let languagesClick = document.querySelector("#languagesClick");
let languagesClickLi = document.querySelectorAll("#languagesClick li");
let container = document.querySelector("#container");
let isOpen = true;
languagesPlaceClickI.addEventListener("click", ()=>{
    if (isOpen) {
        languagesClick.style.display = "flex";
        isOpen = false;
    }else{
        languagesClick.style.display = "none";
        isOpen = true;
    }
})
languagesLi.forEach(item =>{
    item.addEventListener("click",()=>{
        languages.style.display = "none";
    } )
})
languagesClickLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        languagesClick.style.display = "none";
    })
})
// For burger menu
let forMenu = document.querySelector("#forMenu");
let burgerMenu = document.querySelector("#burgerMenu");
let navCloseI = document.querySelector("#navClose i");
let burgerIconI = document.querySelector("#burgerIcon i");

burgerIconI.addEventListener("click", ()=>{
    forMenu.style.display = "flex";
    burgerMenu.style.right = "0";
    burgerMenu.setAttribute("class", "animate__animated animate__fadeInRight");
})
navCloseI.addEventListener("click", ()=>{
    burgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight")
    setTimeout(()=>{
        forMenu.style.display = "none";
    },500);
})
//Secton Two, Services Javascript
//on Click Services
let serviceContainer = document.querySelector("#servContainer");
let service = document.querySelector("#homeNav li:nth-child(2)");
let serviceLi = document.querySelector("#servContainer #homeNav li:nth-child(2)");
// Service Burger Menu
let serviceBurgerIconI = document.querySelector("#servContainer #burgerIcon i");
let serviceForMenu = document.querySelector("#servContainer #forMenu");
let serviceBurgerMenu = document.querySelector("#servContainer #burgerMenu");
let serviceNavClose = document.querySelector("#servContainer #navClose i");
serviceBurgerIconI.addEventListener("click", ()=>{
    serviceForMenu.style.display = "flex";
    serviceBurgerMenu.style.right = "0";
    serviceBurgerMenu.setAttribute("class", "animate__animated animate__fadeInRight");
});
serviceNavClose.addEventListener("click", ()=>{
    serviceBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        serviceForMenu.style.display = "none";
    },500);
});
//Services section, languages on click
let serviceLanguages = document.querySelector("#servContainer #languages");
let serviceLanguagesLi = document.querySelectorAll("#servContainer #languages li");
let serviceLanguagesPlaceClickI = document.querySelector("#servContainer #languagesPlaceClick i");
let serviceLanguagesClick = document.querySelector("#servContainer #languagesClick");
let serviceLanguagesClickLi = document.querySelectorAll("#servContainer #languagesClick li");
serviceLanguagesPlaceClickI.addEventListener("click", ()=>{
    if (isOpen) {
        serviceLanguagesClick.style.display = "flex";
        isOpen = false;
    }else{
        serviceLanguagesClick.style.display = "none";
        isOpen = true;
    }
});
serviceLanguagesLi.forEach(item =>{
    item.addEventListener("click",()=>{
        serviceLanguages.style.display = "none";
    } )
});
serviceLanguagesClickLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        serviceLanguagesClick.style.display = "none";
    })
})
// Section Three, About us Javascript
// On click About Us
let abUsContainer = document.querySelector("#abUsContainer");
let aboutUs = document.querySelector("#homeNav li:nth-child(3)");
let aboutLi = document.querySelector("#abUsContainer #homeNav li:nth-child(3)");
// About us Burger Menu
let abUsBurgerIconI = document.querySelector("#abUsContainer #burgerIcon i");
let abUsForMenu = document.querySelector("#abUsContainer #forMenu");
let abUsBurgerMenu = document.querySelector("#abUsContainer #burgerMenu");
let abUsNavClose = document.querySelector("#abUsContainer #navClose i");
abUsBurgerIconI.addEventListener("click", ()=>{
    abUsForMenu.style.display = "flex";
    abUsBurgerMenu.style.right = "0";
    abUsBurgerMenu.setAttribute("class", "animate__animated animate__fadeInRight");
});
abUsNavClose.addEventListener("click", ()=>{
    abUsBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        abUsForMenu.style.display = "none";
    },500);
});

//About us section, Languages on click
let abUslanguages = document.querySelector("#abUsContainer #languages");
let abUslanguagesLi = document.querySelectorAll("#abUsContainer #languages li");
let abUslanguagesPlaceClickI = document.querySelector("#abUsContainer #languagesPlaceClick i");
let abUslanguagesClick = document.querySelector("#abUsContainer #languagesClick");
let abUslanguagesClickLi = document.querySelectorAll("#abUsContainer #languagesClick li");
abUslanguagesPlaceClickI.addEventListener("click", ()=>{
    if (isOpen) {
        abUslanguagesClick.style.display = "flex";
        isOpen = false;
    }else{
        abUslanguagesClick.style.display = "none";
        isOpen = true;
    }
});
abUslanguagesLi.forEach(item =>{
    item.addEventListener("click",()=>{
        abUslanguages.style.display = "none";
    } );
});
abUslanguagesClickLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        abUslanguagesClick.style.display = "none";
    });
});

// Section Four Contacts JavaScript
//On click Contacts
let contContainer = document.querySelector("#contContainer");
let cont =  document.querySelector("#homeNav li:nth-child(4)");
let contLi = document.querySelector("#contContainer #homeNav li:nth-child(4)");
//Contacts burger menu
let contBurgerIconI = document.querySelector("#contContainer #burgerIcon i");
let contForMenu = document.querySelector("#contContainer #forMenu");
let contBurgerMenu = document.querySelector("#contContainer #burgerMenu");
let contNavClose = document.querySelector("#contContainer #navClose i");
contBurgerIconI.addEventListener("click", ()=>{
    contForMenu.style.display = "flex";
    contBurgerMenu.style.right = "0";
    contBurgerMenu.setAttribute("class", "animate__animated animate__fadeInRight");
});
contNavClose.addEventListener("click", ()=>{
    contBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        contForMenu.style.display = "none";
    },500);
});
// Contacts section, languages on click
let contlanguages = document.querySelector("#contContainer #languages");
let contlanguagesLi = document.querySelectorAll("#contContainer #languages li");
let contlanguagesPlaceClickI = document.querySelector("#contContainer #languagesPlaceClick i");
let contlanguagesClick = document.querySelector("#contContainer #languagesClick");
let contlanguagesClickLi = document.querySelectorAll("#contContainer #languagesClick li");
contlanguagesPlaceClickI.addEventListener("click", ()=>{
    if (isOpen) {
        contlanguagesClick.style.display = "flex";
        isOpen = false;
    }else{
        contlanguagesClick.style.display = "none";
        isOpen = true;
    }
});
contlanguagesLi.forEach(item =>{
    item.addEventListener("click",()=>{
        contlanguages.style.display = "none";
    } );
});
contlanguagesClickLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        contlanguagesClick.style.display = "none";
    });
});



//Menu Items on click
// About us
let serviceHome = document.querySelector("#servContainer #homeNav li:nth-child(1)");
let serviceAboutUs = document.querySelector("#servContainer #homeNav li:nth-child(3)");
let serviceCont = document.querySelector("#servContainer #homeNav li:nth-child(4)");
let abUsHome = document.querySelector("#abUsContainer #homeNav li:nth-child(1)");
let abUsService = document.querySelector("#abUsContainer #homeNav li:nth-child(2)");
let abUsCont = document.querySelector("#abUsContainer #homeNav li:nth-child(4)");
let contHome = document.querySelector("#contContainer #homeNav li:nth-child(1)");
let contService = document.querySelector("#contContainer #homeNav li:nth-child(2)");
let contAbUs = document.querySelector("#contContainer #homeNav li:nth-child(3)");
service.addEventListener("click", ()=>{
    container.style.display = "none";
    serviceContainer.style.display = "flex";
    serviceLi.setAttribute("class", "active");
});
serviceHome.addEventListener("click", ()=>{
    serviceContainer.style.display = "none";
    container.style.display = "flex";
});
serviceAboutUs.addEventListener("click", ()=>{
    serviceContainer.style.display = "none";
    abUsContainer.style.display = "flex";
    aboutLi.setAttribute("class", "active");
});
serviceCont.addEventListener("click", ()=>{
    serviceContainer.style.display = "none";
    contContainer.style.display = "flex";
    contLi.setAttribute("class", "active");
});
aboutUs.addEventListener("click", ()=>{
    container.style.display = "none";
    abUsContainer.style.display = "flex";
    aboutLi.setAttribute("class", "active");
});
abUsHome.addEventListener("click", ()=>{
    abUsContainer.style.display = "none";
    container.style.display = "flex";
});
abUsService.addEventListener("click", ()=>{
    abUsContainer.style.display = "none";
    serviceContainer.style.display = "flex";
    serviceLi.setAttribute("class", "active");
});
abUsCont.addEventListener("click", ()=>{
    abUsContainer.style.display = "none";
    contContainer.style.display = "flex";
    contLi.setAttribute("class", "active");
})
cont.addEventListener("click", ()=>{
    container.style.display = "none";
    contContainer.style.display = "flex";
    contLi.setAttribute("class", "active");
});
contHome.addEventListener("click", ()=>{
    contContainer.style.display = "none";
    container.style.display = "flex";
});
contService.addEventListener("click", ()=>{
    contContainer.style.display = "none";
    serviceContainer.style.display = "flex";
    serviceLi.setAttribute("class", "active");
});
contAbUs.addEventListener("click", ()=>{
    contContainer.style.display = "none";
    abUsContainer.style.display = "flex";
    aboutLi.setAttribute("class", "active");
});


//Burger Menu Items on click
//About us
let brgMenuService = document.querySelector("#container #menuUl li:nth-child(2)");
let brgMenuAbout = document.querySelector("#container #menuUl li:nth-child(3)");
let brgMenuCont = document.querySelector("#container #menuUl li:nth-child(4)");
let servBrgMenuHome = document.querySelector("#servContainer #menuUl li:nth-child(1)");
let servBrgMenuService = document.querySelector("#servContainer #menuUl li:nth-child(2)");
let servBrgMenuAbout = document.querySelector("#servContainer #menuUl li:nth-child(3)");
let servBrgMenuCont = document.querySelector("#servContainer #menuUl li:nth-child(4)");
let abBrgMenuHome = document.querySelector("#abUsContainer #menuUl li:nth-child(1)");
let abBrgMenuService = document.querySelector("#abUsContainer #menuUl li:nth-child(2)")
let abBrgMenuAbout = document.querySelector("#abUsContainer #menuUl li:nth-child(3)");
let abBrgMenuCont = document.querySelector("#abUsContainer #menuUl li:nth-child(4)");
let contBrgMenuHome = document.querySelector("#contContainer #menuUl li:nth-child(1)");
let contBrgMenuService = document.querySelector("#contContainer #menuUl li:nth-child(2)");
let contBrgMenuAbout = document.querySelector("#contContainer #menuUl li:nth-child(3)");
let contBrgMenuCont = document.querySelector("#contContainer #menuUl li:nth-child(4)");

brgMenuService.addEventListener("click", ()=>{
    container.style.display = "none";
    serviceContainer.style.display = "flex";
    servBrgMenuService.setAttribute("class", "brgActive");
    burgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        forMenu.style.display = "none";
    },500);
});
brgMenuAbout.addEventListener("click", ()=>{
    container.style.display = "none";
    abUsContainer.style.display = "flex";
    abBrgMenuAbout.setAttribute("class", "brgActive");
    burgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        forMenu.style.display = "none";
    },500);
});
brgMenuCont.addEventListener("click", ()=>{
    container.style.display = "none";
    contContainer.style.display = "flex";
    contBrgMenuCont.setAttribute("class", "brgActive");
    burgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        forMenu.style.display = "none";
    },500);
})
servBrgMenuHome.addEventListener("click", ()=>{
    container.style.display = "flex";
    serviceContainer.style.display = "none";
    serviceBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        serviceForMenu.style.display = "none";
    },500);
});
servBrgMenuAbout.addEventListener("click", ()=>{
    abUsContainer.style.display = "flex";
    serviceContainer.style.display = "none";
    abBrgMenuAbout.setAttribute("class", "brgActive");
    serviceBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        serviceForMenu.style.display = "none";
    },500);
});
servBrgMenuCont.addEventListener("click", ()=>{
    contContainer.style.display = "flex";
    serviceContainer.style.display = "none";
    contBrgMenuCont.setAttribute("class", "brgActive");
    serviceBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        serviceForMenu.style.display = "none";
    },500);
});
abBrgMenuHome.addEventListener("click", ()=>{

    container.style.display = "flex";
    abUsContainer.style.display = "none";
    abUsBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        abUsForMenu.style.display = "none";
    },500);
});
abBrgMenuService.addEventListener("click", ()=>{
    serviceContainer.style.display = "flex";
    abUsContainer.style.display = "none";
    servBrgMenuService.setAttribute("class", "brgActive");
    abUsBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        abUsForMenu.style.display = "none";
    },500);
});
abBrgMenuCont.addEventListener("click", ()=>{
    contContainer.style.display = "flex";
    abUsContainer.style.display = "none";
    contBrgMenuCont.setAttribute("class", "brgActive");
    abUsBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        abUsForMenu.style.display = "none";
    },500);
});
contBrgMenuHome.addEventListener("click", ()=>{
    container.style.display = "flex";
    contContainer.style.display = "none";
    contBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        contForMenu.style.display = "none";
    },500);
});
contBrgMenuService.addEventListener("click", ()=>{
    serviceContainer.style.display = "flex";
    contContainer.style.display = "none";
    servBrgMenuService.setAttribute("class", "brgActive");
    contBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        contForMenu.style.display = "none";
    },500);
});
contBrgMenuAbout.addEventListener("click", ()=>{
    abUsContainer.style.display = "flex";
    contContainer.style.display = "none";
    abBrgMenuAbout.setAttribute("class", "brgActive");
    contBurgerMenu.setAttribute("class", "animate__animated animate__fadeOutRight");
    setTimeout(()=>{
        contForMenu.style.display = "none";
    },500);
});