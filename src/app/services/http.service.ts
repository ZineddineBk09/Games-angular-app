import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { Game, APIResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //Retrieving the games list from the API
  getGamesList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    //setting the seach query parameters
    let params = new HttpParams().set('ordering', ordering);

    //if the search query(user iput field) is not empty, add it to the params
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    //making the request to the API & returning the response
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params,
    });
  }
}
