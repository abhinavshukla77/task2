var tl = gsap.timeline();

tl
.from(".st",{
    stagger: .2,
    x: 30,
    opacity: 0,
    duration: 2,
    ease: 'Expo.easeInOut',
})

.from('#main h1',{
    y :30,
    opacity: 0,
    ease: 'Expo.easeInOut',
    duration:1,
    delay : 1
}, '-= 2')

// .to('#overlay',{
//     width: '100%',
//     duration:2,
//     ease : 'Expo.easeInOut'
// })
// .to('#overlay',{
//     width: '0%',
//     duration:2,
//     ease : 'Expo.easeInOut'
// })