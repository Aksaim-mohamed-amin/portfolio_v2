import {Component} from '@angular/core';
import {LoaderComponent} from "./loader/loader.component";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {SkillsComponent} from "./skills/skills.component";

@Component({
    selector: 'app-root',
    imports: [
        LoaderComponent,
        NgIf,
        HeaderComponent,
        HomeComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent,
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
        }, 2700);
    }
}
