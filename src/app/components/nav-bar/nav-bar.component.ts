import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() currentIndex: any;
  currentLink: any;

  links = [
    {
      label: 'Home',
      path: '',
      disabled: false,
    },
    {
      label: 'Favorites',
      path: '/favorites',
      disabled: false,
    },
  ];

  constructor() {}

  ngOnInit() {
    if (this.currentIndex === 0) {
      this.currentLink = this.links[0];
    } else {
      this.currentLink = this.links[1];
    }
    console.log('Current Page : ', this.currentLink.label);
  }

  setActiveLink(link: any) {
    if (!link.disabled) {
      this.currentLink = link;
    }
  }
}
