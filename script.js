// menu lateral
function mostrarMenu() {
  document.getElementById('menu-lateral').classList.toggle('mostrar');

  const itemMenu = ['Smartphones', 'Tablet', 'Games', 'Informatica', 'Eletrodomésticos', 'Salão', 'Tv e Video', 'Smartwatches', 'Áudio', 'Smartphones', 'Tablet', 'Games', 'Informatica', 'Eletrodomésticos', 'Salão', 'Tv e Video', 'Smartwatches', 'Áudio'];

  const menu = document.getElementById('menu');

  itemMenu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item-menu';
    div.innerHTML = `<span>${item}</span><button><img src="img/iconright.png"</button>`
    menu.appendChild(div);
  })

}

function fecharMenu() {
  document.getElementById('menu-lateral').classList.remove('mostrar');
}

function buscarCep() {
  document.getElementById('card-cep').classList.toggle('aberto');

}

function fecharCep() {
  document.getElementById('card-cep').classList.remove('aberto');

}

function abrirLogin() {
  document.getElementById('overlay').classList.add('active');
}

function fecharLogin() {
  document.getElementById('overlay').classList.remove('active');
}

  //  codigo banner carrocel
let current = 0;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

function showSlide(index, direction) {
  const currentItem = items[current];
  const nextItem = items[index];

  currentItem.classList.remove('active');
  currentItem.style.transform = `translateX(${direction > 0 ? '-100%' : '100%'})`;
  currentItem.style.opacity = 0;

  nextItem.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`;
  nextItem.style.opacity = 0;


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
  showSlide(next, 1);
});

document.getElementById('prev').addEventListener('click', () => {
  let prev = (current - 1 + items.length) % items.length;
  showSlide(prev, -1);
});

//codigo carrinho compras

function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContador();
  alert(`${nome} foi adicionado ao carrinho!`);

}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  document.getElementById('contador-carrinho').textContent = carrinho.length;
}

function abrirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('itens-carrinho');

  container.innerHTML = carrinho.map((item, index) => `
    <div class="item-carrinho">
      <strong>${item.nome}</strong><br>
      R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">X</button>
    </div>
  `).join('');

  document.getElementById('carrinho').classList.add('aberto');

}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('aberto');
}

function finalizar() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const tot = document.getElementById('total');

  const total = carrinho.reduce((soma, item) => {
    const preco = parseFloat(item.preco) || 0;
    const quantidade = parseInt(item.quantidade) || 1;

    return soma + (preco * quantidade);
  }, 0);

  tot.innerHTML = `Total R$ ${total.toFixed(2)}`;



  atualizarContador();
}

const toggle = document.getElementById("menu");

const nav = document.getElementById("nav");

function limparCarrinho() {
  localStorage.removeItem('carrinho');
  atualizarContador();
  document.getElementById('itens-carrinho').innerHTML = '';
  document.getElementById('total').innerHTML = 'R$ 0,00';

}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  abrirCarrinho();
  atualizarContador();
}

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


