if (typeof ($) === 'undefined') $ = jQuery.noConflict();

$(document).ready(function () {
	var singleCall = false;
	var loc = document.getElementById("distribution");

	setTitleForClass("alias");
	setTitleForClass("nb");
	setTitleForClass("note");

	attachEvents(false); //
	applyTheme('green');

	function applyTheme(theme) {
		document.body.id = theme;
	}

	function attachEvents(collapseHeadsOnStart) {
		//Add "Toggle Visibility" & rollover For Heads
		var heads = $(".head").get();
		for (var i = 0; i < heads.length; i++) //
		{
			heads[i].onclick = function () { toggleChildren(this); }
			if (heads[i].className.indexOf("child") == -1) /* We dont want an unmarried person (child) to jhave a rollover effect */ {
				heads[i].onmouseover = function () { this.className += " rollover"; }
				heads[i].onmouseout = function () { this.className = this.className.replace(new RegExp(" rollover\\b"), ""); }
				if (collapseHeadsOnStart == true) { toggleChildren(heads[i], true); }
			}
		}
	}

	function toggleChildren(obj, ProgramCall) {
		//TODO: this funcion is recursively called from the innermost child => need to use a timer to block
		if (singleCall == true) { /*alert("returning");*/ return; }

		if (obj.className.indexOf("child") == -1) /* We dont want an unmarried person (child) to cause a collape of his parent */ {
			//Change Icon & Get Style to set
			if (obj.className.indexOf("collapsed") != -1)
				obj.className = obj.className.replace(new RegExp(" collapsed\\b"), "");
			else
				obj.className += " collapsed"; //styleToSet="none" }

			//Get the objects to collapse
			$(document.all.HideSpouse.checked ? 'div.person' : '.children', obj).toggle();
		}

		//disallow this function from being called on the parents of the actual object to collapse/expand
		if (ProgramCall + "" == "undefined")
			setSingleCallFlag();
	}

	/* Helper Functions */
	function setSingleCallFlag() { setInterval(clearSingleCallFlag, 200); singleCall = true; }
	function clearSingleCallFlag() { singleCall = false; }

	function setTitleForClass(cssclass) {
		var tags = $('span.' + cssclass).get();
		var endText = cssclass != "nb" ? ")" : "...)";
		//alert(tags.length);
		for (var i = 0; i < tags.length; i++) {
			if (cssclass != "nb" && cssclass != "note") tags[i].title = cssclass;
			if (cssclass == "location")
				loc.innerHTML += tags[i].innerText + ", ";
			if (cssclass != "info")
				tags[i].innerText = "(" + tags[i].innerText + endText; //loc.innerHtml += tags[i].innerText + "<br>";
		}
	}
});
