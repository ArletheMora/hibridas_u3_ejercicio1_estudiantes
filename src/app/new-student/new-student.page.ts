import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {
  public student: Student;
  public myForm: FormGroup;
  public validationMessages: Object;

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit() {

    //form builder va a ayudar a las validaciones
    this.myForm = this.fb.group(
      {
        //valor inicial, validaciones
        controlnumber: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]+$')])]
      }
    );

    this.validationMessages = {
      controlnumber: [
        {type: 'required', message: "Número de control obligatorio"},
        {type: 'minlength', message: "Debe ser de 8 dígitos"},
        {type: 'maxlength', message: "Debe ser de 8 dígitos"},
        {type: 'pattern', message: "EL número de control está mal formado"}
      ]
    }
  }

  public newStudent(): void {
    //Construir el objeto
    this.studentService.newStudent(this.student);
  }

  

}
