import { Component } from '@angular/core';
import { Student } from '../../Model/student';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {
  student: Student = {
    id: 0,
    name: '',
    contactDetails: '',
    address: '',
    pincode: ''
  };

  constructor(
    private studentService: StudentService, private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(): void {
    this.studentService.createStudent(this.student).subscribe({
      next: (response) => {
        console.log('Student added successfully:', response);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error adding student:', err);
      }
    });
  }
}
