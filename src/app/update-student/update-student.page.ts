import { StudentService } from './../services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
updateStudent() {
throw new Error('Method not implemented.');
}
    public student: Student;
    public students: Student[];
    public myForm: FormGroup;
    public validationMessages: Object;
  
    constructor(private studentService: StudentService, private fb: FormBuilder) { }
  
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
          { type: 'required', message: "Nombre obligatorio" },
          { type: 'minlength', message: "Debe ser de 18 dígitos" },
          { type: 'maxlength', message: "Debe ser de 18 dígitos" },
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
      for(let i = 0; i < this.students.length; i++){
        if(this.students[i].controlnumber.includes(this.student.controlnumber)){
          console.log('actualizado')
          this.studentService.updateStudent(this.student, i)
        }else{
          console.log('No existe este registro')
        }
      }
    }
  
  }
  