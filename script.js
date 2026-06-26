gsap.to("h1", {
    text: "FRONTEND DEVELOPER & UI/UX-DESIGNER",
    duration: 3,
    repeat: 3,
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: true,
    delay: 2
});

AOS.init();

// Галерея-слайдер для проектов
function initGallery(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const track = slider.querySelector('.gallery-track');
  const slides = track.querySelectorAll('.gallery-slide');
  const prevBtn = slider.querySelector('.gallery-prev');
  const nextBtn = slider.querySelector('.gallery-next');
  const dotsContainer = slider.querySelector('.gallery-dots');

  let currentIndex = 0;

  // Создаём точки
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  }

  function prevSlide() {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); nextSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); prevSlide(); });

  // Клавиатурная навигация
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
  slider.setAttribute('tabindex', '0');
}

// Инициализация всех галерей
initGallery('gallery-weproperty');
initGallery('gallery-10x');
initGallery('gallery-monarch');

// Lightbox — увеличение фото при клике
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
let lightboxSlider = null; // текущий слайдер, из которого открыт lightbox

// Открытие lightbox по клику на активный (видимый) слайд
// Используем делегирование на всех .gallery-track
document.querySelectorAll('.gallery-track').forEach(track => {
  track.addEventListener('click', function(e) {
    const slide = e.target.closest('.gallery-slide');
    if (!slide || !slide.classList.contains('active')) return;
    e.stopPropagation();
    lightboxSlider = slide.closest('.gallery-slider');
    lightboxImg.src = slide.src;
    lightbox.classList.add('active');
  });
});



// Навигация внутри lightbox
function lightboxNavigate(direction) {
  if (!lightboxSlider) return;
  const slides = lightboxSlider.querySelectorAll('.gallery-slide');
  const currentActive = lightboxSlider.querySelector('.gallery-slide.active');
  let currentIndex = Array.from(slides).indexOf(currentActive);
  let newIndex;
  if (direction === 'next') {
    newIndex = (currentIndex + 1) % slides.length;
  } else {
    newIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
  // Переключаем слайд в галерее
  slides.forEach(s => s.classList.remove('active'));
  slides[newIndex].classList.add('active');
  // Обновляем dots
  const dots = lightboxSlider.querySelectorAll('.gallery-dots span');
  if (dots.length) {
    dots.forEach(d => d.classList.remove('active'));
    dots[newIndex].classList.add('active');
  }
  // Обновляем lightbox
  lightboxImg.src = slides[newIndex].src;
}

// Навигация по кнопкам в lightbox
document.getElementById('lightboxPrev').addEventListener('click', function(e) {
  e.stopPropagation();
  lightboxNavigate('prev');
});
document.getElementById('lightboxNext').addEventListener('click', function(e) {
  e.stopPropagation();
  lightboxNavigate('next');
});

// Закрытие lightbox по клику на overlay (но не по клику на само изображение или кнопки)
lightbox.addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
    lightboxSlider = null;
  }
});


// Закрытие по Escape
document.addEventListener('keydown', function(e) {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
    lightboxSlider = null;
  }
  if (e.key === 'ArrowRight') {
    lightboxNavigate('next');
  }
  if (e.key === 'ArrowLeft') {
    lightboxNavigate('prev');
  }
});


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
