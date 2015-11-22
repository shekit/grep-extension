var word = null

function writeMessage(){
	return word
}


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		
			word = request//.selectedText;
		
	}
)