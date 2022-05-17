import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';


const scrollLeft = new marquee(document.getElementById('marqueeLeft'), {
  direction: 'left',
});

const scrollRight = new marquee(document.getElementById('marqueeRight'), {
  direction: 'right',
});