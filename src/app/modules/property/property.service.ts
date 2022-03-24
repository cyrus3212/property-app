import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import properties from './data/properties';
import { IProperty } from './interface/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties = properties;

  constructor() {}

  getProperties(): Observable<IProperty[]> {
    return of(this.properties)
  }
}
