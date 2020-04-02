import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() label: string = 'Defaul label';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event'])
  onElemenClick(even: MouseEvent) {
    this.onClick.emit(even);
  }

  ngOnInit() {}
}
