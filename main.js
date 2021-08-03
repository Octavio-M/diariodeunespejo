//Por https://codepen.io/captain_anonym0us
var paginas = document.getElementsByClassName('pagina');
for(var i = 0; i < paginas.length; i++)
{
  var pagina = paginas[i];
  if (i % 2 === 0)
  {
    pagina.style.zIndex = (paginas.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  let clickeo = 0; //Variable para que no se bugueen las páginas al pasarlas demasiado rápido
  for(var i = 0; i < paginas.length; i++)
  {
    //Or var pagina = paginas[i];
    paginas[i].pageNum = i + 1;
    paginas[i].onclick=function()
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

