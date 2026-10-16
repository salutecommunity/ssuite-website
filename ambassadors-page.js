// Ambassador interest lives on the public event site; link to it directly.
(()=>{
 const navLink=document.createElement('a');navLink.href='https://event.ssuite.org/ambassadors';navLink.target='_blank';navLink.rel='noopener noreferrer';navLink.textContent='Ambassadors ↗';
 document.querySelector('.nav').insertBefore(navLink,document.querySelector('.nav>a[href="#sponsors"]'));
 const footerLink=navLink.cloneNode(true);document.querySelector('.footer-links').append(footerLink);
})();
