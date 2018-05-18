$(".btn-acceder").click( () => {scrollearA(".navigator");});
$(".btn-inicio").click( () => {scrollearA(".navigator");});
$(".btn1").click( () => { scrollearA('.color'); });
$(".btn2").click( () => { scrollearA('.byn'); });
$(".btn3").click( () => { scrollearA('.kpop'); });
$(".btn4").click( () => { scrollearA('.acerca-de'); });
$(".btn-subir,.btn-bajar").click( (e) => {
	scrollearA("."+e.target.getAttribute("desplazarA"));
});


function scrollearA(selector){
	$('html, body').animate({
    	scrollTop: $(selector).offset().top
 	}, 1000);
}


$(".div-dibujos").each( (i,e) =>{

	var imgDivs = $(e).find(".img-div");
	var imgCount = imgDivs.length;
	var imgWidthN = 100/imgCount;
	var imgWidth = 100/imgCount + "%";

	imgDivs.each( (j,imgTag) => {
		
		imgTag = $(imgTag);

		
		imgTag.css('background-image','url("' + imgTag.attr("src_img") + '")');
		imgTag.css('width', imgWidth);

		imgTag.click( () => {

			var pantallaVisor = $("<div>").addClass("pantalla-visor");
			var visor = imgTag.clone();
			
			visor.addClass("visor");

			visor.append($("<div>").addClass("btn-cerrar-visor"));

			$(document.body).append(pantallaVisor.append(visor));

			var lPos = imgTag.position().left;
			var w = imgTag[0].offsetWidth;
			var wV = $(window).width() * imgWidthN / 100;

			visor.css("left",( lPos + (w - wV) / 2)  + "px");
			visor.css("transition","0");
			visor.show();

			visor.animate({width:"100vw",left:"0"});

			visor.click( () => {
				visor.animate(
					{
						width:"0",
						left: (j * imgWidthN) + "%" 
					},{
						easing: "swing",
				    	duration: 500,
				    	complete: () => { pantallaVisor.remove(); }
				    }
				);
			});
		});
	});
});

