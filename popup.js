console.log("Hello popup");

// setTimeout(function(){
// 	$("#weather p").html("bye");
// },1000);

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