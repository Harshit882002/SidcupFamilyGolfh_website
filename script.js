
var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + 20 + "px";
    cursor.style.top = dets.y + "px";
    cursorBlur.style.left = dets.x - 200 + "px";
    cursorBlur.style.top = dets.y - 200 + "px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "0.1px solid white"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})



// var tl = gsap.timeline();

gsap.to("#nav",{
     backgroundColor:"black",
     height:"100px",
     duration:1,
     scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
     }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#food img , #food-para",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#food",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from("#colon1",{
   y:-80,
   x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:80,
    x:80,
     scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         start:"top 55%",
         end:"top 45%",
         scrub:3
     }
 })

 gsap.from("#page4 h1",{
    y:50,
    // duration:0.5,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
 })
