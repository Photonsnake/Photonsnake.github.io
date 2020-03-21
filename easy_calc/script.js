setTimeout(function No_Name() {
	let one = prompt('Введите первое число...')
	let two = prompt('Введите второе число...')
	let ghost = prompt('Что делать с ними?')
	if (ghost == '*') {
		otv = one*two
	}
	if (ghost == '-') {
		otv = one-two
	}
	if (ghost == '/') {
		otv = one/two
	}
	if (ghost == '+') {
		otv = +one - (-two)
	}
	alert('Ответ: '+otv)
})