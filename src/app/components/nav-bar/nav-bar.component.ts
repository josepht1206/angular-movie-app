import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NxTabChangeEvent } from '@aposin/ng-aquila/tabs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() currentIndex: any;
  currentLink: any;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.currentIndex === 0) {
      this.currentLink = this.links[0];
    } else {
      this.currentLink = this.links[1];
    }
    console.log('Current Page : ', this.currentLink.label);
  }

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

  setActiveLink(link: any) {
    if (!link.disabled) {
      this.currentLink = link;
    }
  }
}
