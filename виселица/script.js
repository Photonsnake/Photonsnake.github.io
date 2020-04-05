//let T = 5;
//const name3 = 5
//while(T--){
//	var name = 0;
//	let name2 = 1;
//	Три одинаковых способа увеличить переменую на единицу
//	name = name +1
//	name += 1
//	name++
//	name ++;
//	name2 ++;
//}
//console.log(name)
//console.log(name2)
//let a = 6;
//let b = 5;
//if (a < b) {
//	console.log("LOL")
//}
//else if (a <= b) {
//	console.log("Ты кто")
//}
//else{
//	console.log("прувэт")
//}
//let otvet = prompt("Иди от сюда")
//console.log(otvet)
//console.log(typeof(otvet))

function randomWord(massiv) {
	let random = massiv[Math.floor(Math.random()*massiv.length)];
	return random 
}

function setWord() {
	const words = ['тюлень', 'игры', 'гейминг', 'задрот', 'геймер', 'человек', 'человечество', 'смешно', 'крокодил', 'чёртики', 'животное', 'смешарики', 'уплощенно-пинакоидально-ромбоэдрический'];
	let word = randomWord(words);
	return word
}
let name = "ПРИМАТ"
let slovo = setWord();
let word = []
for (let i = 0; i < slovo.length; i++) {
	word[i] = "_";
}
let ostalos = slovo.length
let errors = 0
let wrong = []

function getName() {
	let inp = $("#name").val()
	if (inp.length > 0) {
		name = inp
	};
	$('body').empty()
	$('body').append('<div class="div">')
	$('.div').append('<h1>'+ word.join(' ') +'</h1>')
	$('.div').append('<input id="ans">')
	$('#ans').focus()
	$('.div').append('<button onclick="game()">Отправить</button>')
	$('body').append('<canvas id="canv"></canvas>')
	$('#canv').attr({
		width: '1000',
		height: '500'
	});
	$('.div').height('115px')
}	

function game() {
	let letter =  $('#ans').val().toLowerCase()
	let ugadal = false
	for (var i = slovo.length - 1; i >= 0; i--) {
		if(slovo[i] == letter){
			word[i] = letter.toUpperCase()
			ugadal = true
			ostalos--;
		}
	};

	if (ugadal == false) {
		errors++;
		wrong.push(letter.toUpperCase())
		drawV(errors)
	}
	if (ostalos == 0) {
		$('.div').empty()
		$('#canv').fadeOut(2000, function() {			
		let canv = $('#canv')
		canv.clearCanvas()
		canv.drawText({
			strokeStyle: 'black',
			strokeWidth:3,
			fontSize: 25,
         	text: name+'(ты), вы выиграли!',
         	x: 500, y: 125
		})
		})
		$('#canv').fadeIn(2000)
	}
	else if(errors == 10){
		$('div').empty()
		theEnd()
	}
	else{
		$('.div').empty()
		$('.div').append('<h1>'+ word.join(' ') +'</h1>')
		$('.div').append('<p>'+ wrong.join(', ')+'</p>')
		$('.div').append('<input id="ans">')
		$('#ans').focus()
		$('.div').append('<button onclick="game()">Отправить</button>')
	}
}
function theEnd() {
	let canv = $('#canv')
	canv.drawLine({
			strokeStyle : 'black', 
			strokeWidth: 4,
			ronded: true,
			startArrow: true,
			arrowRadius: 15,
			arrowAngle: 90,
			x1: 450, y1: 150,
			x2: 600, y2: 150
		}).drawLine({
			strokeStyle: 'black',
			strokeWidth:3,
			x1: 350, y1: 175,
			x2: 400, y2: 225
		}).drawText({
			strokeStyle: 'black',
			strokeWidth:3,
			fontSize: 25,
         	text: name+'(ты)',
         	x: 500, y: 125
         })
}
function drawV(elem) {
	let canv = $('#canv');
	if (elem == 1) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 250,
		y1: 250,
		x2: 100,
		y2: 250
		})
	}
	if (elem == 2) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 200,
		y1: 250,
		x2: 200,
		y2: 50
		})}
	if (elem == 3) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 200,
		y1: 50,
		x2: 350,
		y2: 50
		})
	}
	if (elem == 4) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 350,
		y1: 50,
		x2: 350,
		y2: 100
		})
	}
	if (elem == 5) {
		canv.drawArc({
	 	fillStyle: "black",
	  	strokeStyle: "black",
	 	radius: 10,
	 	x: 350,
	 	y: 100
		})
	}
	if (elem == 6) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 350,
		y1: 100,
		x2: 350,
		y2: 175
		})
	}
	if (elem == 7) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 350,
		y1: 125,
		x2: 300,
		y2: 150
		})
	}
	if (elem == 8) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 350,
		y1: 125,
		x2: 400,
		y2: 150
		})
	}
	if (elem == 9) {
		canv.drawLine({
		strokeStyle: 'black',
		strokeWidth:3,
		x1: 350,
		y1: 175,
		x2: 300,
		y2: 225
		})
	}
}