$(document).ready(function(){
	var firebase = new Firebase('https://blueprint-blog.firebaseio.com/');

	function createBlogPost(post){
		var title = $("<h1/>").text(post.title);
		var content = $("<p/>").text(post.content);
		var footer = $("<p/>").text(
			"Published by" + post.author + "on" + post.date);

		var blogPostHTML = $("<div/>").append([title, content, footer]);

		$(".content").prepend(blogPostHTML);
	}

	$("form").on("submit", function(e){
		e.preventDefault();

		var title = $("#title").val();
		var content = $("textarea").val();
		var author = "Thomas";
		var date = new Date().toDateString();

		var blogPost = {
			"title": title,
			"content": content,
			"author": author,
			"date": date
		};

	firebase.push(blogPost);

		console.log(blogPost);
	})
})