// site load animations
gsap.from(".hero", {duration: 1, x:-100, opacity: 0.01, scale: 0.8,});
gsap.from(".site-headline", {duration: 2, x: 0, opacity: 1, scale: 0.98 });
gsap.from(".the-name", {duration: 1.5, x:0, y:-100,  ease: "back.inOut(1.7)"});
gsap.from(".the-name", {duration: 1, opacity: 0.1, delay: 0.5,})
//headline breathing loop
gsap.to(".site-headline", {duration: 2, opacity: .95, scale: 0.92, repeat: -1,ease: "power1.inOut", yoyo: true, yoyoEase: true});

TweenMax.to("html", 1, {"--myColor":"orange", yoyo:true, repeat:20});

window.onscroll = () => { 
    TweenMax.to("html", 1, {"--myText":"1",})
    
}


