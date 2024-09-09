import { Component } from '@angular/core';
import { Student } from '../../Model/student';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  students: Student[] = [];

  constructor(
    private studentService: StudentService, private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllStudents();
  }


  loadAllStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      }
    });
  }


  viewStudent(id: number): void {
    this.router.navigate([`/students/${id}`]);
  }

 
  updateStudent(id: number): void {
    this.router.navigate([`/students/update/${id}`]);
  }


  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        console.log('Student deleted successfully');
        this.loadAllStudents();
      },
      error: (err) => {
        console.error('Error deleting student:', err);
      }
    });
  }
}
