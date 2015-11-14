console.log("Hello popup");

// setTimeout(function(){
// 	$("#weather p").html("bye");
// },1000);

chrome.tabs.query({
	active:true,
	lastFocusedWindow:true
}, function(tabs){
	var tab = tabs[0]
	
	console.log(tabs)
	console.log(tab.url)
})

$("body").on("click","#content", function(event){
	event.preventDefault();

	chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
		var activeTab = tabs[0]
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_button_in_popup"})
	})

	//chrome.extension.getBackgroundPage().writeMessage();
})

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.message == 'open_new_tab'){
			console.log("Content told me to")
		}
	}
)

// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {

// 	}
// )

$("#searchForm").on('submit', function(event){
	event.preventDefault();
	var query = $("#search").val();
	console.log(query)

	$.ajax({
		url: 'http://grep.us/search',
		method: "POST",
		data: {"type":"p5", "query":query, "from":0}
	})
	.done(function(response){
		console.log(response)
	})
	.fail(function(response){
		console.log("FAILED")
	})
})