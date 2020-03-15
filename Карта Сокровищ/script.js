window.onload = function() {
	function getRandomNumber(size) {
		return Math.floor(Math.random()*size)
	}
	function getDistance(event, target) {
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		return Math.sqrt((difX*difX)+(difY*difY));
	}
	let width = $('#map').width()
	let height = $('#map').height()
	let clicks = 0;
	console.log(width)
	console.log(height)

	//Создаём клад
	let target = {
		x:[getRandomNumber(width)],
		y:[getRandomNumber(height)]
	};

	$('#map').css('cursor', 'crosshair');
	$('#map').click(function(event){
		clicks++;
		let distance = getDistance(event, target)
		let hint = getHint(distance)
		if (clicks == 25) {
			clicks = 'Вы проиграли'
		}	
		$('#distance').text(hint)
		$('h2').text('Клики: '+clicks)
	//	if (distance < 35) {}
			
		console.log(distance)
	});
	function getHint (distance) {
		if (distance > 450) {
			return 'Тундра'
		}
		if (distance > 250 && distance < 450) {
			return 'Очень-холодно'
		}
		if (distance > 150 && distance < 250){
			return 'Холодно'
		}
		if (distance >100 && distance < 150) {
			return 'Нормально'
		}
		if (distance > 75&& distance <100){
			return 'Теплее'
		}
		if (distance < 75&& distance > 35) {
			return 'Горишь'
		}
		if (distance < 35){
			return'Пустыня'
		}
		if (distance < 20) {
			return 'Вы выиграли'
		}
	}



}