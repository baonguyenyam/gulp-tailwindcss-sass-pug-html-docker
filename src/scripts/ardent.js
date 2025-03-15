/*  
==========================================================================
Copyright by ArdentCreative
Version: 1.0.0
Author: ArdentCreative
Build by: Babel/ES6 jQuery
Website: https://ardentcreative.com
==========================================================================
*/
const Ardent_Const = {
	itemsPerPage: 10,
	api_url: "/data/list.json",
}

class ArdentApp {
	constructor() {
		this.init();
		this.accordion();
		this.dataBg();
		this.menuToggle();
		this.menuDropdown();
		this.swiper();
		this.fancybox();
		this.fixedHeader();
		this.callAPI();
		this.paging();
		this.filterList();
		this.clickOutside();
	}
	init() {
		console.log("App initialized");
	}
	clickOutside() {
		jQuery('a[target="_blank"]').click(function () {
			alert('Links to other websites found here are provided to assist in locating information. The existence of a link between this website and another does not constitute a product or program endorsement by TIB, N.A. | Your Trusted Partner or any of its affiliates or employees. The bank has no responsibility for content of the websites found at these links or beyond and does not attest to the accuracy or propriety of any information located there.');
		});
	}
	fixedHeader() {
		const header = jQuery("#header");
		const headerTopbar = jQuery("#header_topbar");
		const headerMainbar = jQuery("#header_mainbar");
		const headerTopbarHeight = headerTopbar.outerHeight();
		const headerMainbarHeight = headerMainbar.outerHeight();
		const headerTopbarOffset = headerTopbar.offset().top;
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > headerTopbarOffset + headerTopbarHeight) {
				headerMainbar.addClass("is-fixed");
				header.css("padding-top", headerMainbarHeight);
			} else {
				headerMainbar.removeClass("is-fixed");
				header.css("padding-top", 0);
			}
		});
	}
	accordion() {
		jQuery(".accordion-list").each(function () {
			jQuery(this).find(".accordion-item.is-active").children(".accordion-panel").slideDown();
			jQuery(this).find(".accordion-item .accordion-title").click(function () {
				jQuery(this).parent().siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
				jQuery(this).parent().toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
			});
		})
	}
	fancybox() {
		if (typeof Fancybox == 'undefined') {
			return;
		}
		Fancybox.bind("[data-fancybox]", {});
	}
	dataBg() {
		jQuery("[data-bg]").each(function () {
			jQuery(this).css({
				'--background': "url(" + jQuery(this).attr("data-bg") + ")",
				"background-image": "url(" + jQuery(this).attr("data-bg") + ")",
				"background-size": jQuery(this).attr("data-size") || "cover",
				"background-position": jQuery(this).attr("data-position") || "center center",
				"z-index": "1",
				"position": "relative",
				"background-repeat": "no-repeat",
			});
		});
		jQuery("[data-overlay]").each(function () {
			jQuery(this).css({
				"z-index": "1",
				"position": "relative",
			});
			let overlay = jQuery(this).attr("data-overlay");
			jQuery(this).append("<div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: " + overlay + "; z-index: -1;'></div>");
		})
		jQuery("[data-attachment]").each(function () {
			jQuery(this).css({
				"background-attachment": jQuery(this).attr("data-attachment")
			});
		});
	}
	swiper() {
		if (typeof Swiper == 'undefined') {
			return;
		}
		new Swiper('.swiper-testimonials', {
			slidesPerView: "auto",
			loop: true,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			keyboard: {
				enabled: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				991: {
					slidesPerView: "auto",
					spaceBetween: 30,
				},
			}
		});
		if (jQuery(window).width() < 576) {
			jQuery(".swiper-team").addClass("swiper");
			jQuery(".swiper-wrapper-flex").addClass("swiper-wrapper");
			if (jQuery(".swiper-wrapper").length > 0) {
				new Swiper('.swiper-team', {
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
				});
			}
		}
		new Swiper('.swiper-careers', {
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
				1680: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}
		});
	}
	menuToggle() {
		const menuToggle = jQuery("#menu-toggle");
		const menu = jQuery("#nav");
		menuToggle.click(function () {
			menu.toggleClass("is-active");
			menuToggle.toggleClass("is-active");
		})
	}
	menuDropdown() {
		jQuery("#header_mainbar .dropdown").click(function () {
			jQuery(this).toggleClass("is-active").children(".dropdown-menu").slideToggle();
		})
	}
	callAPI() {
		let data = [];
		let html = '';
		jQuery.get(Ardent_Const.api_url, function (response) {
			response?.data?.forEach(function (item) {
				data.push(item);
			});
			data.forEach(function (item) {
				html += `<div class="item-group hidden" data-filter="${item.key}">
<div class="item h-full bg-main text-white" data-fancybox="id_dialog-content_${item.id}" data-src="#dialog-content_${item.id}">
<figure><img src="${item.img}" alt="${item.name}">
<figcaption>
<div class="text-xs mb-2">${item.location}</div>
<div class="text-sm">${item.position}</div>
<h2 class="h5 font-semibold mb-2">${item.name}</h2>
<div class="text-lg mb-2">${item.phone}</div>
<div class="text-sm"><a class="text-secondary hover-light text-decoration-none" href=mailto:${item.email}>Email</a></div>
</figcaption>
</figure>
<div class="dialog-modal" id="dialog-content_${item.id}">
<h3 class="h4">Contact Our Representatives</h3>
<div class="text-xs mx-auto" style="max-width:60%">You can contact your dedicated TIB Correspondent Officer directly using the quick form below.</div>
<div class="text-lg my-2">Contact ${item.name}</div>
<div class="text-sm"><a class="text-secondary hover-light text-decoration-none" href=mailto:${item.email}>FORM HERE</a></div>
</div>
</div>
</div>`;
			})
			jQuery("#filter_items").append(html);
		})
	}
	paging() {
		const targetNode = jQuery("#filter_items")[0];
		const config = {
			childList: true
		};
		const callback = function (mutationsList, observer) {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					let items = jQuery("#filter_items .item-group");
					let itemsCount = items.length;
					if (itemsCount > 0) {
						let totalPages = Math.ceil(itemsCount / Ardent_Const.itemsPerPage);
						let currentPage = 1
						let loadMore = jQuery("#load_more");
						if (totalPages > 1) {
							jQuery("#load_more").removeClass("hidden");
						} else {
							jQuery("#load_more").addClass("hidden");
						}
						items.slice(0, Ardent_Const.itemsPerPage).removeClass("hidden");
						loadMore.click(function () {
							if (currentPage < totalPages) {
								currentPage++;
								let start = (currentPage - 1) * Ardent_Const.itemsPerPage;
								let end = start + Ardent_Const.itemsPerPage;
								items.slice(start, end).removeClass("hidden");
								if (currentPage == totalPages) {
									loadMore.addClass("hidden");
								}
							}
						})
					}
				}
			}
		};
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	}
	filterList() {
		jQuery("#filter_list").on("change", function () {
			let filterValue = jQuery(this).val();
			let data = [];
			let html = '';
			jQuery("#filter_items .item-group").remove();
			jQuery.get(Ardent_Const.api_url, function (response) {
				response?.data?.forEach(function (item) {
					if (filterValue !== "all") {
						if (item.key == filterValue) {
							data.push(item);
						}
					} else {
						data.push(item);
					}
				});
				data.forEach(function (item) {
					html += `<div class="item-group hidden" data-filter="${item.key}">
<div class="item h-full bg-main text-white" data-fancybox="id_dialog-content_${item.id}" data-src="#dialog-content_${item.id}">
<figure><img src="${item.img}" alt="${item.name}">
<figcaption>
<div class="text-xs mb-2">${item.location}</div>
<div class="text-sm">${item.position}</div>
<h2 class="h5 font-semibold mb-2">${item.name}</h2>
<div class="text-lg mb-2">${item.phone}</div>
<div class="text-sm"><a class="text-secondary hover-light text-decoration-none" href=mailto:${item.email}>Email</a></div>
</figcaption>
</figure>
<div class="dialog-modal" id="dialog-content_${item.id}">
<h3 class="h4">Contact Our Representatives</h3>
<div class="text-xs mx-auto" style="max-width:60%">You can contact your dedicated TIB Correspondent Officer directly using the quick form below.</div>
<div class="text-lg my-2">Contact ${item.name}</div>
<div class="text-sm"><a class="text-secondary hover-light text-decoration-none" href=mailto:${item.email}>FORM HERE</a></div>
</div>
</div>
</div>`;
				})
				jQuery("#filter_items").append(html);
			})
		})
	}
}

jQuery(document).ready(function () {
	new ArdentApp();
});