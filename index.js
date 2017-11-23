window.onload = function(){	
	setFooterText(); 	//Apply dynamic text to footer
	loadHome(); 		//Load initial page
	setEventListeners(); //Set event listeners on navmenu
};

function setEventListeners(){
	document.getElementById("liHome").addEventListener("click", loadHome);
	document.getElementById("liAboutMe").addEventListener("click", loadAboutMe);
	document.getElementById("liAboutSite").addEventListener("click", loadAboutSite);
	document.getElementById("liCaseStudies").addEventListener("click", loadCaseStudies);
	document.getElementById("liProgrammingPortfilio").addEventListener("click", loadProgrammingPortfilio);
	document.getElementById("liResearchPortfilio").addEventListener("click", loadResearchPortfilio);
}

function setFooterText(){
	document.getElementsByTagName('footer')[0].innerHTML = "Copyright &copy; Luke Mawby " + new Date().getFullYear()
}

function loadHome(){
	loadPage("home.html");
}

function loadAboutMe(){
	loadPage("about_me.html");
}

function loadAboutSite(){
	loadPage("about_site.html");
}

function loadCaseStudies(){
	loadPage("case_studies.html");
}	

function loadProgrammingPortfilio(){
	loadPage("programming_portfolio.html");
}	

function loadResearchPortfilio(){
	loadPage("research_portfilio.html");
}	

function loadPage(url){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('content').innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "content/" + url, true);
	xhttp.send();	
}