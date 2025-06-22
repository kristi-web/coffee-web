// Gjej formën në faqe
const form = document.querySelector('form');

// Kur forma dërgohet (submit), ndalo dërgimin dhe shfaq mesazh
form.addEventListener('submit', function(e) {
  e.preventDefault(); // ndalon rifreskimin e faqes
  alert("Porosia u bë me sukses! ☕");
  form.reset(); // pastron fushat pas porosisë
});