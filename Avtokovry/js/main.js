// <!--Просмотр фотографий во всплывающем окне и листинг фото. Инициализация.-->
		$(document).ready(function () {
			$(".fancybox").fancybox();
		});

	// <!--Маска для телефона-->

		$(function ($) {
			$.mask.definitions['~'] = '[+-]';
			$("#phone, #phone2, #callback-phone").mask("+38 (999) 999 99 99");
		});
		
	// <!--Включение и отключение скрипта в зависимости от разрешения и ширины экрана устройства-->

		$(document).ready(function () {
			var windowScreen = $(window).width();
			if (windowScreen > 1142) {
				$("#reviews-box, #catalog-box").addClass("owl-carousel owl-theme");
				$("#reviews-box, #catalog-box").owlCarousel({
					navigation: true,
					slideSpeed: 300,
					paginationSpeed: 400,
					singleItem: true,
					navigationText: ["", ""]
				});
			}
			else { $("#reviews-box, #catalog-box").removeClass("owl-prev owl-next owl-buttons owl-controls clicable owl-carousel owl-theme "); }
		});
		$(window).resize(function () {
			if ($(window).width() > 1142) {
				$("#reviews-box, #catalog-box").addClass("owl-carousel owl-theme");
				$("#reviews-box, #catalog-box").owlCarousel({
					navigation: true,
					slideSpeed: 300,
					paginationSpeed: 400,
					singleItem: true,
					navigationText: ["", ""]
				});
			}
			else { $("#reviews-box, #catalog-box").removeClass("owl-prev owl-next owl-buttons owl-controls clicable owl-carousel owl-theme "); }
		});

		
		$(document).ready(function () {
			$("._data_name").click(function () {
				if ($("._data_name").val() == 'Ваше Имя*')
					$("._data_name").val('');
			});
			$("._data_tel2").click(function () {
				if ($("._data_tel2").val() == 'Ваш Телефон*')
					$("._data_tel2").val('');
			});
		});


		function call(obj) {
			var msg = $('.' + $(obj).attr('class')).serialize();
			$.ajax({
				type: 'POST',
				url: 'Shelby/Shelby_send.php',
				data: msg,
				success: function (data) {
					switch ($(obj).attr('class')) {
						case "form_one":
							$("._data_tel").val(' ');
							break;
						case "form_two":
							$("._data_tel1").val(' ');
							$("._data_marka").val(' ');
							break;
						case "form_three":
							$("._data_name").val('Ваше Имя*');
							$("._data_tel2").val('Ваш Телефон*');

							$(".black").css('display', 'none');
							$(".callback").css('display', 'none');
							break;
					}
				},
				error: function (xhr, str) {
					alert('Возникла ошибка: ' + xhr.responseCode);
				}
			});
		}