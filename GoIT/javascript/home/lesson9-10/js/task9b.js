window.addEventListener('DOMContentLoaded', function () {
	var submenu = document.querySelectorAll('.submenu');
	for (var i = 0; i < submenu.length; i++) {
		submenu[i].style.display = 'none';
		submenu[i].parentElement.classList.add('arrow');
	}

	var li = document.querySelectorAll('.menu li');
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener('mouseover', function (e) {
			e.preventDefault();
			e.stopPropagation();
            var elem;
            if (e.target.tagName == 'LI') {
                elem = e.target;
            }
            else {
                elem = e.target.parentElement;
            }
            var submenu = false;
            var parrentClasses = elem.parentElement.parentElement.classList;
            for (var c = 0; c < parrentClasses.length; c++) {
                if (parrentClasses[c] == 'submenu') {
                    submenu = true;
                }
            }
            var coords = elem.getBoundingClientRect();
            var childs = elem.childNodes;
            for (var j = 0; j < childs.length; j++) {
                if (childs[j].tagName == 'DIV') {
                    if (submenu) {
                        childs[j].style.left = '200px';
                        childs[j].style.top = elem.offsetTop + 'px';
                    }
                    else
                    {
                        childs[j].style.left = coords.left + 'px';
                        childs[j].style.top = coords.bottom - 5 + 'px';
                    }
                    childs[j].style.display = 'block';
                    break;
                }
            }

		}, true);
		li[i].addEventListener('mouseleave', function (e) {
			if (e.target.tagName == 'LI') {
				var childs = e.target.childNodes;
				for (var j = 0; j < childs.length; j++) {
					if (childs[j].tagName == 'DIV') {
						childs[j].style.display = 'none';
						break;
					}
				}
			}
			else {
				childs = e.target.parentElement.childNodes;
				for (j = 0; j < childs.length; j++) {
					if (childs[j].tagName == 'DIV') {
						childs[j].style.display = 'none';
						break;
					}
				}
			}

		}, true);
	}
});