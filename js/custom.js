$(document).ready(function(){

	
	var selectedLanguage = '';
	$('.dropdown-item').click(function(event) {
		event.preventDefault();
		selectedLanguage = $(this).html();
		$('.dropdown-toggle').html(selectedLanguage);
	});


	$('.pass_hide_show').click(function(){
		if($(this).hasClass('show')) {
			$(this).next('input').attr('type', 'password');
			$(this).removeClass('show');
		} else {
			$(this).next('input').attr('type', 'text');
			$(this).addClass('show');
		}
	});


	$('.custom_select.one').select2({
		dropdownParent: $('.option_dropdown_container.one'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.two').select2({
		dropdownParent: $('.option_dropdown_container.two'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.three').select2({
		dropdownParent: $('.option_dropdown_container.three'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.four').select2({
		dropdownParent: $('.option_dropdown_container.four'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.five').select2({
		dropdownParent: $('.option_dropdown_container.five'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.six').select2({
		dropdownParent: $('.option_dropdown_container.six'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.seven').select2({
		dropdownParent: $('.option_dropdown_container.seven'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.eight').select2({
		dropdownParent: $('.option_dropdown_container.eight'),
		minimumResultsForSearch: Infinity,
	});
	$('.custom_select.nine').select2({
		dropdownParent: $('.option_dropdown_container.nine'),
		minimumResultsForSearch: Infinity,
	});


	$('#multi_select').select2({
		dropdownParent: $('.option_dropdown_container.multi_select'),
		closeOnSelect: false,
	});
});