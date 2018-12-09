window.onload = function(){
	var numbOf = document.querySelector('#numberOfOffices');
	var numbServ = document.querySelector('#numberOfServers');
	var numbComp = document.querySelector('#numberOfComputers');
	var atsType = document.querySelectorAll('input[name="ats"]');
	var sendMail = document.querySelector('.send-mail');
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
	var totalCost = 0;
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
	sendMail.onclick = function(event){
		let cont=document.querySelector('.modal-cover');
		mv.open(cont.innerHTML);
		let sendName = document.querySelector('.modal-for-mprice-oursoursing input[name="name"]');
		let sendEmail = document.querySelector('.modal-for-mprice-oursoursing input[name="email"]');
		let sendPhone = document.querySelector('.modal-for-mprice-oursoursing input[name="phone"]');
		let sendButton = document.querySelector('.send-button button');
		let subject = 'Повідомлення з сайту www.glukov.net.ua';
		let message = sendName.value + 'Ви отримали розрахункову вартість обслуговування вашої інфраструктури. Вона становить ' + totalCost + ' грн.' 
		sendButton.onclick = function(event){
			let patternEmail=/\w+@\w+\.\w+/;
			if (!patternEmail.test(sendEmail.value)){
   	 		alert('Невірний формат адреси електронної пошти');
  			} else {
				console.log('subject = ' + subject);
				console.log('message = ' + message);
				console.log('to = ' + sendEmail.value);
				let body = "subject=" + encodeURIComponent(subject) + "&message=" 
				+ encodeURIComponent(message) + "&to=" + encodeURIComponent(sendEmail.value);
				let xhr = new XMLHttpRequest();
			    xhr.open("POST", "../../php/sendmessage.php", true);
			    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			    xhr.send(body);
			    xhr.onreadystatechange = function(){
				    if (xhr.readyState===4) {
				      console.log('xhr='+xhr.readyState);
				      var result = JSON.parse(xhr.responseText);
				      console.log(result);
				   	}
			    }
			}    
			
		}

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
		totalCost = total;
		totalContent.innerHTML = '<p>Підсумкова&nbspвартість:</p>'+ '&nbsp&nbsp&nbsp&nbsp<p><span>'+total+ '</span></p>&nbsp' + '<p>&nbsp&nbspгрн.</p>';
	}
}
