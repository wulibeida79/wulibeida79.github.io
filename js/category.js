
/*var version=0.3;*/

var categories=[{name:"All",page:"all.html",filter:"All"},
		{name:"Technology",page:"tech.html",filter:"Technology"},
		{name:"Experience",page:"experience.html",filter:"Experience"},
		{name:"Physics&Me",page:"phycsandme.html",filter:"PhycsAndMe"},
		{name:"H&Wealth",page:"hwealth.html",filter:"HWealth"},
		{name:"History",page:"history.html",filter:"History"},
		{name:"Hobby",page:"hobby.html",filter:"Hobby"},
		{name:"Upcoming",page:"upcoming.html",filter:"Upcoming"}
		];

var current_active=getUrlVars()["filter"]?getUrlVars()["filter"]:"All";


/* var seminars has been defined in seminars_json */

for (var cat of categories) {	
	var active = (cat["name"]==current_active)?"active":"";
	var html_block = '<li class="nav-item tm-category-item"><a href="'+cat["page"]+'?filter='+cat["filter"]+'&v='+version+
		'" class="nav-link tm-category-link '+ active+'">'+cat["name"]+'</a></li>';
	
	document.getElementById("categorylist").innerHTML += html_block;
	console.log(html_block);

	
}


/*function showCategoryLinks() {
	var cat_links =
 	'<li class="nav-item tm-category-item"><a href="all.html?filter=All&v='+version+
		'" class="nav-link tm-category-link active">All</a></li>'+
                                    
	'<li class="nav-item tm-category-item"><a href="tech.html?filter=Technology&v='+version+
		'" class="nav-link tm-category-link">Technology</a></li>'+

         '<li class="nav-item tm-category-item"><a href="experience.html?filter=Experience&v='+version+
		'" class="nav-link tm-category-link">Experience</a></li>'+

	'<li class="nav-item tm-category-item"><a href="hwealth.html?filter=PhycsAndMe&v='+version+
		'" class="nav-link tm-category-link">Phyics&Me</a></li>'+

         '<li class="nav-item tm-category-item"><a href="hwealth.html?filter=HWealth&v='+version+
		'" class="nav-link tm-category-link">H&Wealth</a></li>'+

         '<li class="nav-item tm-category-item"><a href="history.html?filter=History&v='+version+
		'" class="nav-link tm-category-link">History</a></li>'+

         '<li class="nav-item tm-category-item"><a href="hobby.html?filter=Hobby&v='+version+
		'" class="nav-link tm-category-link">Hobby</a></li>'+

          '<li class="nav-item tm-category-item"><a href="upcoming.html?filter=Upcoming&v='+version+
		'" class="nav-link tm-category-link">Upcoming</a></li>';
	
	console.log(cat_links);
	return cat_links;

}*/

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}