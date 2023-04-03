gsap.set('.text-1,.text-2,.cta-button', {
    y: 50,
    opacity: 0
})
gsap.set('.hero-image img', {
    x: 100,
    opacity: 0
})
gsap.set('.bg-image', {
    opacity: 0
})
gsap.set('.rotating_text img', {
    transformOrigin: '50% 50%',
    rotate: 0
})

let animation_timeline = gsap.timeline({ repeat: -1 })
    .to('.bg-image', {
        delay: 0.3,
        duration: 0.6,
        opacity: 1
    })
    .to('.hero-image img', {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: 'power1.inOut'
    })
    .to('.text-1,.text-2,.cta-button', {
        duration: 0.5,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: 'power1.inOut'
    })
    .to('.rotating_text img', {
        duration: 12,
        rotate: -320,
        ease: 'power1.out'
    })
    .to('.text-1,.text-2,.cta-button', {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: {
            each: 0.3,
            from: "end"
        },
        ease: 'power1.inOut'
    })
    .to('.hero-image img', {
        duration: 0.5,
        x: 100,
        opacity: 0,
        ease: 'power1.inOut'
    })
    .to('.bg-image', {
        delay: 0.3,
        duration: 0.6,
        opacity: 0
    })
