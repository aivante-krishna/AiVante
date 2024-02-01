import { Injectable } from '@angular/core';
import { camelCase } from "lodash-es";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  private toCamel(s: string) {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  }

  public keysToCamel(obj: any): any {
    if (obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function') {
      const newObj: any = {};
      Object.keys(obj)
        .forEach((key) => {
          //n[this.toCamel(k)] = this.keysToCamel(o[k]);
          newObj[camelCase(key)] = this.keysToCamel(obj[key]);
        });
      return newObj;
    } else if (Array.isArray(obj)) {
      return obj.map((i) => {
        return this.keysToCamel(i);
      });
    }
    return obj;
  }
}
