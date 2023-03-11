import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { enviroment } from 'src/enviroment/enviroment';
import { Response } from 'src/interfaces/Response';
import { Moment } from 'src/interfaces/Moment';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = enviroment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;
  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl)
  }
  
  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl,formData);
  }
}
