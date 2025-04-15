import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';

@Component({
	selector: 'app-home',
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngAfterViewInit(): void {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.renderer.addClass(entry.target, 'visible');
                        observer.unobserve(entry.target);
                    }
                })
            },
            {
                threshold: 0.5
            }
        );

        elements.forEach((ele: Element) => observer.observe(ele));
    }
}
