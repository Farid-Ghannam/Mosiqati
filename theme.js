if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

function toggleTheme() {
  var isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? 'وضع فاتح' : 'وضع داكن';
}

document.addEventListener('DOMContentLoaded', function () {
  var isDark = document.documentElement.classList.contains('dark');
  document.getElementById('themeBtn').textContent = isDark ? 'وضع فاتح' : 'وضع داكن';

  // Active nav link
  var links = document.querySelectorAll('nav a');
  var current = window.location.pathname.split('/').pop();
  links.forEach(function(link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // IMPROVEMENT 5: Back to top button
  var btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.textContent = '↑ للأعلى';
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
});
