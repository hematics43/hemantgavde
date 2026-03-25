// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
 const text = document.querySelector(".colorful-text");
  const words = text.innerText.split(" ");

  text.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
