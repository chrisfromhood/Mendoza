import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';
// import Glide from '@glidejs/glide';

const scrollText = new marquee(document.getElementById('marqueeText'), {
  speed: 100,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true,
});


const scrollRight = new marquee(document.getElementById('marqueeRight'), {
  direction: 'right',
  speed: 100,
  gap: 0,
  delayBeforeStart: 0,
  duplicated: true,
  pauseOnHover: true,
});

const scrollLeft = new marquee(document.getElementById('marqueeLeft'), {
  speed: 100,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true,
});



const configuration = {
  type: 'carousel',
  perView: 1,
  focusAt: 'center',
  gap: 80,
  autoplay: false,
  breakpoints: {
    1023: {
      perView: 1,
    },
  },
};
new Glide('.glide', configuration).mount();
