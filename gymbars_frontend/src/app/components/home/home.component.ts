import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "https://firebasestorage.googleapis.com/v0/b/gymbarsgt.appspot.com/o/carousel%2Fcarousel1.jpeg?alt=media&token=b02a524c-fd28-453c-bd5c-91b485cff9b0"},
    {img: "https://firebasestorage.googleapis.com/v0/b/gymbarsgt.appspot.com/o/carousel%2Fcarousel2.jpeg?alt=media&token=934447e8-a8c5-4978-8e19-84fc9ad2801f"},
    {img: "https://firebasestorage.googleapis.com/v0/b/gymbarsgt.appspot.com/o/carousel%2Fcarousel3.jpeg?alt=media&token=d307d152-aab8-46aa-a71d-aa975f399b10"},
    {img: "https://firebasestorage.googleapis.com/v0/b/gymbarsgt.appspot.com/o/carousel%2Fcarousel4.jpeg?alt=media&token=e7c7784a-daff-4c77-9269-be4ce919d887"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "autoplaySpeed": 2000
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.route.fragment.subscribe((fragment: string) => { 
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
      }
    });*/
  }
  
}
