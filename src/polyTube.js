// Looks for the Vox Media player element.
if (document.body.innerHTML.indexOf("video-wrap p-scalable-video") != -1)
{
	// Checks if a "Watch on YouTube" or "Watch in 60fps on YouTube" link exists in the article.
	if (document.getElementById("article-body").innerHTML.indexOf("on YouTube<") != -1)
	{
		var ytURL = document.getElementById("article-body").getElementsByTagName("a")[0].href; // Extracts the URL from the "Watch on Youtube" link. Assumes the needed <a> tag is always the first. Which it seems to be. *shrug*
		
		var ytId = getId(ytURL);
		
		replace(ytId);
	}
}

// The replacerator. Only replaces the first (main) video of the article.
function replace(ytId)
{		
	var classArr = document.getElementsByClassName("video-wrap");
	classArr[0].innerHTML = "<iframe src=\"https:\/\/www.youtube.com/embed/" + ytId + "?iv_load_policy=3\" frameborder=\"0\" allowfullscreen></iframe>";
}

// Extracts the video id from the URL.
// Supports youtu.be and youtube.com/watch?v=
function getId(ytURL)	
{	
	var ytId = ytURL.slice(ytURL.length - 11); // Slices the URL, leaving the id. Assumes YouTube video ids are always 11 characters long and at the end of the URL.
	
	return ytId;
}
