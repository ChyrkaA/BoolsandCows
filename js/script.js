"use strict";

alert('Давай поиграем в игру Быки и коровы!');

//Создаем массив с рандомных не повторяющихся цифр

let arr = [];
second: for (let i = 0; i < 4; i++) {

	third: for (let j = 0;; j++) {
		/*условие переписано ниже циклами с метками. 
		if (randomNumber !== arr[0] && randomNumber !== arr[1] && randomNumber !== arr[2] && randomNumber !== arr[3]) { //проверка, нет ли повторений в массиве.
			arr[i] = randomNumber;
			break; */
		let randomNumber = Math.round(Math.random() * 9);
		for (let k = 0; k <= i; k++) {
			if (randomNumber !== arr[k]) {
				continue;
			}
			continue third;
		}
		arr[i] = randomNumber;
		continue second;
	}
}
console.log(arr);

const btn = document.getElementById('btn');
let num;
btn.addEventListener('click', function (e) {
	e.preventDefault();
	num = document.getElementById('number').value;
	document.getElementById('number').value = "";
	chislo(num);
});

function chislo(data) {
	let num = data;
	if (num >= 100 && num <= 9999) {
		let arr2 = Array.from(num.toString(), Number);
		for (let i = 0; i < arr2.length; i++) {
			let cache = arr2[i];
			for (let j = i + 1; j < arr2.length; j++) {
				if (cache === arr2[j]) {
					alert("Некоторые цифры повторяются, будьте внимательнее!");
					
				}break;
			}break;
		}
		console.log(arr2);
		if (arr.join(',') === arr2.join(',')) {
			alert('Угадал');
		} else {
			let bulls = 0;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === arr2[i]) {
					bulls = bulls + 1;
				}
			}
			let cows = 0;
			for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j < arr2.length; j++) {
					if (arr2[j] === arr[i]) {
						cows = cows + 1;
					}
				}
			}
			console.log(arr, arr2);
			alert('Быки: ' + (bulls) + ' Коровы: ' + (cows - bulls));
		} 
	} else {
		alert("Число должно быть в диапазоне от 0*** до 9999, будьте внимательнее!");
	}
}


/* if (number >= 100 && number <= 9999) {
	var arr2 = Array.from(number.toString(), Number); //превращаем введенное число в массив. Актуально и для строки.
	for (let i = 0; i < arr2.length; i++) {
		let cache = arr2[i];
		for (let j = i + 1; j < arr2.length; j++) {
			if (cache === arr2[j]) {
				alert("Некоторые цифры повторяются, будьте внимательнее!");
			}
		}
	}
} else {
	alert("Число должно быть в диапазоне от 0*** до 9999, будьте внимательнее!");
}

if (arr.join(',') === arr2.join(',')) {
	alert('Угадал');
} else {
	let bulls = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr2[i]) {
			bulls = bulls + 1;
		}
	}
	let cows = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr2[j] === arr[i]) {
				cows = cows + 1;
			}
		}
	}
	console.log(arr, arr2);
	alert('Быки: ' + (bulls) + ' Коровы: ' + (cows - bulls));
} */

/* //Получаем от пользователя последовательность цифр
for (let i = 0; i <= 1; i++) {
	first: for (let k = 0; k <= 1; k++) { //ссылка
		
		/* let chislo = prompt("Введите число от 0*** до 9***, цифры не повторяйте!", "");
		if (chislo >= 100 && chislo <= 9999) {
			var arr2 = Array.from(chislo.toString(), Number); //превращаем введенное число в массив. Актуально и для строки.

			/*  if ((arr2[0] !== arr2[1] && arr2[0] !== arr2[2] && arr2[0] !== arr2[3] && arr2[1] !== arr2[2] && arr2[1] !== arr2[3] && arr2[2] !== arr2[3]) === true) {
				 break; ниже переписано через 2 цикла
			 } 
			for (let i = 0; i < arr2.length; i++) {
				let cache = arr2[i];
				for (let j = i + 1; j < arr2.length; j++) {
					if (cache === arr2[j]) {
						alert("Некоторые цифры повторяются, будьте внимательнее!");
						k--;
						continue first; //ссылка, куда вернуться, если не выполняется условие.
					}
				}
			}
			break;
		}
		k--;
		alert("Число должно быть в диапазоне от 0*** до 9999, будьте внимательнее!");
	}
	console.log(arr, arr2);
	if (arr.join(',') === arr2.join(',')) {
		alert('Угадал');
		break;
	} else {
		let bulls = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === arr2[i]) {
				bulls = bulls + 1;
			}
		}
		let cows = 0;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
				if (arr2[j] === arr[i]) {
					cows = cows + 1;
				}
			}
		}
		console.log(arr, arr2);
		alert('Быки: ' + (bulls) + ' Коровы: ' + (cows - bulls));
		
		i--;

	}

} */