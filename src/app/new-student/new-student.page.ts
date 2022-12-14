import { Router } from '@angular/router';
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

  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    //form builder va a ayudar a las validaciones
    this.myForm = this.fb.group(
      {
        //valor inicial, validaciones
        controlnumber: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]+$')])],
        age: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]+$'),  Validators.min(17)])],
        carreer: ["", Validators.compose([Validators.required, Validators.pattern('')])],
        curp: ["", Validators.compose([Validators.required, Validators.minLength(18), Validators.maxLength(18), Validators.pattern('^[a-zÑñA-Z]+[a-zÑñA-Z0-9]*$')])],
        email: ["", Validators.compose([Validators.required, Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)])],
        name: ["", Validators.compose([Validators.required, Validators.pattern('^[a-zÑñA-Z]+[a-zÑñA-Z ]*$')])],
        nip: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(4), Validators.pattern('[1-9][0-9]+')])],
        photo: ["", Validators.compose([Validators.required, Validators.pattern(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]))?(?:\?([^#]))?(?:#(.*))?$/)])]
      }
    );

    this.validationMessages = {
      controlnumber: [
        { type: 'required', message: "Número de control obligatorio" },
        { type: 'minlength', message: "Debe ser de 8 dígitos" },
        { type: 'maxlength', message: "Debe ser de 8 dígitos" },
        { type: 'pattern', message: "EL número de control está mal formado" }
      ],
      age: [
        { type: 'required', message: "Edad obligatoria" },
        { type: 'minlength', message: "Debe se de 2 dígitos" },
        { type: 'maxlength', message: "Debe ser de 2 dígitos" },
        { type: 'pattern', message: "La edad está mal formada" },
        { type: 'min', message: "Edad mínima 17" },
      ],
      carreer: [
        { type: 'required', message: "Carrera obligatorio" }
      ]
      ,
      curp: [
        { type: 'required', message: "CURP obligatorio" },
        { type: 'minlength', message: "Debe ser de 18 caracteres" },
        { type: 'maxlength', message: "Debe ser de 18 caracteres" },
        { type: 'pattern', message: "La CURP está mal formada" }
      ]
      ,
      email: [
        { type: 'required', message: "Email obligatorio" },
        { type: 'pattern', message: "EL email está mal formado" }
      ]
      ,
      name: [
        { type: 'required', message: "Nombre obligatorio" },
        { type: 'pattern', message: "EL nombre está mal formado" }
      ]
      ,
      nip: [
        { type: 'required', message: "Nombre obligatorio" },
        { type: 'minlength', message: "Debe ser de al menos 2 dígitos dígitos" },
        { type: 'maxlength', message: "Debe ser de máximo 4 dígitos" },
        { type: 'pattern', message: "EL nip está mal formado" }
      ]
      ,
      photo: [
        { type: 'required', message: "Enlace de foto obligatorio" },
        { type: 'pattern', message: "EL enlace de la foto está mal formado" }
      ]
    }
  }

  public newStudent(): void {
    //Construir el objeto
    this.student = {
      controlnumber: this.myForm.get('controlnumber').value,
      name: this.myForm.get('name').value,
      curp: this.myForm.get('curp').value,
      age: this.myForm.get('age').value,
      nip: this.myForm.get('nip').value,
      email: this.myForm.get('email').value,
      career: this.myForm.get('carreer').value,
      photo: this.myForm.get('photo').value,
    }
    this.studentService.newStudent(this.student);
    this.router.navigate(['/home']);
  }

}
