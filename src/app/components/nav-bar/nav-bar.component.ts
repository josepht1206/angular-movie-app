import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NxTabChangeEvent } from '@aposin/ng-aquila/tabs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() currentIndex: any;

  constructor(private router: Router) {}

  onTabClick(event: NxTabChangeEvent) {
    if (this.currentIndex === 0) {
      this.router.navigate(['/favorites']);
    } else this.router.navigate(['/']);
  }
}
