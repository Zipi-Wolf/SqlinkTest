import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl='https://private-052d6-testapi4528.apiary-mock.com/authenticate';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  constructor(private http: HttpClient) { }


  callLoginMock(data:any)
  {
    return this.http.post<any>(this.apiUrl,
                               JSON.stringify(data),
                               this.httpOptions);
  }


}
