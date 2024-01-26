var crsr = document.querySelector("#cursor");
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
})
var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener('mousemove', function (dets) {
    crsrblur.style.left = dets.x - 250 + "px";
    crsrblur.style.top = dets.y - 150 + "px";
})
gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.transition = "ease all 0.5s"
    })
    //console.log(elem);
})
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})
document.addEventListener("DOMContentLoaded", function () {
    // Define the animation
    gsap.from("#about img, #desc p", {
        y: 100,
        opacity: 0,
        duration: 1, // Animation duration in seconds
        // stagger: 1, // Stagger the animations for multiple elements
        scrollTrigger: {
            trigger: "#desc",
            scroller: "body",
            start: "top 60%",
            end: "top 55%",
            scrub: 1
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Define the animation
    gsap.from("#card-container", {
        scale: 1,
        opacity: 0,
        duration: 1, // Animation duration in seconds
        stagger: 1, // Stagger the animations for multiple elements
        scrollTrigger: {
            trigger: "#card-container",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 1
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#colon1", {
        y: -70,
        x: -70,
        scrollTrigger: {
            trigger: "#colon1",
            scroller: "body",
            start: "top 65%",
            end: "top 55%",
            scrub: 4
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#colon2", {
        y: -70,
        x: -70,
        scrollTrigger: {
            trigger: "#colon2",
            scroller: "body",
            start: "top 65%",
            end: "top 45%"
        }
    })
})
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".page4 h3", {
        y: 100,
        scrollTrigger: {
            trigger: ".page4 h3",
            scroller: "body",
            start: "top 75%",
            end: "top -65%"
        }
    })
})
//var self = document.getElementById(".page4 h3");
//var self1 = document.getElementById(".page4 #d1");

//document.addEventListener("mouseenter", function () {
//  self.style["-webkit-text-stroke: 2px red;"];
//})