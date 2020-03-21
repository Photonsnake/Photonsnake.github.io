//function Name() {
//	otv = +$('#numberone').val() - (-$('#numbertwo').val());
//	$('p').text("ПОДОЖДИТЕ")
//	setTimeout(OH())
//}
//setTimeout(function OH(otv){$('p').text(otv)},3000)
//let timer = setInterval(function(){
//	$('body').append('LOX')
//}, 0.1)

//setTimeout(function(){
//	clearInterval(timer)
//	$('body').append('The End')
//}, 10000)

let questions = [{first : 67, second : 23, dev : '+', answer : 90},
				{first : 44, second : 16, dev : '-', answer : 28},
				{first : 61, second : 29, dev : '+', answer : 90},
				{first : 74, second : 31, dev : '-', answer : 43},
				{first : 68, second : 79, dev : '-', answer : -11},
				{first : 33, second : 71, dev : '+', answer : 104},
				{first : 75, second : 35, dev : '+', answer : 110},
				{first : 97, second : 16, dev : '-', answer : 81},
				{first : 36, second : 74, dev : '-', answer : -38},
				{first : 12, second : 56, dev : '+', answer : 68},
				{first : 76, second : 34, dev : '+', answer : 110},
				{first : 41, second : 83, dev : '-', answer : -42}];

let timer, current = 0
window.onload = function(){
	let t = 1800;
	$('#first').text(questions[current].first);
	$('#second').text(questions[current].second);
	$('#dev').text(questions[current].dev);
	countdown(t, 'Вы проиграли');
}
function countdown(t, msg) {
	timer = setInterval(function(){
		$('#h').text(t);
		if(t > 0){
			t--;
			if (t == 0) {
				clearInterval(timer)
				$('#h').text(msg)
			}
		}
	},10)
}
function Calc(t) {
	
	if ($('#answer').val() == questions[current].answer) {
		current++;
		if(current<questions.length){
			clearInterval(timer);
			let t = 1800;
			$('#first').text(questions[current].first);
			$('#second').text(questions[current].second);
			$('#dev').text(questions[current].dev);
			$('#answer').val('').focus();
			countdown(t, 'Вы проиграли');
		}
		else{
			$('#h').text('Вы выиграли');
		}
		
	}
	else {
		alert('Неверно');
		$('#answer').val('').focus();
	}
}
//Функция проверяет ответы и вопросы
//если отв не правильный то выводим тот же вопрс