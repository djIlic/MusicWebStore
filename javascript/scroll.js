window.onscroll = function() {skrolovanje()};

	function skrolovanje() {
	if (document.documentElement.scrollTop > 500) {
			document.getElementById("scrollToTop").style.display = "block";
		} else {
			document.getElementById("scrollToTop").style.display = "none";
		}
	}

	$("#scrollToTop").click(function(){
		document.documentElement.scrollTop = 0;
});
