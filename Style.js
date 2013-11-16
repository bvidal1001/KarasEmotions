var testing = false;
if(testing)
{
//alert('start');
//alert('finish');
}

//HEAD
        var head = document.getElementsByTagName('head')[0];

        //Header Text
        var kMain = "https://raw.github.com/bvidal1001/KarasEmotions/master/kMain.png";
        var h1 = document.getElementsByTagName('h1')[0];
                var titleImg = h1.getElementsByTagName('img')[0];
                titleImg.setAttribute('src',kMain);

//BODY
        //Header Color
        var header = document.getElementsByTagName('header')[0];
        //header.style.backgroundColor = "#FFCCFF";

        //Background Color
        var body = document.body;
        body.style.backgroundColor = "#DBFFFF";
		
		//Background Image
        var backgroundUrl = "https://raw.github.com/bvidal1001/KarasEmotions/master/texture.jpg";
		body.style.backgroundImage='url(' + backgroundUrl + ')';

        //Footer
        var footer = body.getElementsByTagName('footer')[0];
        var footText = footer.getElementsByTagName('p')[0];
        var bradLink = "<a href='https://www.facebook.com/brad.vidal' >Brad</a>";
        footText.innerHTML = "Site created/edited/hacked by " + bradLink;

//FAVICON
        var favUrl = "https://raw.github.com/bvidal1001/KarasEmotions/master/faviconTry.ico";
        
        var head = document.getElementsByTagName('head')[0];
                var shortcutIconLink = document.createElement('link');
                        var attRel = document.createAttribute('rel');
                        attRel.value = "shortcut icon";
        
                        var attHref = document.createAttribute('href');
                        attHref.value = favUrl;
                shortcutIconLink.setAttributeNode(attRel);
                shortcutIconLink.setAttributeNode(attHref);
        head.appendChild(shortcutIconLink);
        