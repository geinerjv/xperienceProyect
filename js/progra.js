$(document).ready(function(){

  var estado = 0;
  function mostrarMenu(){
    $("#btn-menu").click(function(){
      if (estado === 0) {
        $("#nav-movil").slideDown();
        $("#btn-menu").removeClass("icon-menu");
        $("#btn-menu").addClass("icon-cross");
        estado = 1;
      }else {
        $("#nav-movil").slideUp();
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




});
