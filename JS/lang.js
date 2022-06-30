let home = document.querySelector("#lng-home");
let services = document.querySelector("#lng-service");
let about = document.querySelector("#lng-about");
let contacts = document.querySelector("#lng-contact");
let eng = document.querySelector("#eng");
let am = document.querySelector("#am");
let slogan = document.querySelector("#lng-slogan");
let info = document.querySelector("#lng-info");
let menuLi = document.querySelectorAll("#abUsContainer #homeNav ul li");

am.addEventListener("click", ()=>{
    home.textContent = languagesArr.arm.home;
    services.textContent = languagesArr.arm.services;
    about.textContent = languagesArr.arm.about;
    contacts.textContent = languagesArr.arm.contacts;
    slogan.textContent = languagesArr.arm.slogan;
    info.textContent = languagesArr.arm.info;
    menuLi.forEach(elem =>{
        elem.style.fontSize = "26px";
    })


})
eng.addEventListener("click", ()=>{
    home.textContent = languagesArr.eng.home;
    services.textContent = languagesArr.eng.services;
    about.textContent = languagesArr.eng.about;
    contacts.textContent = languagesArr.eng.contacts;
    slogan.textContent = languagesArr.eng.slogan;
    info.textContent = languagesArr.eng.info;
    menuLi.forEach(elem =>{
        elem.style.fontSize = "32px";
    })
})



let languagesArr = {
    "eng" : {
        "home" : "Home",
        "services" : "Services",
        "about" : "About Us",
        "contacts" : "Contacts",
        "slogan" : "About Us",
        "info" : "Coming soon",
    },
    "arm" : {
        "home" : "Հիմնական",
        "services" : "Ծառայություններ",
        "about" : "Մեր մասին",
        "contacts" : "Կոնտակտներ",
        "slogan" : "Մեր մասին",
        "info" : "Շուտով",
    }
}