function mapGen(w, h, steps, complete) {
	function player(dx, dy) {
		let pixel = ctx.getImageData(13*x+7+6*dx, 13*y+7+6*dy, 1, 1)
		let r= pixel.data[0] 
		let g= pixel.data[1] 
		let b= pixel.data[2] 
		let alpha= pixel.data[3] 
		if (r == 0 && g == 0 && b == 0 && alpha == 255) {
			dx = 0
			dy = 0
		}
		else{ 
			console.log(steps)
			steps++
			$('#steps').text(steps)

			//увеличиваем кол-во шагов на 1 и выводим
		}
		//закрашиваем перса 
		ctx.clearRect(13*x+3, 13*y+3, 10, 10)
		//Меняем координаты
		x+=dx
		y+=dy
		// отрисовываем перса
		ctx.fillRect(13*x+3, 13*y+3, 10, 10)
		if (x >= w) {
			$('#complete').text(complete++)
			console.log(complete)
			if (complete == 10) {
				$('body').empty()
				$('body').append('<h1>ВЫ ВЫИГРАЛИ</h1>')
			}
			else{mapGen(w+5, h+5, 0, complete)}
			
		};
	}
	let canv = document.querySelector('#canv') 
	let ctx = canv.getContext('2d')
	$('#steps').text(Math.floor(steps))
	$('#complete').text(Math.floor(complete))
	canv.width = 13*w+3
	canv.height = 13*h+3
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, 13*w+3, 13*h+3)

	let column = Array(w)
	let right = Array(w)
	let bottom = Array(w) 

	let quan = 1

	for(let str = 0; str < h; str++){
		for(let stolb = 0; stolb< w; stolb++){
			if (str == 0){
				column[stolb] = 0;
			}
			ctx.clearRect(13*stolb + 3, 13*str + 3, 10, 10);
			bottom[stolb] = 0;
			if (right[stolb] == 1){
				right[stolb] = 0;
				column[stolb] = 0;
			}
			if (column[stolb] == 0) {
				column[stolb] = quan++;
			}
		}
		for (let stolb = 0; stolb < w; stolb++){
			bottom[stolb] = Math.floor(Math.random()*2)
			right[stolb] = Math.floor(Math.random()*2)
			if (str != h-1 && right[stolb] == 0) {
				ctx.clearRect(13*stolb + 3, 13*str + 3, 10, 15)
			}
			if (stolb != w-1 && column[stolb+1] != column[stolb] && (bottom[stolb] == 0 || str == h-1)) {
				let l = column[stolb+1];
				for (let j = 0; j < w; j++) {
					if (column[j] == l) {
						column[j] = column[stolb]
					}
				}
				ctx.clearRect(13*stolb+3, 13*str+3, 15, 10)
			}
		}
		for (let stolb = 0; stolb < w; stolb++){
			let p = 0;
			let l = 0;
			for (let j = 0; j < w; j++){
				if (column[stolb] == column[j] && right[j] == 0) {
					p++;
				}
				else{
					l++;
				}
			}
			if (p == 0) {
				right[stolb] = 0
				ctx.clearRect(13*stolb+3, 13*str+3, 10, 15)
			}
		}
	}
	ctx.clearRect(13*w, 13*Math.floor(Math.random()*h)+3, 15, 10)

	let x= 0, y = 0
	//Устанавливаем цвет перса
	ctx.fillStyle = 'green'
	//урсием перса в начал положение
	player(-1, -1)

	window.onkeydown = function (event) {
		if (event.keyCode == 39) {
			player(1, 0)
		}
		if (event.keyCode == 37) {
			player(-1, 0)
		}
		if (event.keyCode == 38) {
			player(0, -1)
		}
		if (event.keyCode == 40) {
			player(0, 1)
		}
	}
}

window.onload = mapGen(15, 15, 0, 0)