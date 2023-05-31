import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchResult = new EventEmitter<string>();

  defaultValue = '';
  search = '';


  constructor() {
    const filter = localStorage.getItem('filter');

    if (filter) {
      const stringToObj = JSON.parse(filter);
      console.log(stringToObj);
      this.defaultValue = stringToObj.userSearch;
    }
  }

  ngOnInit(): void { }

  // onSearchAction(input: HTMLInputElement) {
  //   this.searchResult.emit(this.search);
  // }

  // onChange(input: HTMLInputElement) {
  //   this.searchResult.emit(input.value);
  // }

  onClick(): void {
    this.searchResult.emit(this.search);
  }
  outputSearch(event: any) {
    this.search = event.target.value;
  }
}
