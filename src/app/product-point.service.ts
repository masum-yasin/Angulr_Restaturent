import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{map} from 'rxjs/operators';
import {Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductPointService {
  baseUrl = 'http://localhost/angular_project_template/restaturant/api';

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${this.baseUrl}/menu.php`).pipe(
      map((res:any) => {
        return res['data'];
      })
    )
  }
}
