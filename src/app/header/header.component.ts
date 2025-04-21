import {AfterViewInit, Component, HostListener} from '@angular/core';

declare const bootstrap: any;

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
	activeSection: string = 'home';

	constructor() {
		this.onScroll();
	}

	ngAfterViewInit(): void {
		document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
			link.addEventListener('click', () => {
				const navbar = document.getElementById('navbarSupportedContent');
				const bsCollapse = new bootstrap.Collapse(navbar, {
					toggle: false
				});
				bsCollapse.hide();
			});
		});
	}

	@HostListener('window:scroll', [])
	onScroll() {
		const sections: string[] = [ 'home', 'skills', 'projects', 'contact' ];
		const header = document.querySelector('header');


		if (window.scrollY > 40) {
			header?.classList.add('scrolled');
		} else {
			header?.classList.remove('scrolled');
		}

		for (let section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const middle = window.innerHeight / 2;
				if (rect.top <= middle && rect.bottom >= middle) {
					this.activeSection = section;
					break;
				}
			}
		}
	}
}
