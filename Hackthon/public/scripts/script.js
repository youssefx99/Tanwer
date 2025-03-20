const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
openBtn.addEventListener('click', () => {
  sideBar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show');
}); 
