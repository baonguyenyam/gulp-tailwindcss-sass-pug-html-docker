/*  
==========================================================================
Copyright by Nguyen App
Version: 1.0.0
Author: Nguyen Pham
Build by: Babel/ES6 Vanilla
Website: https://nguyenpham.pro
NOTE: We can remove jQuery and use Vanilla JavaScript to build the same functionality.
==========================================================================
*/
//////////////////////////////////////////////////////////////

class WEB_APP {
	constructor() {
		console.log("App initialized");
	}
	fixedHeader() {
		const header = document.querySelector("#header");
		const headerTopbar = document.querySelector("#header_topbar");
		const headerMainbar = document.querySelector("#header_mainbar");
		const headerTopbarHeight = headerTopbar.offsetHeight;
		const headerMainbarHeight = headerMainbar.offsetHeight;
		const headerTopbarOffset = headerTopbar.offsetTop;
		window.addEventListener("scroll", function () {
			if (window.scrollY > headerTopbarOffset + headerTopbarHeight) {
				headerMainbar.classList.add("is-fixed");
				header.style.paddingTop = `${headerMainbarHeight}px`;
			} else {
				headerMainbar.classList.remove("is-fixed");
				header.style.paddingTop = "0";
			}
		});
	}
	swiper() {
		if (typeof Swiper == 'undefined') {
			return;
		}
		new Swiper('.swiper', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: "fraction",
			},
			keyboard: {
				enabled: true,
			},
			navigation: {
				nextEl: '.next',
				prevEl: '.prev',
			},
			breakpoints: {
				767: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}
		});
	}
	menuToggle() {
		const menuToggle = document.querySelector("#menu-toggle");
		const menu = document.querySelector("#nav");
		menuToggle.addEventListener("click", function () {
			menu.classList.toggle("is-active");
			menuToggle.classList.toggle("is-active");
		});
	}
	menuDropdown() {
		const dropdown = document.querySelector("#header_mainbar .dropdown");
		dropdown.addEventListener("click", function () {
			this.classList.toggle("is-active");
			this.querySelector(".dropdown-menu").style.display = this.classList.contains("is-active") ? "block" : "none";
		});
	}
	accordion() {
		document.querySelectorAll(".accordion-list").forEach(accordion => {
			accordion.querySelectorAll(".accordion-item.is-active").forEach(item => {
				item.querySelector(".accordion-panel").style.display = "block";
			});
			accordion.querySelectorAll(".accordion-item .accordion-title").forEach(h6 => {
				h6.addEventListener("click", function () {
					this.parentElement.parentElement.querySelectorAll(".accordion-item").forEach(item => {
						item.classList.remove("is-active");
						item.querySelector(".accordion-panel").style.display = "none";
					});
					this.parentElement.classList.toggle("is-active");
					this.parentElement.querySelector(".accordion-panel").style.display = "block";
				});
			});
		});
	}
	fancyBox() {
		if (typeof Fancybox == 'undefined') {
			return;
		}
		Fancybox.bind("[data-fancybox]", {});
	}
	dataBg() {
		const dataBg = document.querySelectorAll("[data-bg]");
		dataBg.forEach(bg => {
			bg.style.setProperty("--background", `url(${bg.getAttribute("data-bg")})`);
			bg.style.backgroundImage = `url(${bg.getAttribute("data-bg")})`;
			bg.style.backgroundSize = bg.getAttribute("data-size") || "cover";
			bg.style.backgroundPosition = bg.getAttribute("data-position") || "center center";
			bg.style.zIndex = "1";
			bg.style.position = "relative";
			bg.style.backgroundRepeat = "no-repeat";
		});
		const dataOverlay = document.querySelectorAll("[data-overlay]");
		dataOverlay.forEach(overlay => {
			overlay.style.zIndex = "1";
			overlay.style.position = "relative";
			let overlayColor = overlay.getAttribute("data-overlay");
			overlay.innerHTML += `<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ${overlayColor}; z-index: -1;"></div>`;
		});
		const dataAttachment = document.querySelectorAll("[data-attachment]");
		dataAttachment.forEach(attachment => {
			attachment.style.backgroundAttachment = attachment.getAttribute("data-attachment");
		});
	}
}

// Check DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function () {
		const app = new WEB_APP();
		app.fixedHeader();
		app.swiper();
		app.menuToggle();
		app.menuDropdown();
		app.accordion();
		app.fancyBox();
		app.dataBg();
	});
}