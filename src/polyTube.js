// Looks for the Vox Media player element.
if (document.body.innerHTML.indexOf("video-wrap p-scalable-video") != -1)
{
	// Checks if a "Watch on YouTube" or "Watch in 60fps on YouTube" link exists in the article.
	if (document.getElementById("article-body").innerHTML.indexOf("on YouTube</a>") != -1)
	{
		var ytURL = document.getElementById("article-body").getElementsByTagName("a")[0].href; // Extracts the URL from the "Watch on Youtube" link. Assumes the needed <a> tag is always the first. Which it seems to be. *shrug*
		
		var ytId = getId(ytURL);
		
		// If getId() doesn't return anything, don't replace.
		if (ytId)
		{
			replace(ytId);
		}
	}
}

// The replacerator. Only replaces the first (main) video of the article.
function replace(ytId)
{		
	var classArr = document.getElementsByClassName("video-wrap");
	classArr[0].innerHTML = "<iframe src=\"https://www.youtube.com/embed/" + ytId + "?iv_load_policy=3&showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
}

// Extracts the video id from the URL using regex.
function getId(ytURL)	
{	
	var ytIdMatch = ytURL.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
	
	// Validates the extracted id by checking if it's 11 characters long.
	if (ytIdMatch[2].length == 11)
	{
		return ytIdMatch[2];
	} // Else return nothing.
}
