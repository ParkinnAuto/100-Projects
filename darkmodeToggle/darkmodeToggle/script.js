const toggle = document.querySelector('#toggleDark');

toggle.addEventListener("click", ()=> {
    document.body.classList.toggle('dark', toggle.checked);
})

// โหลดสถานะเดิมเมื่อรีเฟรช
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  toggle.checked = darkMode;
  document.body.classList.toggle('dark', darkMode);
});