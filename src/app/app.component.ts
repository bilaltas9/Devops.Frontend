import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devops.Frontend';
  input1: string = '';
  input2: string = '';
  result: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const url = 'http://localhost:5015/api/Form/add'; // Gönderilecek URL'yi buraya yazın
    const body = {
      input1: this.input1,
      input2: this.input2
    };

    console.log(body);

    this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Başarılı:', response);
        this.result = (response as any).result as any;
        alert('Form başarıyla gönderildi!');
      },
      error: (error) => {
        console.error('Hata:', error);
        alert('Form gönderilirken bir hata oluştu!');
      }
    });
  }
  
}
