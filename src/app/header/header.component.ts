import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    activeSection: string = 'home';

    constructor() {
        this.onScroll();
    }

    @HostListener('window:scroll', [])
    onScroll() {
        const sections: string[] = ['home', 'skills', 'projects', 'contact'];
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
