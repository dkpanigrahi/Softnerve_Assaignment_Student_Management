import { Component } from '@angular/core';
import { Student } from '../../Model/student';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css'
})
export class EditstudentComponent {

  student: Student = {
    id: 0,
    name: '',
    contactDetails: '',
    address: '',
    pincode: ''
  };

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(id).subscribe({
      next: (data: Student) => {
        this.student = data;
      },
      error: (err) => {
        console.error('Error fetching student details:', err);
      }
    });
  }

  onSubmit(): void {
    const id = this.route.snapshot.params['id'];
    this.studentService.updateStudent(id, this.student).subscribe({
      next: (data) => {
        console.log('Student updated successfully:', data);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error updating student:', err);
      }
    });
  }
}
