import { Component, OnInit } from '@angular/core';
import { IProperty } from './interface/property';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})

export class PropertyComponent implements OnInit {

  isStreetView = true;
  selectedProperty: IProperty;
  properties: IProperty[] = [];

  constructor(
    public propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
      this.selectedProperty = this.properties[0];
    })
  }

  onSelectProperty(property: IProperty) {
    this.selectedProperty = property
  }
  
  onToggleView(val: boolean) {
    this.isStreetView = val;
  }

  onBookmark(properties: IProperty[]) {
    this.properties = properties;
  }

}
