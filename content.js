// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");

// 		if(request.greeting == "hello") {
// 			sendResponse({farewell: "goodbye"})
// 		}
// 	})

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	

		if(request.message == "clicked_button_in_popup") {
			console.log("popup told me to")
		}

		chrome.runtime.sendMessage({"message":"open_new_tab"})
	})

// chrome.runtime.sendMessage({greeting:"hello"}, function(response){
// 	console.log("hello")
// })