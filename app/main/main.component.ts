import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>main component content</p>   
    <a [routerLink]="['general']">
      <button>Navigate To General Module
      </button>
    </a>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}