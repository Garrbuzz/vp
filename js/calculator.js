window.onload = function(){
	var numbOf = document.querySelector('#numberOfOffices');
	var numbServ = document.querySelector('#numberOfServers');
	var numbComp = document.querySelector('#numberOfComputers');
	var atsType = document.querySelectorAll('input[name="ats"]');
	var sumOf;
	var sumComp;
	var sumATS;
	var sumServ;
	var basePriceComp = 400;
	var basePriceOf = 400;
	var basePriceServ = 600;
	var basePriceATS = 400;
	numbOf.value=1;
	numbServ.value = 0;
	numbComp.value = 1;
	atsType[0].checked=true;
	atsType[0].value='not';
	calc();
	numbComp.onchange = function(event){

		calc();
	}
	function calc(){
		let totalContent = document.querySelector('.calc-result');
		let total = 0;
		sumOf = numbOf.value*(basePriceOf+numbComp.value*8);
		console.log(sumOf);
		sumComp = numbComp.value*(basePriceComp+numbComp.value*3.6);
		console.log(sumComp);
		sumServ = numbServ.value*basePriceServ;
		total = sumServ+sumComp+sumOf;
		totalContent.innerHTML = '<p>Підсумкова вартість</p>' + '<p>'+ total + sumServ+'</p>';
		
	}
	function test(){alert('wow')}


	

}