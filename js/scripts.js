//function current_color(new_color){
//    var cur = document.getElementById("current");
//    cur.style.color = new_color;
//}
	
$(function(){
	var currentPos = 0;
	$(window).scroll(function(event){
		var newPos = $(this).scrollTop();
		
		if(newPos - currentPos > 15){
			$("header").slideUp("fast");
		}
		if(newPos - currentPos < -5){
			$("header").slideDown("fast");
		}
		currentPos = newPos;
	});
});

$(function(){
	$("header").load("header.html", function(){
		var title = document.getElementsByTagName("title")[0].innerHTML;
		var links = document.getElementsByTagName("a");
		if (title != "Gotta Go"){
			links[1].className = "";
			if (title == "Description - Gotta Go"){
				links[2].className += "current";
			}else if (title == "About - Gotta Go"){
				links[3].className += "current";
			}else if (title == "Contact - Gotta Go"){
				links[4].className += "current";
			}else if (title == "Sign In - Gotta Go"){
				links[5].className += " current_si";
			}
		}
		
		$("a").hover(
			function(){
				if(this.className != "current"){
					$(".current").css("color", "#ffffff");
				}
			},function(){
				$(".current").css("color", "#3498db");
		});
	});
	
	$("footer").load("footer.html");
});