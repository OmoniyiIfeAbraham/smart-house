const width = document.body.offsetWidth;
const height = document.body.offsetHeight;

document.body.addEventListener('mousemove', function(e){
  const relativeWidth = e.clientX / width * 100;
  const relativeHeight = e.clientY / height * 100;
  document.body.style.setProperty('--mouse-x', relativeWidth);
  document.body.style.setProperty('--mouse-y', relativeHeight);
  
  number.dataset.number = parseInt(relativeWidth) + '%';
})
