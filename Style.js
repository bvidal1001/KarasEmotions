
	
	var linkElement = document.createElement('link');
	var att = document.createAttribute('shortcut icon');
	att.value = "http://ajaxlocal/run/favicon/a.ico";
	linkElement.setAttributeNode(att);
	
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(linkElement);


	//Header Text
	//var headerText = document.getElementsByTagName('h1')[0];
	//headerText.innerHTML = "Karas Emotions - (title updated via JavaScript bitch!)";

	//Header Color
	var header = document.getElementsByTagName('header')[0];
	header.style.backgroundColor = "#FFCCFF";


	//Background Color
	var body = document.body;
	body.style.backgroundColor = "#DBFFFF";

	
	