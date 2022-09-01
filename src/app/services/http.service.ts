import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private loginMockUrl='https://private-052d6-testapi4528.apiary-mock.com/authenticate';
  private loginUrl='http://localhost:4495/api/Login/Login';
  private getProjectsUrl='https://private-052d6-testapi4528.apiary-mock.com/info';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  constructor(private http: HttpClient) { }


  // callLoginMock(data:any)
  // {
  //   return this.http.post<any>(this.apiUrl,
  //                              JSON.stringify(data),
  //                              this.httpOptions);
  // }

  callLoginMock(data:any):Observable<any>
  {
    return this.http.post(this.loginMockUrl,
                               JSON.stringify(data),
                               this.httpOptions);
  }

  callLogin(data:any):Observable<any>
  {
    return this.http.post(this.loginUrl,
                               JSON.stringify(data),
                               this.httpOptions);
  }

  getProjectsByUser(userId:string):Observable<any>
  {
    return this.http.get(this.getProjectsUrl);
  }


}
