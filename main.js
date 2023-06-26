import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// 横スクロール
const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
const listEl = document.querySelector('.side-scroll-list');
gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll',
    start: 'top top',
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// gsap.fromTo('.a', 
//   {
//     scale: 1,
//   },
//   { 
//     scale: 0.1,
//     delay: 3,
//     duration: 1,
//     scrollTrigger: {
//     trigger: '.a',
//         start: 'top bottom',
//         // markers: true,
//     }
//   }
// );

// gsap.fromTo('.b', 
//   {
//     x: 0,
//   },
//   { 
//     x: 600,
//     duration: 1,
//     scrollTrigger: {
//     trigger: '.b',
//         start: 'top 90%',
//         // end: '100%',
//         // markers: true,
//     }
//   }
// );

// gsap.fromTo('.c', 
//   {
//     x: 0,
//     borderRadius: 0,
//     backgroundColor: '#a4a4eb'
//   },
//   { 
//     x: 600,
//     borderRadius: '50%',
//     backgroundColor: '#ffc0cb',
//     duration: 2,
//     rotation: 360,
//     scrollTrigger: {
//     trigger: '.c',
//         start: 'top center',
//         end: '100%',
//         scrub: true,
//         scrub: 1,
//         pin: true,
//         toggleActions: 'restart pause resume reverse',
//         markers: true,
//     }
//   }
// );

gsap.fromTo('.c', 
  {
    y: 0,
    scale: 0.3,
  },
  { 
    y: 400,
    scale: 1,
    duration: 1.2,
    ease:"power2.out",
    scrollTrigger: {
    trigger: '.c',
        start: 'top top',
        // toggleActions: "restart pause resume reverse",
        // scrub: true,
        // markers: true,
    }
  }
);


// img effect
gsap.fromTo('.bg-img01', 
  {
    scale: 1.4,
    opacity: 0,
  },
  { 
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease:"power2.out",
    scrollTrigger: {
    trigger: '.bg-wrap01',
        start: 'top center',
        // end: 'bottom top',
        scrub: true,
        scrub: 1,
    }
  }
);

gsap.fromTo('.bg-img02', 
  {
    scale: 1,
    opacity: 0,
    x:0
  },
  { 
    scale: 1.4,
    opacity: 1,
    x:200,
    duration: 1.2,
    ease:"power2.out",
    scrollTrigger: {
    trigger: '.bg-wrap02',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        scrub: 1,
    }
  }
);

gsap.fromTo('.bg-img03', 
  {
    scale: 1,
    opacity: 0,
    x:0
  },
  { 
    scale: 1.2,
    opacity: 1,
    x:200,
    duration: 1.2,
    ease:"power2.out",
    scrollTrigger: {
    trigger: '.bg-wrap03',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        scrub: 1,
    }
  }
);

gsap.fromTo('.bg-area', 
  {
    y:300
  },
  { 
    y:0,
    duration: 0.8,
    ease:"power1.out",
    scrollTrigger: {
    trigger: '.bg-area',
        start: 'top bottom',
        end: 'bottom top',
    }
  }
);

// timelineを作成
const booksTimeLine = gsap.timeline();
booksTimeLine.from(".book--first", { scale: 1.5, },{scale: 1, duration: 5, ease: 'power1.out'})
  .from(".book--second", {xPercent: 100, yPercent:-30, duration: 3.5, ease: 'power1.out'})
  .from(".book--third", {xPercent: -100, yPercent:-30, duration: 3.5, ease: 'power1.out'})
  .fromTo(".book--fourth", { opacity:0, scale: 1 },{opacity:1, scale: 20, duration: 5, ease: 'power1.out'})
 
ScrollTrigger.create({
    animation: booksTimeLine,
    trigger: ".books",
    start: "top",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
});


// 横スクロール
// const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
// const listEl = document.querySelector('.side-scroll-list');

// gsap.to(listEl, {
//   x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.side-scroll',
//     start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//     end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     invalidateOnRefresh: true,
//   },
// });