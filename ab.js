/*!
 * Проведение A/B тестов
 *
 * ab_name — название теста
 * ab_var — массив вариантов вида ["Test_A", "Test_B" ] Названия вариантов должны содержать символы допустимые в CSS.
 * Возвращает — выбранный вариант и добавляет для body класс вида: %название_теста%_%выбранный_вариант%
 * 
 * Copyright 2013 Evgeny Krylov http://nopreset.ru
 */

function getCookie(name) {
	var parts = document.cookie.split(name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

function set_ab ( ab_name, ab_var ) {
	var el_count = ab_var.length;
	if ( !getCookie(ab_name) ) {
		var r_ab = Math.floor(Math.random() * el_count);
		var ab_sel = ab_var[r_ab];
		var date = new Date( new Date().getTime() + 1000*60*60*24*7 );
		document.cookie= ab_name + "=" + ab_sel + "; path=/; expires=" + date.toUTCString();
	} 
	else {
		var ab_sel = getCookie(ab_name);
	}
	document.getElementsByTagName('body')[0].className += ' ' + ab_name + '_' + ab_sel ;
	return ab_sel;
}
