let canvas = document.querySelector('#canv');
let canv = canvas.getContext('2d');

// Устанавливаем размер канваса такой же как размер окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Изменение размера канваса, если меняется размер окна
window.onresize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let cardW = canvas.width/10
	for (let i = 0; i <P_cards.length; i++) {
			P_cards[i].resize(i, cardW, canvas.height-cardW*1.5)
			NPC_cards[i].resize(i, cardW, 0)
	}
	Draw()
}

canvas.onmousemove = function(e){
	let cardW = canvas.width/10;
	for (let i = 0; i<P_cards.length;i++) {
		if(onCard(i, e.clientX, e.clientY)){
			P_cards[i].resize(i, cardW, canvas.height-cardW*1.875)
		}
		else{
			P_cards[i].resize(i, cardW, canvas.height-cardW*1.5)
		}
	}
}
canvas.onclick = function(e){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let cardW = canvas.width/10;
	for(let i =0; i < P_cards.length;i++){
		let isClicked = onCard(i, e.clientX, e.clientY)
		if (isClicked) {
			move[0] = new Card(P_cards[i].image.src, P_cards[i].DAM, P_cards[i].HP)
			let rand = Math.floor(Math.random() * P_cards.length)
			move[1] = new Card(NPC_cards[rand].image.src, NPC_cards[rand].DAM, NPC_cards[rand].HP)
			P_cards.splice(i, 1)
			NPC_cards.splice(rand, 1)
			$('#canv').css('pointer-events', 'none')
			move[0].resize(3, cardW, (canvas.height/2 - cardW*1.5)/2)
			move[1].resize(1, cardW, (canvas.height/2 - cardW*1.5)/2)
			setTimeout(function(){
				check(move[0].DAM, move[0].HP, move[1].DAM, move[1].HP)
				move = []
				$('#canv').css('pointer-events', 'auto')
				if(P_cards.length == 0){
					for (let i = 0; i < 5; i++) {
						let rand = Math.floor(Math.random()*deck.length);
						P_cards.push(new Card(deck[rand].img, deck[rand].DAM, deck[rand].HP));
						// Задаём размер и положение карты
						let cardW = canvas.width/10;
						P_cards[i].resize(i, cardW, canvas.height-cardW*1.5);
					}
					for (let i = 0; i < 5; i++) {
						let rand = Math.floor(Math.random()*deck.length);
						NPC_cards.push(new Card(deck[rand].img, deck[rand].DAM, deck[rand].HP))
						let cardW = canvas.width/10;
						NPC_cards[i].resize(i, cardW, 0);
					}
					if (P_HP <= 0 || NPC_HP <=0) {
						clearInterval(interval)
						canv.clearRect(0, 0, canvas.width, canvas.height)
						TheEnd()
					}
				}
			}, 2000);
			break
		}
	}
	for(let i =0; i< P_cards.length; i++){
		P_cards[i].resize(i, cardW, canvas.height-cardW*1.5);
		NPC_cards[i].resize(i, cardW, 0);
	}
}
// Класс карт
class Card {
	// Функция, которая создаёт новую карту
	constructor(img, power, hp) {
		// Задаём карте её характеристики
		this.image = new Image();
		this.image.src = img;

		this.DAM = power;
		this.HP = hp

		// Координаты карты
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;

		// Рубашка карты
		this.back = new Image();
		this.back.src = 'cards/999.jpg';
	}

	resize(i, cardW, y) {
		this.width = cardW;
		this.height = cardW*1.5;
		this.x = (i+2)*cardW + i*cardW/4;
		this.y = y;
	}
}

// Создаём колоду
const deck = [
	{img: 'Cards/1.jpg', DAM: 1, HP:1},
	{img: 'Cards/2.jpg', DAM: 2, HP:2},
	{img: 'Cards/3.jpg', DAM: 2, HP:3},
	{img: 'Cards/4.jpg', DAM: 1, HP:2},
	{img: 'Cards/5.jpg', DAM: 3, HP:3},
	{img: 'Cards/6.jpg', DAM: 3, HP:4},
	{img: 'Cards/7.jpg', DAM: 3, HP:5},
	{img: 'Cards/8.jpg', DAM: 3, HP:6},
	{img: 'Cards/9.jpg', DAM: 1, HP:3},
	{img: 'Cards/10.jpg', DAM: 2, HP:4},
	{img: 'Cards/11.jpg', DAM: 2, HP:5},
	{img: 'Cards/12.jpg', DAM: 1, HP:4},
	{img: 'Cards/13.jpg', DAM: 4, HP:4},
	{img: 'Cards/14.jpg', DAM: 4, HP:5},
	{img: 'Cards/15.jpg', DAM: 4, HP:6},
	{img: 'Cards/16.jpg', DAM: 4, HP:7}
];

// Создание колоды игрока
let P_cards = [];
for (let i = 0; i < 5; i++) {
	let rand = Math.floor(Math.random()*deck.length);
	P_cards.push(new Card(deck[rand].img, deck[rand].DAM, deck[rand].HP));
	// Задаём размер и положение карты
	let cardW = canvas.width/10;
	P_cards[i].resize(i, cardW, canvas.height-cardW*1.5);
}

let NPC_cards = []
for (let i = 0; i < 5; i++) {
	let rand = Math.floor(Math.random()*deck.length);
	NPC_cards.push(new Card(deck[rand].img, deck[rand].DAM, deck[rand].HP))
	let cardW = canvas.width/10;
	NPC_cards[i].resize(i, cardW, 0);

}
// Функция отрисовки игрового поля
function Draw() {
	canv.clearRect(0, 0, canvas.width, canvas.height)
	for (let i = 0; i < P_cards.length; i++) {
		// Отрисовка колоды игрока
		canv.drawImage(
			P_cards[i].image, // Картинка
			0, 0, // Координаты лев. верх. угла вырезаемого куска картинки
			P_cards[i].image.width, P_cards[i].image.height, // Размеры вырезаемого куска
			P_cards[i].x, P_cards[i].y, // Координаты вырезанного изображения на холсте
			P_cards[i].width, P_cards[i].height //Размер картинки на холсте
		);
	}
		for (let i = 0; i < NPC_cards.length; i++) {
		// Отрисовка колоды игрока
		canv.drawImage(
			NPC_cards[i].back, // Картинка
			0, 0, // Координаты лев. верх. угла вырезаемого куска картинки
			NPC_cards[i].back.width, NPC_cards[i].back.height, // Размеры вырезаемого куска
			NPC_cards[i].x, NPC_cards[i].y, // Координаты вырезанного изображения на холсте
			NPC_cards[i].width, NPC_cards[i].height //Размер картинки на холсте
		);
	}
	for (let i = 0; i < move.length; i++) {
		// Отрисовка колоды игрока
		canv.drawImage(
			move[i].image, // Картинка
			0, 0, // Координаты лев. верх. угла вырезаемого куска картинки
			move[i].image.width, move[i].image.height, // Размеры вырезаемого куска
			move[i].x, move[i].y, // Координаты вырезанного изображения на холсте
			move[i].width, move[i].height //Размер картинки на холсте
		);
	}
}
let P_HP = 50;
let NPC_HP = 50;
let move= {NPC:0, P: 0}
function check(dam1, dam2, hp1, hp2) {
	let attack1 = hp2 - dam1;
	let attack2 = hp1 - dam2;
	if (attack1 < 0){
		P_HP += attack1;
	}
	if (attack2 < 0) {
		NPC_HP += attack2;
	}
}
function onCard(i, x, y){
	let right = x > P_cards[i].x
	let left = x < P_cards[i].x + P_cards[i].width
	let down = y > P_cards[i].y
	let up = y < P_cards[i].y + P_cards[i].height
	if (right && left && up && down) {
		return true
	}
	else{
		return false
	}
}

let interval;
window.onload = function() {
	interval = setInterval(Draw, 1000/60)
}