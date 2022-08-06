import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  
    constructor(private activatedRoute: ActivatedRoute) {} // info das rotas ativas

    courseId!: number;

    ngOnInit(): void {        
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');               
    }
}