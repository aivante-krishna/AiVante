import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string | null = "";

  constructor() { }

  getAuthToken(): string | null {
    let token = sessionStorage.getItem("access_token");
    if (this._token) {
      return this._token;
    } else {
      this._token = token;
      return this._token;
    }
  }

  refreshAuthToken(): Observable<string | null> {
    return of("");
  }
}
