
		var queryString = new Array();
		if(queryString.length === 0){
			if (window.location.search.split('?').length > 1){
				var params = window.location.search.split('?')[1].split('&');
				for (var i=0;i<params.length;i++){
					var key = params[i].split('=')[0];
					var value = decodeURIComponent(params[i].split('=')[1]);
					queryString[key]=value;
				}
			}
		}
		document.getElementById("WinnerInfo").innerHTML = "Player"+queryString["winId"]+" wins";
		
		for (var i=1;i<=queryString["num"];i++){
			var img = document.createElement("img");
			img.setAttribute("src","images/dice_"+i+".gif")
			img.setAttribute("id","img"+i)
			//img.setAttribute("data-anijs","if: loadstart, do: swing animated");
			var element = document.getElementById("selectorFooter");
			element.appendChild(img);
			$(document).ready(function () {
			$("#img1").effect("bounce", { times:10, distance:200 }, 400);
		});
		}	
