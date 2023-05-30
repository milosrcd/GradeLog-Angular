import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() placeholder? : string;
  @Output() searchResult = new EventEmitter<string>();

  defaultValue = '';


  constructor() {

    const filter: string | null = localStorage.getItem('filter');

    if (filter) {
      const stringToObj = JSON.parse(filter);
      console.log(stringToObj);
      this.defaultValue = stringToObj.userSearch;
    }

  }

  ngOnInit(): void {
  }

  onSearchAction(input: HTMLInputElement) {
    this.searchResult.emit(input.value);
  }

  onChange(input: HTMLInputElement) {
    this.searchResult.emit(input.value);
  }
}
