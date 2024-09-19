//for ibg
$(document).ready(function () {
	ibg();
});

function ibg() {
	$('.ibg').each(function () {
		var imgSrc = $(this).find('img').attr('src');
		if (imgSrc) {
			$(this).css('background-image', 'url("' + imgSrc + '")');
		}
	});
}


//scroll
function setScrollIntoView(element) {
	$(element).get(0).scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

$(".scroll").click(function () {
	event.preventDefault();

	const menu = $(".menu").get(0);
	setScrollIntoView(menu);
});


//menu
$(".menu__link").click(function () {
	event.preventDefault();

	let i = $(this).data('menu');
	if (i == 'home') {
		const home = $(".main-screen").get(0);
		setScrollIntoView(home);
	} else if (i == 'about') {
		const about = $(".about").get(0);
		setScrollIntoView(about);
	} else if (i == 'portfolio') {
		const portfolio = $(".portfolio").get(0);
		setScrollIntoView(portfolio);
	} else if (i == 'contact') {
		const contact = $(".contact").get(0);
		setScrollIntoView(contact);
	}

	$('.menu__link').removeClass('active');
	$(this).addClass('active');
});


$(".footer__link").click(function () {
	

	let i = $(this).data('fmenu');
	if (i == 'home') {
		event.preventDefault();
		const home = $(".main-screen").get(0);
		setScrollIntoView(home);
	} else if (i == 'contact') {
		event.preventDefault();
		const contact = $(".contact").get(0);
		setScrollIntoView(contact);
	}

});

//filter
$('.filter__item').click(function (event) {
	let i = $(this).data('filter');
	if (i == 'all') {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.f_' + i).show();
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});