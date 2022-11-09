import { Student } from './../models/student';
import { Injectable } from '@angular/core';
import { pickerController } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //var     //tipoDato
  private Students: Student[];

  constructor() {
    this.Students = [
      {
        controlnumber: "18401160",
        age: 22,
        career: "ISC",
        curp: "MOLA",
        email: "armomorali",
        name: "Arlethe Monserrat Mora Lizarrarás",
        nip: 123,
        photo: "https://picsum.photos/id/111/600/600"
      },
      {
        controlnumber: "18401161",
        age: 22,
        career: "ISC",
        curp: "JUPA",
        email: "jupacamposca",
        name: "Juan Pablo",
        nip: 123,
        photo: "https://picsum.photos/id/102/600/600"
      },
      {
        controlnumber: "18401162",
        age: 22,
        career: "ISC",
        curp: "MOLA",
        email: "armomorali",
        name: "Arlethe Monserrat Mora Lizarrarás",
        nip: 123,
        photo: "https://picsum.photos/600/?random=1"
      }
    ]
  }

  public getStudents(): Student[] {
    return this.Students;
  }

  public getStudent(controlnumber: string): Student {
    return {
      //Convertir arreglo en propiedad(un elemento del arreglo)
      //los ... le quita los corchetes
      ...this.Students.find(Student => {
        return Student.controlnumber === controlnumber;
      })
    }
  }

  //retorna al primer estudiante que coincida con el número de control
  public getStudentByControlNumber(cn: string): Student {
    let item: Student;
    item = this.Students.find(
      (Student) => {
        return Student.controlnumber===cn
      }
    );
    return item;
  }

  public removeStudent(i: number) {
    this.Students.splice(i, 1);
  }

  public newStudent(student: Student):void{
    /* El push solo se puede usar cuando está inicializado el arreglo */
    this.Students.push(student);
  }
}
