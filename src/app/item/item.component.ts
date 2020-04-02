import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

   constructor() { }

   @Input() title: string;

   @Input() id: number;

   @Input() body?: string;

   @Input() thumbnail?: string;

   @Input() imgUrl?: string;

   ngOnInit() {}

}
