import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  link: string;

  constructor(private router: Router) { }

  // @ViewChild('main', { static: false }) main: ElementRef;



  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.link = this.router.url;
          console.log('this.router.url', this.router.url);
        }
      }
    );
  }

  // skip() {
  //   this.main.nativeElement.focus();
  // }

}
