// import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  OnInit,
  EventEmitter,
  Output,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('monitored', { static: false }) monitoredEl: ElementRef<HTMLElement>;

  constructor(
    public focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  

  @Output() valueChange = new EventEmitter();

  skipCanges() {
    this.valueChange.emit();
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
     this.focusMonitor.monitor(this.monitoredEl)
      .subscribe(origin => this.ngZone.run(() => {
        this.cdr.markForCheck();
      }));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

}
