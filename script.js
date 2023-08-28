function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  loco();

var main1 = document.querySelector("#page2");
var main2 = document.querySelector("#page3");
var image1 =document.querySelector("#page2>#image1>img")
var image2 =document.querySelector("#page2>#image2>img")
var image3 =document.querySelector("#page3>#hand")
var main = document.querySelector(".mainhead");
var image = document.querySelector(".mainhead>img");

main1.addEventListener("mousemove",function(dets1) {
  image1.style.top = 1-dets1.y*0.12 + "px";
  image1.style.left = 1-dets1.x*0.12/3 + "px";
  image2.style.top = 1-dets1.y*0.12/4-500 + "px";
  image2.style.left = 1-dets1.x*0.12+200+ "px";
    console.log(dets1);
});

main2.addEventListener("mousemove",function(dets2) {
  image3.style.top = 1-dets2.y*0.5+370 + "px";
  console.log(dets2);
  
});
const menuToggle = document.getElementById('bar');
const menuList = document.getElementById('menuList');

if(window.innerWidth>820){
  main.addEventListener("mousemove",function(dets) {
      image.style.top = 1-dets.y*0.10 + "px";
      image.style.left = 200-dets.x*0.10 + "px";
  });

}
menuToggle.addEventListener("click", () => {
  if (menuList.style.display === "none") {
      menuList.style.display = "block";
  }
   else {
      menuList.style.display = "none";
  }
});

  
  

