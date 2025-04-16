import {Component} from '@angular/core';
import {LoaderComponent} from "./loader/loader.component";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component";

declare var particlesJS: any;

@Component({
    selector: 'app-root',
    imports: [
        LoaderComponent,
        NgIf,
        HeaderComponent,
        HomeComponent,
        ProjectsComponent,
        ContactComponent,
        SkillsComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Aksaim Mohamed Amin';
    isLoading = true;

    constructor() {
        setTimeout(() => {
            this.isLoading = false;
            this.initializeParticles();
        }, 2700);
    }

    initializeParticles() {
        particlesJS.load('particles-js', '/data/particles.json');
    }
}
