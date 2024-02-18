
var filter=getUrlVars()["filter"]?getUrlVars()["filter"]:"All";


/* var seminars and var version  are defined in seminars_json */

for (var seminar of seminars) {	
	var classification=seminar["Classification"];
	if (filter=="All"||classification==filter) {
		document.getElementById("catalog").innerHTML += showSeminar(seminar);
	}
}

function showSeminar(seminar) {
	var default_img="img/tn-03.jpg";
	var img=seminar["Image"]?seminar["Image"]:default_img;
	var abstract=seminar["Abstract"]?seminar["Abstract"]:" ";
	var title=seminar["Title"];
	var speaker=seminar["Speaker"];
	var classification=seminar["Classification"];

	var slide=seminar["Slide"];
	var video=seminar["Video"];
	var audio=seminar["Audio"];
	var video=seminar["Video"];
	var date=seminar["Date"];
	var starttime=seminar["StartTime"];


	var zoomlink="https://us02web.zoom.us/j/83240596599?pwd=VHgrVmFBZmI2b0pyVnE2dWZDaWRVdz09";



	var slide_link = slide?'<a href="'+slide+'"  target="_blank"> Slide  </a>':'';
	var video_link = video?'<a href="'+video+'"  target="_blank"> Video  </a>':'';
	var audio_link = audio?'<a href="'+audio+'"  target="_blank"> Audio  </a>':'';
	

	var figcaption_content=slide_link+video_link+audio_link;
	if (classification=="Upcoming") {
		figcaption_content='<a href="'+zoomlink+'"  target="_blank">'+date+' ; '+starttime+' PT'+ '</a>'+'<br>'+slide_link;	
	}

	var block = 
			'<div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">'+
		'<div class="position-relative tm-thumbnail-container">'+
			'<figure class="effect-ming tm-video-item">'+
                  

			'<img src='+img+' alt="Image" class="img-fluid tm-catalog-item-img">'+    
				'<figcaption class="d-flex align-items-center justify-content-center">'+
                       '<h2>'+
                       				
  			figcaption_content+

                        '</h2>'+
                        '</figcaption>' +
			'</figure>'+
		'</div>'+
		'<div class="p-4 tm-bg-gray tm-catalog-item-description">'+
			'<h5 class="tm-text-primary mb-3 tm-catalog-item-title">'+title+'</h5>'+
			'<h6 class="tm-text-primary mb-3 tm-catalog-item-title">'+date+'   '+speaker+'</h6>'+
			'<p class="tm-catalog-item-text">'+abstract+'</p>'+
		'</div>'+
	'</div>';

	
 			
	return block;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
