import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) {}

  index(api, params = {}): Observable<any> {
    return this.http.get(api, { params });
  }

  store(api, body, params = {}): Observable<any> {
    return this.http.post(api, body, { params });
  }

  update(api, body, params = {}): Observable<any> {
    return this.http.put(api, body, { params });
  }

  show(api, id, params = {}): Observable<any> {
    return this.http.get(api, { params });
  }

  destroy(api, params = {}): Observable<any> {
    return this.http.delete(api, { params });
  }

  get(api, params = {}): Observable<any> {
    return this.http.get(api, { params });
  }

  post(api, body, params = {}): Observable<any> {
    return this.http.post(api, body, { params });
  }

  put(api, body, params = {}): Observable<any> {
    return this.http.put(api, body, { params });
  }
}
