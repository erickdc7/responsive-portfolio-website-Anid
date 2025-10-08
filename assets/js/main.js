/*=============== HOME SPLIT TEXT ===============*/
import { animate, splitText, stagger } from 'animejs';

const { chars: chars1 } = splitText('.home__profession-1', { chars: true, });
const { chars: chars2 } = splitText('.home__profession-2', { chars: true, });

animate(chars1, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 750, ease: 'in(3)' }
    ],
    duration: 750,
    ease: 'out(3)',
    delay: stagger(50),
    loop: true,
});

/*=============== SWIPER PROJECTS ===============*/


/*=============== WORK TABS ===============*/


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
