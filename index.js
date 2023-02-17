// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const SIDEBAR = document.getElementById('side-bar');
const CONTENT = document.querySelector('.content');
btn.addEventListener('click', () => {
    SIDEBAR.classList.toggle('active');
});
CONTENT.addEventListener('click', () => {
    SIDEBAR.classList.remove('active');
    
});

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml
