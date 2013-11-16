var testing = true;
if(testing)
{
	
	// Format: <link rel="shortcut icon" href="/favicon.ico" />
	//alert('start');
	
	var favUrl = "https://raw.github.com/bvidal1001/KarasEmotions/master/faviconTry.ico";
	var favUrlGoogle = "http://www.google.com/favicon.ico";
		
	var head = document.getElementsByTagName('head')[0];
		var shortcutIconLink = document.createElement('link');
			var attRel = document.createAttribute('rel');
			attRel.value = "shortcut icon";
	
			var attHref = document.createAttribute('href');
			attHref.value = favUrl;
		shortcutIconLink.setAttributeNode(attRel);
		shortcutIconLink.setAttributeNode(attHref);
	head.appendChild(shortcutIconLink);

	//alert('finish');
}
	
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

