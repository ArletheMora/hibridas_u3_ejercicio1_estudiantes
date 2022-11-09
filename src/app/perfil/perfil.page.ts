import { Student } from './../models/student';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  Student: Student;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private StudentService: StudentService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(paramMap => {
      const recipeControlNumber = paramMap.get('controlnumber');
      this.Student = this.StudentService.getStudent(recipeControlNumber);
      console.log(this.Student);
    })
  }

}
