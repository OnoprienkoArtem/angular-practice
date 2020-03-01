import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  // @ViewChild('main', { static: false }) main: ElementRef;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
  //   console.log(this.main);
  //   this.route.fragment.subscribe(
  //     (fragments) => {
  //       console.log('fragments', fragments);

  //       if (fragments === 'main-section') {
  //         console.log('fragments', fragments);
  //         this.main.nativeElement.focus();
  //       }
  //     }
  //   );

  }

}
