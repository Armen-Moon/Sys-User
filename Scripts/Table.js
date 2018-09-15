onload = function () {
	
	var main = document.createElement('main'),
		form = document.createElement('form'),
		table = document.createElement('table'),
		thead = table.createTHead(),
		tbody0 = table.createTBody(),
		tbody1 = table.createTBody(),
		tfoot = table.createTFoot(),
		caption = thead.insertRow().insertCell();

	function createCaption() {
		var content = 'SysUser',
			arrContent = content.split('');

		for (let i = 0; i < arrContent.length; i++) {
			let span = document.createElement('span');
			span.innerText = arrContent[i];
			caption.appendChild(span);
		}
	}

	function createTBody(options, tbody) {
		for (let i = 0; i < options.length; i++) {
			let tr = tbody.insertRow();

			for (let j = 0; j < options[i].length; j++) {
				let td = tr.insertCell(),
					cell = options[i][j];

				(cell.text != undefined) && (td.innerText = cell.text);
				(cell.colspan != undefined) && td.setAttribute('colspan', cell.colspan);
				(cell.className != undefined) && td.setAttribute('class', cell.className);
				(cell.id != undefined) && td.setAttribute('id', cell.id);

				function createTDChild(condition, child) {
					if (condition) {
						let tdChild = document.createElement(child.tagName);
						td.appendChild(tdChild);
						(child.text != undefined) && (tdChild.innerText = child.text);
						(child.id != undefined) && tdChild.setAttribute('id', child.id);
						(child.name != undefined) && tdChild.setAttribute('name', child.name);
						(child.type != undefined) && tdChild.setAttribute('type', child.type);
						(child.attrFor != undefined) && tdChild.setAttribute('for', child.attrFor);
						(child.placeholder != undefined) && tdChild.setAttribute('placeholder', child.placeholder);
						(child.value != undefined) && tdChild.setAttribute('value', child.value);
					}
				}
				createTDChild(cell.child0 != undefined, cell.child0);
				createTDChild((tbody == tbody1) && (cell.child1 != undefined), cell.child1);
			}
		}
	}

	function createButtons() {
		var btnCell = tfoot.insertRow().insertCell();

		for (let i = 0; i < source.buttons.length; i++) {
			let button = btnCell.appendChild(document.createElement('input'));
			button.setAttribute('type', source.buttons[i].type);
			button.setAttribute('value', source.buttons[i].value);
			(source.buttons[i].id != undefined) && button.setAttribute('id', source.buttons[i].id);
		}

		var uploadLbl = document.createElement('label');
		uploadLbl.innerText = 'Upload';
		uploadLbl.setAttribute('for', 'upload');
		btnCell.appendChild(uploadLbl);
	}

	createCaption();
	createTBody(source.firstTBody, tbody0);
	createTBody(source.secondTBody, tbody1);
	createButtons();

	form.appendChild(table);
	main.appendChild(form);
	document.body.appendChild(main);

	function createOptions() {
		var selects = document.getElementsByTagName('select');
		for (let i = 0; i < selects.length; i++) {
			selects[i].appendChild(new Option('Select'));
		}

		var jobTitleSel = document.getElementById('jobTitle');
		for (let i = 0; i < jobTitles.length; i++) {
			var option = new Option(jobTitles[i], jobTitles[i]);
			jobTitleSel.appendChild(option);
		}

		// createAddress
		var countrySel = document.getElementById('country'),
			stateSel = document.getElementById('state'),
			citySel = document.getElementById('city');

		for (var country in addressData) {
			countrySel.options[countrySel.options.length] = new Option(country, country);
		}

		countrySel.onchange = function () {
			stateSel.length = 1;
			citySel.length = 1;
			if (0 == this.selectedIndex) return;
			for (let state in addressData[this.value]) {
				stateSel.options[stateSel.options.length] = new Option(state, state);
			}
		};
		stateSel.onchange = function () {
			citySel.length = 1;
			if (0 == this.selectedIndex) return;
			let cities = addressData[countrySel.value][stateSel.value];
			for (let i = 0; i < cities.length; i++) {
				citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
			}
		};
	}
	createOptions();

	var saveData = document.getElementById('save'),
		inputs = document.querySelectorAll('tbody:first-of-type input'),
		selects = document.getElementsByTagName('select'),
		textarea = document.getElementById('tel'),
		checkboxes = document.querySelectorAll('[type=checkbox]'),
		radios = document.querySelectorAll('[type=radio]');

	// add to localStorage
	saveData.addEventListener('click', function a() {
		for (let i = 0; i < inputs.length; i++) {
			localStorage.setItem(inputs[i].name, inputs[i].value);
		}

		for (let i = 0; i < selects.length; i++) {
			(0 != selects[i].selectedIndex) &&
			localStorage.setItem(selects[i].name, selects[i].selectedOptions[0].value);
		}

		for (let i = 0; i < radios.length; i++) {
			(radios[i].checked) && localStorage.setItem('gender', radios[i].id);
		}

		var arrChecked = [];
		for (let i = 0; i < checkboxes.length; i++) {
			(checkboxes[i].checked) && arrChecked.push(`'${checkboxes[i].name}'`);
			localStorage.setItem('profitLevel', `[${arrChecked}]`)
		}

		localStorage.setItem(textarea.name, textarea.value);
	});

	// get from localStorage
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = localStorage.getItem(inputs[i].name);
	}

	localStorage.getItem('gender') && document.querySelector(`[id='${localStorage.getItem('gender')}']`).setAttribute('checked', 'checked');

	if (localStorage.getItem('profitLevel')) {
		var checkedProfLevels = eval(localStorage.getItem('profitLevel'));
		for (let i = 0; i < checkedProfLevels.length; i++) {
			document.querySelector(`[name='${checkedProfLevels[i]}']`).setAttribute('checked', 'checked');
		}
	}

	textarea.value = localStorage.getItem(textarea.name);
};