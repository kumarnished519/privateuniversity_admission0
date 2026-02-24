
// set CSS variable for header height so anchors offset correctly
function updateHeaderHeight(){
  const header=document.querySelector('.site-header');
  if(header){
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', (h+8) + 'px');
  }
}
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
updateHeaderHeight();

const words = document.querySelectorAll('.floating-word');
function randomize(){
  words.forEach((w, i) => {
    const x = Math.random()*90; // percent
    const y = Math.random()*60; // percent
    w.style.left = x + '%';
    w.style.top = 20 + y/2 + '%';
    // random background gradient
    const g1 = ['#ff6b6b','#ff7a59','#f6d365'][Math.floor(Math.random()*3)];
    const g2 = ['#7c3aed','#06b6d4','#0b61ff'][Math.floor(Math.random()*3)];
    w.style.background = `linear-gradient(90deg, ${g1}, ${g2})`;
  })
}
setInterval(randomize, 2500);
window.addEventListener('load', randomize);

// nav toggle
document.addEventListener('click', function(e){
  if(e.target && e.target.id==='navToggle'){
    const nav=document.getElementById('mainNav');
    if(nav) nav.classList.toggle('open');
  }
});

// offset anchor scrolling for sticky header
(function(){
  function offsetAnchor(){
    if(location.hash.length>1){
      var id = location.hash.substring(1);
      var el=document.getElementById(id)||document.querySelector('[name="'+id+'"]');
      if(el){
        var header = document.querySelector('.site-header');
        var h = header ? header.getBoundingClientRect().height + 12 : 120;
        var elTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elTop - h, behavior: 'smooth' });
      }
    }
  }
  window.addEventListener('hashchange', offsetAnchor);
  window.addEventListener('load', function(){ setTimeout(offsetAnchor, 10); });
})();
