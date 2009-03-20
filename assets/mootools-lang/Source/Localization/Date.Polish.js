/*
Script: Date.Polish.js
	Date messages for Polish.

	License:
		MIT-style license.

	Authors:
		Oskar Krawczyk

*/

MooTools.lang.set('pl-PL', 'Date', {

	months: function(i) {
		return ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'][i];
	},
	days: function(i) {
		return ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'][i];
	},
	dateOrder: ['month', 'date', 'year', '/'],
	AM: 'nad ranem',
	PM: 'po południu',

	/* Date.Extras */
	ordinal: function(dayOfMonth){
		return (dayOfMonth > 3 && dayOfMonth < 21) ? 'ty' : ['ty', 'szy', 'gi', 'ci', 'ty'][Math.min(dayOfMonth % 10, 4)];
	},

	lessThanMinuteAgo: 'mniej niż minute temu',
	minuteAgo: 'około minutę temu',
	minutesAgo: '{delta} minut temu',
	hourAgo: 'około godzinę temu',
	hoursAgo: 'około {delta} godzin temu',
	dayAgo: '1 dzień temu',
	daysAgo: '{delta} dni temu',
	lessThanMinuteUntil: 'za niecałą minutę',
	minuteUntil: 'za około minutę',
	minutesUntil: 'za {delta} minut',
	hourUntil: 'za około godzinę',
	hoursUntil: 'za około {delta} godzin',
	dayUntil: 'za 1 dzień',
	daysUntil: 'za {delta} dni'

});