window.onload = function(){
	var numbOf = document.querySelector('#numberOfOffices');
	var numbServ = document.querySelector('#numberOfServers');
	var numbComp = document.querySelector('#numberOfComputers');
	var atsType = document.querySelectorAll('input[name="ats"]');
	var sendButton = document.querySelector('.send-mail');
	var sumOf;
	var sumComp;
	var ats = [0, 500, 400];
	var sumATS;
	var baseATS = 0;
	var sumServ;
	var basePriceComp = 400;
	var basePriceOf = 400;
	var basePriceServ = 600;
	var mv = new(modalWindow);
	numbOf.value=1;
	numbServ.value = 0;
	numbComp.value = 1;
	atsType[0].checked=true;
	atsType[0].value='not';
	calc();
	numbComp.oninput = function(event){
		if (numbComp.value>50) {
			numbComp.value = 50;
		}
		calc();
	}
	numbServ.oninput = function(event){
		console.log(event);
		calc();
	}
	numbOf.oninput = function(event){
		calc();
	} 
	sendButton.onclick = function(event){
		var cont=document.querySelector('.modal-cover');
		mv.open(cont.innerHTML);
	}
	for (i=0; i<atsType.length; i++){
		
		atsType[i].onchange = function(event){
			for (i=0; i<atsType.length; i++){
				if (atsType[i].checked){
					baseATS = ats[i];
					calc();					
				}	
			}
		}
	}
	function calc(){
		let totalContent = document.querySelector('.calc-result');
		let total = 0;
		sumOf = numbOf.value*(basePriceOf+numbComp.value*8);
		console.log(sumOf);
		sumComp = numbComp.value*(basePriceComp-numbComp.value*3.2);
		console.log(sumComp);
		sumServ = numbServ.value*basePriceServ;
		console.log(sumServ);
		sumATS = baseATS + numbComp.value*10;
		total = Math.round((sumServ+sumComp+sumOf+sumATS)*100)/100;
		totalContent.innerHTML = '<p>Підсумкова&nbspвартість:</p>'+ '&nbsp&nbsp&nbsp&nbsp<p><span>'+total+ '</span></p>&nbsp' + '<p>&nbsp&nbspгрн.</p>';
	}
}
