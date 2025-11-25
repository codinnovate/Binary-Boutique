const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
btn && nav && (btn.onclick = () => nav.classList.toggle('open'));


const trustees = [
    {
        name: 'Alade Ademola Aderohunmu',
        email: 'alade.aderohunmu@miva.edu.ng',
        image: './assets/images/trustee/adrohunmu-alade.jpeg'
    },
    {
        name: 'Opeyemi Ibrahim Okekunle',
        email: 'opeyemi.ibrahim@miva.edu.ng',
        image: './assets/images/trustee/opeyemi-ibrahim.jpeg'
    },
    {
        name: 'Samad Sapara',
        email: 'samad.sapara@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Aiyenimelo Tofunmi',
        email: 'aiyenimelo.tofunmi@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Jonah Elisha',
        email: 'jonah.elisha@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Progress Ochuko Eyaadah',
        email: 'progress.eyaadah@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Morenike Oyewole',
        email: 'morenike.oyewole@miva.edu.ng',
        image: './assets/images/trustee/Morenike-Oyewole.jpg'
    },
    {
        name: 'Samuel Adeyemi',
        email: 'samuel.adeyemi@miva.edu.ng',
        image: './assets/images/trustee/13.png'
    },
    {
        name: 'Blessing Nabasu Badari',
        email: 'blessing.badari@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Abdulrahman Usman',
        email: 'usman.abdulrahman@miva.edu.ng',
        image: './assets/images/trustee/Abdulrahman-Usman .jpeg'
    },
    {
        name: 'Oluwaseun Donna',
        email: 'oluwaseun.donna@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Ajala Abdullah',
        email: 'ajala.abdullah@miva.edu.ng',
        image: './assets/images/trustee/14.png'
    },
    {
        name: 'Boluwatife Ajayi',
        email: 'boluwatife.ajayi@miva.edu.ng',
        image: './assets/images/trustee/Ajayi-Boluwatife.jpeg'
    },
    {
        name: 'Micheal Princewill',
        email: 'micheal.princewill@miva.edu.ng',
        image: './assets/images/trustee/placeholder.png'
    },
    {
        name: 'Samuel Unachukwu',
        email: 'samuel.unachukwu@miva.edu.ng',
        image: './assets/images/trustee/unachukwu-samuel.jpeg'
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

