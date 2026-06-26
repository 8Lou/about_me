gsap.to("h1", {
    text: "FRONTEND DEVELOPER",
    duration: 3,
    repeat: 3,
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: true,
    delay: 2
});

AOS.init();

particlesJS("particles-js", {
    "particles": {
        "number": { 
            "value":100,
            "density": {
                "enable":true,"value_area":600
            }
        },
        "color": {
            "value":"#fff"
        },
        "shape": {
            "type":"image",
            "stroke": {
                "width": 6,
                "color":"#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src":"assets/cherry-blossom.png",
                "width":50,
                "height":50
            }
        },
        "opacity": {
            "value":0.7,
            "random":false,
            "anim": {
                "enable":false,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size": {
            "value":15,
            "random":true,
            "anim": {
                "enable":false,
                "speed":5,
                "size_min":5,
                "sync":false
            }
        },
        "line_linked": {
            "enable":false,
            "distance":150,
            "color":"#ffffff",
            "opacity":0.6,
            "width":1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract": {
                "enable":true,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity": {
        "detect_on":"canvas",
        "events": { 
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
        "modes": {
            "grab": {
                "distance":350,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance":200,
                "size":20,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse": {
                "distance":200,
                "duration":0.5
            },
            "push": {
                "particles_nb":4
            },
            "remove": {
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
});
