import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../../interface/property';

@Component({
  selector: 'pin-detail',
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.scss']
})
export class PinDetailComponent implements OnInit {
  @Input() selectedProperty: IProperty;

  constructor() { }

  ngOnInit(): void {
  }

}
