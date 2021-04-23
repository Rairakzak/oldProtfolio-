if(window.innerWidth>595){

var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".slider", 1, {scale:3, x:-200,y:-300,opacity:0, ease:Linear.easeNone});

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '#intro',
triggerHook:0,
duration: '100%'
})
.setTween(tween)
.setPin('.header')
// .addIndicators()
.addTo(controller)



// parah info
var tween = new TimelineMax;
tween.from(".info-para", 1, 
{opacity:0, ease:Linear.easeNone},
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.info-para',
triggerHook: 1,
duration: '80%'
})
.setTween(tween)
// .setPin('info')
// .addIndicators()
.addTo(controller)
;



// prevoius exoerience header


// previous EXP LINES
var s = new TimelineMax
s.to(".ex1", 1, 

{x:2000, y:1200,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.scroll-exp-list',
triggerHook: .6,
duration: '150%'
})
.setTween(s)
// .setPin('.experience')
// .addIndicators()
.addTo(controller)
;

var s = new TimelineMax
s.to(".ex2", .5, 

{x:-300,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.scroll-exp-list',
triggerHook: .7,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')
// .addIndicators()
.addTo(controller)
;



var s = new TimelineMax
s.to(".ex3", 2, 

{x:1700, y:200,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.scroll-exp-list',
triggerHook: .5,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')

.addTo(controller)
;


var s = new TimelineMax
s.fromTo(".ex4", 1, 
{x:110,y:-140,ease:Linear.easeNone},
{x:-1800,y:500,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.scroll-exp-list',
triggerHook: .4,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')

.addTo(controller)
;
var s = new TimelineMax
s.to(".ex5", 1, 

{x:1700,y:100,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.scroll-exp-list',
triggerHook: .3,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')
// .addIndicators()
.addTo(controller)



//  project 
let proImg=document.querySelectorAll('.pro-img img');

proImg.forEach(img =>{
    var s = new TimelineMax
    s.fromTo(img, 1, 
    {y:-40,ease:Linear.easeNone},
    {y:40,ease:Linear.easeNone}
    );
    
    var pinSceneIntro = new ScrollMagic.Scene({
    triggerElement: img,
    triggerHook: .5,
    duration: '70%'
    })
    .setTween(s)
    
    // .addIndicators()
    .addTo(controller)
    
})

proIntro=document.querySelectorAll('.pro-intro');
proIntro.forEach(pro=>{
    var s = new TimelineMax
s.from(pro, 1, 

{y:100,opacity:0,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: pro,
triggerHook: 1,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')
// .addIndicators()
.addTo(controller)

})

// NAV Animation text

var s = new TimelineMax
s.to(".nav", 1, 

{opacity:0,ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: '.Joy-Sniper',
triggerHook: .5,
duration: '100%'
})
.setTween(s)
// .setPin('.experience')

.addTo(controller);
var s = new TimelineMax
s.to(".svg-name text", 1, 

{rotation:-360,transformOrigin:"center center",ease:Linear.easeNone}
);

var pinSceneIntro = new ScrollMagic.Scene({
triggerElement: 'main',
triggerHook: "onEnter",
duration: '800%'
})
.setTween(s)
// .setPin('.experience')

.addTo(controller)
;






   



}
// moouse hover images
let mouse_effect=document.querySelector('.mouse-hover');

    window.addEventListener("mousemove",cursor);

    function cursor(e){
      mouse_effect.style.left= e.pageX+"px";
      mouse_effect.style.top= e.pageY+"px";
      
    }

    let allImage=document.querySelectorAll('.mousebg');
    allImage.forEach(image=>{
        image.addEventListener('mouseover',()=>{
            mouse_effect.classList.add('cursor-grow')
            document.querySelector('.click').style.display="block";
          
            
            })
            image.addEventListener('mouseleave',()=>{
              mouse_effect.classList.remove('cursor-grow')
              document.querySelector('.click').style.display="none";
              
            })
          
    })


var sickPrimary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.text-slider',
      centerMode: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

var sickSecondary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.image-slider',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);
