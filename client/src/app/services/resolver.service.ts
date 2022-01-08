import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { META } from '../mock-metadata';

@Injectable({
  providedIn: 'root',
})
export class ResolverService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // getMetadata(siteUrl: string) {
  //   if (!siteUrl) {
  //     return { data: [{ metadata: { Message: 'Please provide a URL' } }] };
  //   }

  //   const response = this.http.get(`${this.apiUrl}/${siteUrl}`);

  //   return response;
  // }
  getMetadata(siteUrl: string) {
    if (!siteUrl) return;

    return this.http.get(`${this.apiUrl}/${siteUrl}`);
  }
}
