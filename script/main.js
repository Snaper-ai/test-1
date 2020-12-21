/* 
	1. setInterval()
	2. получаем текущее время
	3. получаем часы/минуты/секунды
	4. Изменяем текст Н1
	5. Изменяем span
	6. Меняем цвет фона.
*/

setInterval(function () {
	let data = new Date();
	let h = data.getHours();
	h = validation(h);
	let m = data.getMinutes();
	m = validation(m);
	let s = data.getSeconds();
	s = validation(s);

	document.body.style.backgroundColor = "#" + h + m + s;
	let text = document.getElementsByClassName("text");
	text[0].innerHTML = h + ":" + m + ":" + s;
	text[1].innerHTML = "#" + h + m + s;
}, 1000)

function validation(value) {
	if (value < 10) {
		value = "0" + value;
	}
	return (value);
}
