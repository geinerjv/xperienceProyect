$(document).ready(function(){

  var estado = 0;
  function mostrarMenu(){
    $("#btn-menu").click(function(){
      if (estado === 0) {
        $("#nav-movil").fadeIn();
        $("#btn-menu").removeClass("icon-menu");
        $("#btn-menu").addClass("icon-cross");
        estado = 1;
      }else {
        $("#nav-movil").fadeOut();
        $("#btn-menu").removeClass("icon-cross");
        $("#btn-menu").addClass("icon-menu");
        estado = 0;
      }
    });
  }
  cambioTamañoPantalla();
  mostrarMenu();

  var tamañoPantalla = $(window).width();
  function cambioTamañoPantalla(){
    $(window).resize(function(){
      tamañoPantalla = $(window).width();
      if (tamañoPantalla > 650) {
        $("#nav-movil").css('display','none');
        estado = 0;
        $("#btn-menu").removeClass("icon-cross");
        $("#btn-menu").removeClass("icon-menu");
        $("#btn-menu").addClass("icon-menu");
      }
    })
  }

  /*Este porcion de codigo permite desplazar suavemente las secciones de la página*/
  /*Se seleccionan todos los elementos "a"*/
  /*Con el "preventDefault" evitamos que el evento se active*/
  $('a').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
  });

  /*
  Porcion de codigo que permite al menu movil desaparecer despues de ser accionado alguno de sus items
  */
  $(".accionado-a").click(function(){
    $("#nav-movil").fadeOut();
    $("#btn-menu").removeClass("icon-cross");
    $("#btn-menu").addClass("icon-menu");
    estado = 0;
  });


  /*Este codigo es el que hace funcionar el boton de "ir arriba "*/
  $('.ir-arriba').click(function(){
    $('body, html').animate({
         scrollTop: '0px'
    }, 600);
  });


  var scrollUsuario2;
  function scrollUsuario(){

    $(window).scroll(function(){
      scrollUsuario2 = $(this).scrollTop();
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
      } else {
        $('.ir-arriba').slideUp(300);
        }
    });
  }
  scrollUsuario();


  /*Este codigo permite situar en pixeles correctamente el menu de servicios en tamaño movil*/
  $('#serv-menu-movil').click(function(){
		    $('body, html').animate({
			       scrollTop: '918px'
		    }, 600);
	  });


});
