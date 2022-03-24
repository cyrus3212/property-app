import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProperty } from '../../interface/property';

@Component({
  selector: 'property-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selectedProperty: IProperty;
  @Input() properties: IProperty[];
  @Input() isStreetView: boolean;

  @Output() onSelectProperty = new EventEmitter();
  @Output() onToggleView = new EventEmitter();
  @Output() onBookmark = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onSelectProperTy(property: IProperty) {
    this.selectedProperty = property;
    this.onSelectProperty.emit(property);
  }

  toggleView() {
    this.onToggleView.emit(!this.isStreetView);
  }

  bookmark(property: IProperty) {
    let updatedProperties = this.properties.map(prop => {
      if (prop.id === property.id) {
        prop.isFavorite = !property.isFavorite;
      }

      return prop;
    })

    this.onBookmark.emit(updatedProperties);
  }

}
