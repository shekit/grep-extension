var word = null

function writeMessage(){
	return word
}


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		
		if(request.selectedText){
			word = request//.selectedText;
		}

		if(request.message){
			word = "open new tab sent"
		}
		
	}
)