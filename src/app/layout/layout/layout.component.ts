// import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  link: string;

  // @ViewChild('monitored', { static: false }) monitoredEl: ElementRef<HTMLElement>;

  @ViewChild('main', { static: false }) main: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // public focusMonitor: FocusMonitor,
    // private cdr: ChangeDetectorRef,
    // private ngZone: NgZone
  ) {

  }


  ngOnInit() {
  }

  skip() {
    this.main.nativeElement.focus();
  }


  ngAfterViewInit() {

    // this.focusMonitor.monitor(this.monitoredEl)
    //   .subscribe(origin => this.ngZone.run(() => {
    //     this.cdr.markForCheck();
    //   }));

    // this.router.events.subscribe(
    //   (event: any) => {
    //     if (event instanceof NavigationEnd) {
    //       this.link = this.router.url;
    //       console.log('this.router.url', this.router.url);
    //     }
    //   }
    // );

    // this.route.fragment.subscribe(
    //   (fragments) => {
    //     console.log('fragments', fragments);

    //     if (fragments === 'main-section') {
    //       console.log('fragments', fragments);
    //       this.main.nativeElement.focus();
    //     }
    //   }
    // );

  }

  ngOnDestroy() {
    // this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  

}
