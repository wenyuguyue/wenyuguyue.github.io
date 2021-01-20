function a() {
				var arr = document.getElementsByTagName("dt")
				for(var i = 0; i < arr.length; i++) {
					arr[i].setAttribute("style", "background:url(img/zx/zx_" + (i + 1) + ".jpg)" + "; background-size:100% 100%" + "; background-position:center center");

				}

			}
