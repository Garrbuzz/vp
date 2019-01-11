window.onscroll = function() {
  		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		
  		document.querySelector('.showScroll').innerHTML = scrolled + 'px' + ' ' + window.innerHeight;
  		let qqq = document.querySelectorAll('.img');
  		let i=0;
  		for (i=0; i<qqq.length; i++){
	  		if (qqq[i].offsetTop<(scrolled + window.innerHeight)){
	  			qqq[i].classList.add('img-coming');
	  		}
  		}
  		
	}