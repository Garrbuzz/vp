window.onload =  function(){
  let animatedBlocks = document.querySelectorAll('.img');
  if (animatedBlocks[0].offsetTop<window.innerHeight){
          animatedBlocks[0].classList.add('img-coming');
          
  }
}
window.onscroll = function() {
  		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		let animatedBlocks = document.querySelectorAll('.img');
  		let i=0;
  		for (i=0; i<animatedBlocks.length; i++){
	  		if (animatedBlocks[i].offsetTop<(scrolled + window.innerHeight)){
	  			animatedBlocks[i].classList.add('img-coming');
          console.log(scrolled);
	  		}
  		}
}
