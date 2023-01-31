

// SCROLL REVEAL

window.sr = ScrollReveal({
    origin: 'top',
    delay: 200,
    distance: '120px',
    easing: 'ease-in-out',
  })

sr.reveal('.header');
sr.reveal('.home');
sr.reveal('.section-title');
sr.reveal('.about');
sr.reveal('.work');
sr.reveal('.education');
sr.reveal('.work-detail');
sr.reveal('.contact');
sr.reveal('.g-img');
sr.reveal('form');
sr.reveal('.footer');
sr.reveal('.work-detain-info');



// ScrollReveal().reveal('.');
// ScrollReveal().reveal('.');



/* TOGGLE COVER PIC */
//let els = document.querySelectorAll('.gallery-img-container img')
//console.log(els.length)
// let len = document.querySelector('.cover-cont').offsetWidth

// function getRandomItem(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const item = arr[randomIndex]
//     return item;
// }

// a1 = ['c1', 'c2']
// a2 = []

// function choosePhoto() {
//     if (a1.length == 0) {
//         a1 = a2
//         a2 = []
//     }
//     rndValue = getRandomItem(a1)
//     a1 = a1.filter(item => item !== rndValue)
//     a2.push(rndValue)
//     return 'pic/cover/' + rndValue + '.jpg'
// }

// x = 0
// let changeImages = setInterval(() => {
//     if (x == 0) {
//         x = 300
//         els[1].src = choosePhoto()
//     } else {
//         x = 0
//         els[0].src = choosePhoto()
//     }
//     for (el of els) {
//         el.style.transform = `translate(-` + x + `px,0px)`;
//     }
// }, 1500)




  
  