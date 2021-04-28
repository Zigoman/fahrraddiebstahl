import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IIncident } from '../../../shared/interfaces/incidents';
import { LayoutType } from '../../../shared/interfaces/layout';

@Component({
  selector: 'fah-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() incident?: IIncident | null;
  @Input() itemType?: LayoutType | null;

  @Output() itemSelected: EventEmitter<number>;
  constructor() {
    this.incident = null;
    this.itemType = null;
    this.itemSelected = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  public itemClicked(id: number | undefined): void {
    if (id) {
      this.itemSelected.emit(id);
    }
  }
}
