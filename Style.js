var testing = false;
if(testing)
{
//alert('start');
//alert('finish');
}

//GLOBAL
	var gitHubDestination = "https://raw.github.com/bvidal1001/KarasEmotions/master/";
	var transparentWhite = 'rgba(255, 255, 255, 0.8)';


//INCLUDE CSS
	var cssFile = gitHubDestination + "StyleAll.css";
	
	var head = document.getElementsByTagName('head')[0];
			var shortcutIconLink = document.createElement('link');
					var attRel = document.createAttribute('rel');
					attRel.value = "stylesheet";
					var attHref = document.createAttribute('href');
					attHref.value = cssFile;
			shortcutIconLink.setAttributeNode(attRel);
			shortcutIconLink.setAttributeNode(attHref);
	head.appendChild(shortcutIconLink);

//HEAD
        var head = document.getElementsByTagName('head')[0];

        //Header Text
        var kMain = gitHubDestination + "kMain.png";
        var h1 = document.getElementsByTagName('h1')[0];
                var titleImg = h1.getElementsByTagName('img')[0];
                titleImg.setAttribute('src',kMain);

//BODY
        //Header Color
        var header = document.getElementsByTagName('header')[0];
        header.style.backgroundColor = transparentWhite;

        //Background Color
        var body = document.body;
        body.style.backgroundColor = "#DBFFFF";
		
		//Background Image
        var backgroundUrl = gitHubDestination + "texture.jpg";
		body.style.backgroundImage='url(' + backgroundUrl + ')';
		body.style.backgroundAttachment = 'fixed';
		
		//Section White-Background
		var section = body.getElementsByTagName('section')[0];
		section.style.backgroundColor = transparentWhite;

		//Article Padding
		var article = section.getElementsByTagName('article')[0];
		article.style.padding = '10px';
		
        //Footer
        var footer = body.getElementsByTagName('footer')[0];
        var footText = footer.getElementsByTagName('p')[0];
        var bradLink = "<a href='https://www.facebook.com/brad.vidal' >Brad</a>";
        footText.innerHTML = "Site created/edited/hacked by " + bradLink;

//FAVICON
        var favUrl = gitHubDestination + "faviconTry.ico";
        
        var head = document.getElementsByTagName('head')[0];
                var shortcutIconLink = document.createElement('link');
                        var attRel = document.createAttribute('rel');
                        attRel.value = "shortcut icon";
        
                        var attHref = document.createAttribute('href');
                        attHref.value = favUrl;
                shortcutIconLink.setAttributeNode(attRel);
                shortcutIconLink.setAttributeNode(attHref);
        head.appendChild(shortcutIconLink);
        