$(document).ready(function(){
	var ref = new Firebase('https://radiant-inferno-3555.firebaseio.com/veterans')

	$("#submit-button").on("click", function (e){
		console.log($("#zip").val());
		ref.orderByChild("Zip").equalTo($("#zip").val()).on('value', function(data){
			console.log(data.val())
			sessionStorage.setItem('zipCode', $("#zip").val());
			window.location.href = "page_two.html"
		})
	});
});