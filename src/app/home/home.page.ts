import { StudentService } from './../services/student.service';
import { Student } from './../models/student';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
    //private alertController: AlertController,
    //private router: Router;
}

  public removeStudent(i: number){
  //const alert = 
  this.studentService.removeStudent(i);
  this.students = this.studentService.getStudents();
}

  /* public getStudent(cn: string): void {
  this.router.navigate(['/perfil'], {
    queryParams; { controlnumber: cn }
    });
  } */

}
