function current_color(new_color){
    var cur = document.getElementById("current");
    cur.style.color = new_color;
}

$(function(){
	var currentPos = 0;
	$(window).scroll(function(event){
		var newPos = $(this).scrollTop();
		
		if(newPos > currentPos){
			$("header").slideUp("fast");
		}
		if(newPos < currentPos){
			$("header").slideDown("fast");
		}
		currentPos = newPos;
	});
});