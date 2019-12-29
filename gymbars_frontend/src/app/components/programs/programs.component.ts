import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  public innerWidth: any;
  slideConfig: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.fitPrograms(this.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.fitPrograms(this.innerWidth); 
  }

  fitPrograms(innerWidth: number) {
    if(innerWidth >= 0 && innerWidth <= 600){
      this.slideConfig = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "dots": true,
        "autoplay": true,
        "autoplaySpeed": 2000
      };
    }else if(innerWidth > 600 && innerWidth <= 700){
      this.slideConfig = {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "dots": true,
        "autoplay": true,
        "autoplaySpeed": 2000
      };
    }else{
      this.slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 2,
        "dots": true,
        "autoplay": true,
        "autoplaySpeed": 2000
      };
    }
  }

}
