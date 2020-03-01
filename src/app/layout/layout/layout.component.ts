import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  link: string;

  constructor(private router: Router, private route: ActivatedRoute) {

  
   }

  @ViewChild('main', { static: false }) main: ElementRef;



  ngOnInit() {
  }

  skip() {
    this.main.nativeElement.focus();
  }


  ngAfterViewInit(): void {

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

}
