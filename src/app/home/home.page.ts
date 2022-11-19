import { StudentService } from './../services/student.service';
import { Student } from './../models/student';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public students: Student[];

  constructor(private studentService: StudentService, private router: Router) {
    this.students = this.studentService.getStudents();
    //private alertController: AlertController,
    
  }

  public removeStudent(i: number) {
    //const alert =
    this.studentService.removeStudent(i);
    this.students = this.studentService.getStudents();
  }

  updateStudent(controlNumber: String) {
    this.router.navigate(['/update-student'], {queryParams:{controlNumber:controlNumber}})
  }

  /* public getStudent(cn: string): void {
  this.router.navigate(['/perfil'], {
    queryParams; { controlnumber: cn }
    });
  } */
}
