// const prevButton = document.getElementById('prev')
// const nextButton = document.getElementById('next')
// const items = document.querySelectorAll('.item')
// const dots = document.querySelectorAll('.dot')
// const numberIndicator = document.querySelector('.numbers')
// const list = document.querySelector('.list')


// let active = 0;
// const total = items.length
// let timer;


// function update(direction) {

//     document.querySelector('.item.active').classList.remove('active')
//     document.querySelector('.dot.active').classList.remove('active')


//     if (direction > 0) {
//         active = active + 1
//         if (active === total) {
//             active = 0
//         }
//     }

//     else if (direction < 0) {
//         active = active - 1

//         if (active < 0) {
//             active = total - 1
//         }

//     }

//     items[active].classList.add('active')
//     dots[active].classList.add('active')

//     numberIndicator.textContent = String(active + 1).padStart(2, '0')
// }
// clearInterval(timer)
// timer = setInterval(() => {
//     update(1)
// }, 5000);



// prevButton.addEventListener('click', () => {
//     update(-1)

// })

// nextButton.addEventListener('click', () => {
//     update(1)
// })

let current = 0;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

function showSlide(index, direction) {
  const currentItem = items[current];
  const nextItem = items[index];

  currentItem.classList.remove('active');
  currentItem.style.transform = `translateX(${direction > 0 ? '-100%' : '100%'})`; // sai pro lado oposto
  currentItem.style.opacity = 0;

  nextItem.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`; // entra do lado correto
  nextItem.style.opacity = 0;

  // Força o navegador a aplicar o estilo antes de animar
  requestAnimationFrame(() => {
    nextItem.classList.add('active');
    nextItem.style.transform = 'translateX(0)';
    nextItem.style.opacity = 1;
  });

  dots[current].classList.remove('active');
  dots[index].classList.add('active');
  current = index;
}

document.getElementById('next').addEventListener('click', () => {
  let next = (current + 1) % items.length;
  showSlide(next, 1); // direção direita
});

document.getElementById('prev').addEventListener('click', () => {
  let prev = (current - 1 + items.length) % items.length;
  showSlide(prev, -1); // direção esquerda
});
