const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const navLinks = document.querySelectorAll('nav ul li a')



open.addEventListener('click', ()=> container.classList.add('show-nav'))
close.addEventListener('click', ()=> container.classList.remove('show-nav'))


navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent immediate navigation
      const targetId = link.getAttribute('href').slice(1); // Get the target section ID
      console.log(targetId);
      const targetElement = document.getElementById(targetId); // Find the target element
      console.log(targetElement);
  
      container.classList.remove('show-nav'); // Close the nav first
  
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }, 500);
    });
  });