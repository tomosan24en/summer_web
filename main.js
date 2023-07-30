gsap.fromTo(
    ".mask",
    {
        autoAlpha: 0,
        width: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    {
        autoAlpha: 1,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        scrollTrigger: {
            trigger: ".trigger",
            start: "top center",
            end: "bottom center",
            scrub: true,
            toggleActions: "play pause resume reset",
            markers: true,
        }
    }
);