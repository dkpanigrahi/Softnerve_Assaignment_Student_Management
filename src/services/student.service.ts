import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../app/Model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Get all students
  getAllStudents(): Observable<Student[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Student[]>(this.apiUrl, { headers });
  }

  // Get a student by ID
  getStudentById(id: number): Observable<Student> {
    const headers = this.getAuthHeaders();
    return this.http.get<Student>(`${this.apiUrl}/${id}`, { headers });
  }

  // Create a new student
  createStudent(student: Student): Observable<Student> {
    const headers = this.getAuthHeaders();
    return this.http.post<Student>(this.apiUrl, student, { headers });
  }

  // Update student with given id
  updateStudent(id: number, student: Student): Observable<Student> {
    const headers = this.getAuthHeaders();
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student, { headers });
  }

  // Delete a student by ID
  deleteStudent(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
