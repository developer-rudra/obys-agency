function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Proxy methods for ScrollTrigger to work with Locomotive
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.5,
        delay: 0.5
    });

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;

            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 34);
        }
    });

    tl.to(".line h2", {
        animationName: "animee",
        opacity: 0
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2
    });

    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        duration: 0.6,
        ease: Power4
    });

    tl.to("#loader", {
        display: "none"
    });

    tl.from("#nav", {
        opacity: 0
    });

    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 140,
        stagger: 0.2
    });
}

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        });
    });

    Shery.makeMagnet("#nav-part2 h4");




    var videoContainer = document.querySelector("#video-container")
    var video = document.querySelector("#video-container video")
    videoContainer.addEventListener("mouseenter", function(){
        videoContainer.addEventListener("mousemove", function(dets){
            gsap.to("#video-cursor", {
                left:dets.x - 580,
                y:dets.y - 350
            })
        })
    });
    videoContainer.addEventListener("click", function(){
        video.play()
        video.style.opacity = 1
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
    })



}
function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style:5,
        // debug:true
        gooey:true
    })
}

// Run animations
sheryAnimation()
loadingAnimation()
cursorAnimation()
locomotiveAnimation()
