import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient){
  }
onSubmit(data:any){
  this.http.post('http://localhost/angular_project_Restaturent/restaturant/api/contact.php',data).
  subscribe(result=>{
    console.log(result);
  })


}
}
