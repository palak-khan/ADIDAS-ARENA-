const scroller = new LocomotiveScroll({
  el: document.querySelector('.content'),
  smooth: true
})
document.addEventListener("DOMContentLoaded", function () {

  var elementsToAnimate = document.querySelectorAll("h1, h5, h6, p");


  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 1 }
  );


  elementsToAnimate.forEach(function (element) {
    observer.observe(element);
  });
});
function loaderAnimation() {
  var tl = gsap.timeline();

  tl
  .to(".content", {
    opacity: 0, 
    duration: 2, 
    ease: "power2.inOut"

  })
  .to("#myVideo", {
    height: "0",
    top: 0,
    duration: 2,
    delay: 6,
    ease: Circ.easeInOut,
  })
   
    .to("#loader", {
      height: 0,
      duration: 2,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      bottom: 0,
      duration: 2,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      bottom: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
    
    })
   
    .to(".content", {
      opacity: 1, 
  duration: 1, 
  delay: 4,

  ease: "power2.inOut"
       
       });
}
loaderAnimation();



  var card3 = document.querySelector("#card3")
  var cursor = document.querySelector(".cursor")
card3.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x+"px"
  cursor.style.top = dets.y+"px"

})


  