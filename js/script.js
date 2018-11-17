function send(n){
		alert(n);
}

function modalWindow () {
	this.modal=document.querySelector('.modal');
	this.overlay=document.querySelector('.overlay');
	var popup = this;
	this.open=function(content){
		popup.modal.innerHTML = content;
		popup.overlay.classList.add('visible');
		popup.modal.classList.add('visible');
	}
	this.close=function(){
		popup.overlay.classList.remove('visible');
		popup.modal.classList.remove('visible');
	}
	this.overlay.onclick = popup.close;

}