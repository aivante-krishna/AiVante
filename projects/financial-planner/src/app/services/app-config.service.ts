import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private httpClient: HttpClient) { }

  public getApplicationSetting() {
    
  }
}
