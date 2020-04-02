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
   onValueChange: EventEmitter<any> = new EventEmitter();

   @HostListener('click', ['$event'])
   onModelChange(value: string) {
      this.onValueChange.emit(value);
   }

   ngOnInit() {}
}
