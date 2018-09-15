var source = {
	firstTBody: [
		[
			{ text: 'User Info', colspan: 2},
		],
		[
			{ child0: { tagName: 'label', text: 'First Name', attrFor: 'name' } },
			{ child0: { tagName: 'input', type: 'text', id: 'name', name: 'name', placeholder: 'Enter your name' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Last Name', attrFor: 'surname' } },
			{ child0: { tagName: 'input', type: 'text', id: 'surname', name: 'surname', placeholder: 'Enter your surname' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Age', attrFor: 'age' } },
			{ child0: { tagName: 'input', type: 'number', id: 'age', name: 'age', placeholder: 'Age' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Password', attrFor: 'pass' } },
			{ child0: { tagName: 'input', type: 'password', id: 'pass', name: 'pass', placeholder: 'New password' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Confirm', attrFor: 'rePass' } },
			{ child0: { tagName: 'input', type: 'password', id: 'rePass', name: 'rePass', placeholder: 'Re-enter password' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Job Title' } },
			{ child0: { tagName: 'select', id: 'jobTitle', name: 'jobTitle', } }
		]
	],
	secondTBody: [
		[
			{ text: 'Security', colspan: 2 }
		],
		[
			{ child0: { tagName: 'label', text: 'Gender', attrFor: 'male' } },
			{
				className: 'sexOption',
				child0: { tagName: 'label', text: 'M', attrFor: 'male' },
				child1: { tagName: 'input', type: 'radio', id: 'male', name: 'sex' }
			},
			{
				className: 'sexOption',
				child0: { tagName: 'label', text: 'F', attrFor: 'female' },
				child1: { tagName: 'input', type: 'radio', id: 'female', name: 'sex' }
			},
		],
		[
			{ child0: { tagName: 'label', text: 'Profit', attrFor: 'profA' } },
			{
				className: 'profOption',
				child0: { tagName: 'label', text: 'A', attrFor: 'profA' },
				child1: { tagName: 'input', type: 'checkbox', id: 'profA', name: 'levelA', }
			},
			{
				className: 'profOption',
				child0: { tagName: 'label', text: 'B', attrFor: 'profB' },
				child1: { tagName: 'input', type: 'checkbox', id: 'profB', name: 'levelB' }
			},
			{
				className: 'profOption',
				child0: { tagName: 'label', text: 'C', attrFor: 'profC' },
				child1: { tagName: 'input', type: 'checkbox', id: 'profC', name: 'levelC' }
			},
		],
		[
			{ child0: { tagName: 'label', text: 'Teletype', attrFor: 'tel' } },
			{ child0: { tagName: 'textarea', id: 'tel', name: 'teletype', placeholder: 'Call me' } }
		],
		[
			{ child0: { tagName: 'label', text: 'Country' } },
			{ child0: { tagName: 'select', id: 'country', name: 'country' } }
		],
		[
			{ child0: { tagName: 'label', text: 'State' } },
			{ child0: { tagName: 'select', id: 'state', name: 'state' } }
		],
		[
			{ child0: { tagName: 'label', text: 'City' } },
			{ child0: { tagName: 'select', id: 'city', name: 'city' } }
		]
	],
	buttons: [
		{ type: 'file', value: 'Upload', id: 'upload' },
		{ type: 'reset', value: 'Cancel', id: 'cancel' },
		{ type: 'button', value: 'Save', id: 'save' }
	]
};

var jobTitles = ['Intern', 'Junior', 'Middle', 'Senior', 'Lead'];

var addressData = {
	'Armenia': {
		'Aragatsotn': ['Aparan', 'Ashtarak', 'Talin'],
		'Ararat': ['Ararat', 'Artashat', 'Masis', 'Vedi'],
		'Armavir': ['Armavir', 'Metsamor', 'Vagharshapat'],
		'Gegharkunik': ['Chambarak', 'Gavar', 'Martuni', 'Sevan', '	Vardenis'],
		'Kotayk': ['Abovyan', 'Byureghavan', 'Charentsavan', 'Hrazdan', 'Nor Hachn', 'Tsaghkadzor', 'Yeghvard'],
		'Lori': ['Akhtala', 'Alaverdi', 'Spitak', 'Stepanavan', 'Tashir', 'Tumanyan', 'Vanadzor'],
		'Shirak': ['Artik', 'Gyumri', 'Maralik'],
		'Syunik': ['Agarak', 'Dastakert', 'Goris', 'Kajaran', 'Kapan', 'Meghri', 'Sisian'],
		'Tavush': ['Ayrum', 'Berd', 'Dilijan', 'Ijevan', 'Noyemberyan'],
		'Vayots Dzor': ['Jermuk', 'Vayk', 'Yeghegnadzor'],
		'Yerevan': ['Yerevan']
	},
	'USA': {
		'California': ['Los Angeles', 'San Diego'],
		'Texas': ['Dallas', 'Austin']
	}
};