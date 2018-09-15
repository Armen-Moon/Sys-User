addEventListener('load', function () {
	// Make the element draggable:
	dragElement(document.getElementsByTagName('table')[0]);

	function dragElement(elem) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		document.getElementsByTagName('thead')[0].onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elem.style.top = (elem.offsetTop - pos2) + "px";
			elem.style.left = (elem.offsetLeft - pos1) + "px";
			if (elem.offsetTop < 0) {
				elem.style.top = 0;
			}

			document.getElementsByTagName('table')[0].style.position = 'absolute';
		}

		function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}
})