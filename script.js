```javascript
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior:'smooth'
    });

  });
});

const connectBtn =
  document.querySelector('.connect-btn');

connectBtn.addEventListener('click', () => {

  alert('Wallet connection coming soon.');

});
```
