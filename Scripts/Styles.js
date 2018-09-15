addEventListener('load', 
	function () {
		var inputs = document.querySelectorAll('tbody:first-of-type input');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].onblur = function () {
				if ('' != inputs[i].value) {
					inputs[i].style.borderBottom = '1px solid rgb(255, 255, 255)';
				}
				if ('' == inputs[i].value) {
					inputs[i].style.borderBottom = '1px solid rgb(255, 162, 0)';
				}
			};
			inputs[i].onfocus = function () {
				inputs[i].style.borderBottom = '1px solid rgb(255, 255, 255)';
			};
		}

		var textarea = document.getElementById('tel');
		textarea.onblur = function () {
			if ('' != textarea.value) {
				textarea.style.border = '1px dotted rgb(255, 255, 255)';
			}
			if ('' == textarea.value) {
				textarea.style.border = '1px dotted rgb(255, 162, 0)';
			}
		};
		textarea.onfocus = function () {
			textarea.style.border = '1px dotted rgb(255, 255, 255)';
		};

		var selects = document.getElementsByTagName('select');
		for (let i = 0; i < selects.length; i++) {
			if ('Select' == selects[i].selectedOptions[0].value) {
				selects[i].style.fontStyle = 'italic';
				selects[i].style.color = 'rgb(117, 117, 117)';
			}
			selects[i].addEventListener('change', function () {
				if ('Select' == selects[i].selectedOptions[0].value) {
						selects[i].style.fontStyle = 'italic';
						selects[i].style.color = 'rgb(117, 117, 117)';
				} else {
					selects[i].style.fontStyle = 'normal';
					selects[i].style.color = 'rgb(255, 193, 85)';
				}
			});
		}
		selects[1].addEventListener('change', function () {
			for (let i = 2; i < 4; i++) {
				selects[i].style.fontStyle = 'italic';
				selects[i].style.color = 'rgb(117, 117, 117)';
			}
		})
		selects[2].addEventListener('change', function () {
			selects[3].style.fontStyle = 'italic';
			selects[3].style.color = 'rgb(117, 117, 117)';
		})
	})