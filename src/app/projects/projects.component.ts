import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-projects',
    imports: [
        NgForOf,
        NgIf
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent implements OnInit{
    projects: any[] = []

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<any[]>('/data/projects.json').subscribe(data => {
            this.projects = data;
        });
    }
}
