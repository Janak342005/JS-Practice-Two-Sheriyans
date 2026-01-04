window.addEventListener("mousemove",function(details){
    var mouseXPosition = details.clientX;

    var mouseYPosition = details.clientY;
    
    var rectA = document.querySelector("#rect");

    var windowWidht = window.innerWidth

    var windowHeight = this.window.innerHeight

    console.log(windowHeight);
    

    var xVal = gsap.utils.mapRange(0,windowWidht,100 + rectA.getBoundingClientRect().width/2,windowWidht-(100 + rectA.getBoundingClientRect().width/2),mouseXPosition)

     var yVal = gsap.utils.mapRange(0,windowHeight,50 + rectA.getBoundingClientRect().height/2,windowHeight-(50 + rectA.getBoundingClientRect().height/2),mouseYPosition)
    
    gsap.to("#rect",{
        left: xVal,
        top: yVal,
        ease: "power4.out"
    })
})