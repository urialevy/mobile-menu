import './style.css';

const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  const myLinks = document.getElementById('myLinks');
  if (myLinks.style.display === 'block') {
    myLinks.style.display = 'none';
  } else {
    myLinks.style.display = 'block';
  }
});
