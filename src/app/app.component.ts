import { HostListener, Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {
  title = 'angular-practice';

  

  @ViewChild('monitored', { static: false }) monitoredEl: ElementRef<HTMLElement>;

  origin = this.formatOrigin(null);

  @ViewChild('link', { static: false }) link: ElementRef<HTMLElement>;

  constructor(
    public focusMonitor: FocusMonitor,
    private _cdr: ChangeDetectorRef,
    private _ngZone: NgZone
  ) { }

  // @ViewChild('skipRef', { static: false }) elem: ElementRef;

  // @HostListener('window:keydown.tab', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {
  //  

  //   this.elem.nativeElement.focus();

  //   console.log(this.elem);
  // }
  ngAfterViewInit() {
    this.focusMonitor.monitor(this.monitoredEl)
      .subscribe(origin => this._ngZone.run(() => {
        this.origin = this.formatOrigin(origin);
        this._cdr.markForCheck();
      }));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  skipClick() {
    this.link.nativeElement.focus();
  }

}
