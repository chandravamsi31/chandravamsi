import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get("https://reqres.in/api/users");
  }


  sumOf2No(a: number, b: any) {
    return a+b;
  }
}
