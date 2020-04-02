import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

   constructor() { }

   searchInput: string;

   @Input() label = 'Default label';

   @Output()
   onMouseClick: EventEmitter<any> = new EventEmitter();

   @HostListener('click', ['$event'])
   onElemenClick(even: MouseEvent) {
      this.onMouseClick.emit(even);
   }

   ngOnInit() {}
}
