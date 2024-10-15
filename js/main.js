const video = document.querySelector("video");
const userName = document.querySelector("[name = 'username']");
const userMail = document.querySelector("[name = 'email']");
const userNumber = document.querySelector("[name = 'number']");
const arabicBtn = document.querySelector("#arabic");
const englishBtn = document.querySelector("#english");
document.querySelector(".fa-pause").style.display = "none";

// FORM VALIDATION
document.querySelector("form").onsubmit = function(e) {
    let userValid = false;
    let emailValid = false;
    let numberValid = false;
    if(userName.value !== ""){
        userValid = true;
    }
    if(userMail.value !== ""){
        emailValid = true;
    }
    if(userNumber.value !== ""){
        numberValid = true;
    }

    if (userValid === false || emailValid === false || numberValid === false){
        e.preventDefault();
    }
};
//LANGUAGE
class Translator {
    constructor(){
        document.getElementById("english").addEventListener("click", () => {
            this.translate("english");
        })
        document.getElementById("arabic").addEventListener("click", () => {
            this.translate("arabic");
        })
        this.translate(localStorage.getItem("Language"));
    }
    translate(lang){
        if (lang == "english"){
            document.querySelector("html").setAttribute("lang", "en");
            document.querySelector("html").removeAttribute("dir");
            document.querySelector("[href='css/style.css']").setAttribute("href", "css/main.css");
            document.querySelector("title").innerHTML = "AROYA CRUISES";
            document.getElementById("hero-heading").innerHTML = " ";
            document.getElementById("playBtn").style.opacity = "0";
            document.getElementById("hero-bottom").innerHTML = "Discover More";
            document.getElementById("about-heading").innerHTML = `aroya cruises <div class="section-wave-img position-absolute"><img class="img-fluid" src="img/Group 132.svg" alt="wave"></div>
            `;
            document.getElementById("about-parag").innerHTML = "AROYA Cruises, The Kingdom’s first ever Cruise Line, is embarking on a voyage like no other. Inspired by the beauty of the Red Sea and anchored in the timeless hospitality of Arabia, we will soon set sail on a remarkable journey that harbours eternal discovery and enriches the lives of all who join us..";
            document.getElementById("contact-heading").innerHTML = `be the first<br> to know
            <div class="section-wave-img position-absolute"><img class="img-fluid" src="img/Group 132.svg" alt="wave"></div>`;
            document.getElementById("contact-parag").innerHTML = "Join us to receive the latest updates about AROYA CRUISES";
 
            
            document.getElementById("full-name").innerHTML = "Full Name";
            document.getElementById("mail").innerHTML = "Email";
            document.getElementById("contact-number").innerHTML = "Contact Number";
            document.getElementById("agree").innerHTML = "Agree to terms and conditions";
            document.getElementById("must").innerHTML = "You must agree before submitting.";
            document.getElementById("submit").innerHTML = "Submit";
            document.getElementById("arabic").innerHTML = "عربي";
            
            document.getElementById("copywrite").innerHTML = "aroya cruises | &copy;2023";
        }
        else if(lang = "arabic"){
            document.querySelector("html").setAttribute("lang", "ar");
            document.querySelector("html").setAttribute("dir", "rtl");
            document.querySelector("[href='css/main.css']").setAttribute("href", "css/style.css");
            document.querySelector("title").innerHTML = "أرويا كروز";
            document.getElementById("hero-heading").innerHTML = "أمواجنا <br>عربية";
            document.getElementById("playBtn").style.opacity = "0";
            document.getElementById("hero-bottom").innerHTML = "أكتشف أكثر";
            document.getElementById("about-heading").innerHTML = `أرويا كروز
            <div class="section-wave-img position-absolute"><img class="img-fluid" src="img/Group 132.svg" alt="wave"></div>
            `;
            document.getElementById("about-parag").innerHTML = "أرويا كروزو,أول خطوط للرحلات البحريةتنطلق من المملكة العربية السعودية,تبحر قريبا بتجارب لا مثيل لها مستوحاة من سحر البحرالأحمر ,متأصلة بحفاوة كرم الضيافة العربية الخالدة في رحلة استكشافية فريدة تلهم من خلالهامن ينضم اليناززز";
            document.getElementById("contact-heading").innerHTML = `كن أول <br><span>من يعرف</span>
            <div class="section-wave-img position-absolute"><img class="img-fluid" src="img/Group 132.svg" alt="wave"></div>`;
            document.getElementById("contact-parag").innerHTML = "انضموا الينا لتصل لكم أخر المستجدات المتعلقة بأوريا كروز.";
            document.getElementById("full-name").innerHTML = "الاسم الكامل";
            document.getElementById("mail").innerHTML = "البريد الالكتروني";
            document.getElementById("contact-number").innerHTML = "رقم التواصل";
            document.getElementById("agree").innerHTML = " أوافق علي استقبال أخر الأخبار والمستجدات";
            document.getElementById("must").innerHTML = "يجب أن توافق قبل الارسال";
            document.getElementById("submit").innerHTML = "أرسل";
           
            document.getElementById("copywrite").innerHTML = "أرويا كروز | &copy;2023";
        }
        localStorage.setItem("Language", lang)
    }
}
window.onload = new Translator();

// PLAY HERO-VIDEO
function play(){
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "noe"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
video.addEventListener("timeupdate", () => {
    if(video.ended){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "none"
    }
})

