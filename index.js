
gsap.from("#loader-area", {duration: 1, opacity: 0})
gsap.from(".loader", {duration: 1, opacity: 0})



//this function changes CSS opacity for content area to make it visible

function pageVisible() {
    const ele = document.getElementById("entire-page")
    ele.style.opacity = '1'
}

window.addEventListener('load', (event) => {
    pageVisible()
    
    //fades out loader
        gsap.to(".loader", {duration: 1, opacity: 0})
        gsap.to("#loader-area", {duration: 1, opacity: 0})
        gsap.to("#loader-area h3", {duration: 1, opacity: 0})

    // site loa hero animations
        gsap.from(".hero", {duration: 1, opacity: 0.01, delay:1, scale: 0.8,});
        gsap.from(".site-headline", {duration: 2, x: 0, opacity: 1, scale: 0.98 });
        

    //emilioguarino nav animation
        gsap.from(".the-name", {duration: 1.5, x:0, y:-100,  ease: "back.inOut(1.7)"});
        gsap.from(".the-name", {duration: 1, opacity: 0.1, delay: 0.5,})
    
    //headline breathing loop
        gsap.to(".site-headline", {duration: 2, opacity: .95, scale: 0.92, repeat: -1,ease: "power1.inOut", yoyo: true, yoyoEase: true});

        TweenMax.to("html", 1, {"--myColor":"orange", yoyo:true, repeat:20});

        window.onscroll = () => { 
            TweenMax.to("html", 1, {"--myText":"1",})
            
}

});









