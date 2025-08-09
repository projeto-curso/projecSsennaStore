// menu.js

function mostrarMenu() {
  document.getElementById('menu-lateral').classList.toggle('mostrar');
}

const itemMenu = [
  { nome: 'Smartphones', link: 'smartphones.html' },
  { nome: 'Tablet', link: 'tablet.html' },
  { nome: 'Games', link: 'games.html' },
  { nome: 'Informatica', link: 'informatica.html' },
  { nome: 'Eletrodomésticos', link: 'eletrodomesticos.html' },
  { nome: 'Salão', link: 'salao.html' },
  { nome: 'Tv e Video', link: 'tv-video.html' },
  { nome: 'Smartwatches', link: 'smartwatches.html' },
  { nome: 'Áudio', link: 'audio.html' }
];

// Espera o HTML carregar para montar o menu
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-lateral');
  if (menu) {
    itemMenu.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'item-menu';
      a.innerHTML = `
        <span>${item.nome}</span>
        <button><img src="img/iconright.png" alt=""></button>
      `;
      menu.appendChild(a);
    });
  }
});
