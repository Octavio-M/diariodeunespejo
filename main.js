var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
{
  var page = pages[i];
  if (i % 2 === 0)
  {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  let clickeo = 0; //Variable para que no se bugueen las páginas al pasarlas demasiado rápido
  for(var i = 0; i < pages.length; i++)
  {
    //Or var page = pages[i];
    pages[i].pageNum = i + 1;
    pages[i].onclick=function()
    {
      if (clickeo == 0) { 
        if (this.pageNum % 2 === 0)
        {
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
          clickeo = 1;
          setTimeout(function(){
            clickeo = 0;
          }, 1500);
        }
        else
        {
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
          clickeo = 1;
          setTimeout(function(){
            clickeo = 0;
          }, 1500);
        }
      }
    }
  }

});

