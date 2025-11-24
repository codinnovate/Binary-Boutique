const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
btn && nav && (btn.onclick = () => nav.classList.toggle('open'));


const trustees = [
    {
        name: 'Favour Ezinne John',
        email: 'ajala.abdullah@miva.edu.ng',
        image: './assets/images/trustee/14.png'
    },
    {
        name: 'Favour Ezinne John',
        email: 'Favour.john@miva.edu.ng',
        image: './assets/images/trustee/12.png'
    },
    {
        name: 'Joseph Adeyemi',
        email: 'joseph.adeyemi@miva.edu.ng',
        image: './assets/images/trustee/11.png'
    },
    {
        name: 'Omotosho Temitope',
        email: 'omotosho.temitope@miva.edu.ng',
        image: './assets/images/trustee/1.jpg'
    },
    {
        name: 'Lebura Prince',
        email: 'lebura.prince@miva.edu.ng',
        image: './assets/images/trustee/4.jpg'
    },
    {
        name: 'Hamza Yunusa',
        email: 'hamza.yunusa@miva.edu.ng',
        image: './assets/images/trustee/2.jpg'
    },
    {
        name: 'Solademi oyewole lateef',
        email: 'solademi.oyewole@miva.edu.ng',
        image: './assets/images/trustee/3.jpg'
    },
    {
        name: 'Samuel Bulus',
        email: 'Samuel.Bulus@miva.edu.ng',
        image: './assets/images/trustee/5.jpg'
    },
    {
        name: 'Sandra Adah',
        email: 'sandra.adah@miva.edu.ng',
        image: './assets/images/trustee/6.jpg'
    },
    {
        name: 'Ejiro Nigeria irhobo',
        email: 'ejiro.irhobo@miva.edu.ng',
        image: './assets/images/trustee/7.jpg'
    },
    {
        name: 'Mifuenayo Erimakonosine',
        email: 'mifuenayo.erimakonosine@miva.edu.ng',
        image: './assets/images/trustee/8.jpg'
    },
    {
        name: 'Musa Emmanuel onimisi',
        email: 'musa.emmanuel@miva.edu.ng',
        image: './assets/images/trustee/9.jpg'
    },
    {
        name: 'Josiah Alphonsus',
        email: 'Josiah.Alphonsus@miva.edu.ng',
        image: './assets/images/trustee/10.jpg'
    },
    {
        name: 'Samuel Adeyemi',
        email: 'samuel.adeyemi@miva.edu.ng',
        image: './assets/images/trustee/13.png'
    },
    {
        name: 'Morenike Oyewole',
        email: 'morenike.oyewole@miva.edu.ng',
        image: './assets/images/trustee/Morenike-Oyewole.jpg'
    }
];


const boardList = document.getElementById('board-list');

boardList.innerHTML = trustees.map(trustee => `
    <div class="board-card">
      <img
        src="${trustee.image}"
        alt="${trustee.name}"
        width="205"
        height="208"
      />
      <h3>${trustee.name}</h3>
      <p>
        <a href="mailto:${trustee.email}">${trustee.email}</a>
      </p>
    </div>
  `).join('');

