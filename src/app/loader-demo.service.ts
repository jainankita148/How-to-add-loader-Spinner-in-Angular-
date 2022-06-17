import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoaderDemoService {
  url = environment.apiUrl;
  constructor(private httpclient: HttpClient) {}

  getallData() {
    return this.httpclient.get(this.url);
  }
}
