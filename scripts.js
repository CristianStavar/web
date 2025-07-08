/*   Language Toggle Script  */

const toggleButton = document.getElementById('languageToggle');
const englishSections = document.querySelectorAll('[id$="English"]');
const spanishSections = document.querySelectorAll('[id$="Spanish"]');


// Load saved language preference
const savedLanguage = localStorage.getItem('language') || 'spanish';
if (savedLanguage === 'spanish') {
  toggleButton.textContent = 'English';
  englishSections.forEach(section => section.classList.add('hidden'));
  spanishSections.forEach(section => section.classList.remove('hidden'));
}

toggleButton.addEventListener('click', () => {
  if (toggleButton.textContent === 'Español') {
    englishSections.forEach(section => section.classList.add('hidden'));
    spanishSections.forEach(section => section.classList.remove('hidden'));
    toggleButton.textContent = 'English';
    localStorage.setItem('language', 'spanish');
  } else {
    englishSections.forEach(section => section.classList.remove('hidden'));
    spanishSections.forEach(section => section.classList.add('hidden'));
    toggleButton.textContent = 'Español';
    localStorage.setItem('language', 'english');
  }
});


const actualGames = document.querySelectorAll('[id^="actualGame"]');

const smolSheperButton = document.getElementById('gameButtonSmolSheper');
const danceDanceStudioButton = document.getElementById('gameButtonDanceDanceStudio');
const emptyMindButton = document.getElementById('gameButtonEmptyMind');
const soulForgeButton = document.getElementById('gameButtonSoulForge');

smolSheperButton.addEventListener('click', () => {

  actualGames.forEach(game => game.classList.add('hidden'));
  document.getElementById('actualGameSmolSheper').classList.remove('hidden');

});


danceDanceStudioButton.addEventListener('click', () => {

  actualGames.forEach(game => game.classList.add('hidden'));
  document.getElementById('actualGameDanceDanceStudio').classList.remove('hidden');

});


emptyMindButton.addEventListener('click', () => {

  actualGames.forEach(game => game.classList.add('hidden'));
  document.getElementById('actualGameEmptyMind').classList.remove('hidden');

});

soulForgeButton.addEventListener('click', () => {

  actualGames.forEach(game => game.classList.add('hidden'));
  document.getElementById('actualGameSoulForge').classList.remove('hidden');

});


const elements = document.querySelectorAll('.hidden2');

const observerProjects = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible2');
      observerProjects.unobserve(entry.target); // Stop observing after revealing
    }
  });
});

elements.forEach((el) => {
  observerProjects.observe(el);
});


/* IFRamees loading */

const iframes = document.querySelectorAll('.gameFrame');
const lazyLoadIframe = (iframe) => {
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
};

const observerGames = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lazyLoadIframe(entry.target);
      observerGames.unobserve(entry.target);
    }
  });
});

iframes.forEach(iframe => {
  iframe.setAttribute('data-src', iframe.getAttribute('src'));
  iframe.removeAttribute('src');
  observerGames.observe(iframe);
});