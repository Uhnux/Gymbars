import { Component, OnInit, HostListener } from '@angular/core';
import { ItemService } from './item.service';
import { ItemI } from 'src/app/shared/models/item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "autoplaySpeed": 2000
  };

  public zoomEnabled: boolean;
  public carousel$: Observable<ItemI[]>;
  public features$: Observable<ItemI[]>;
  title = 'Gymbars';
  description = `Contamos con todo lo necesario para lograr el cambio que siempre has deseado y de la forma más simple que
  puedas imaginar`;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    //this.itemSvc.getCarousel().subscribe(res => console.log("ITEM", res));
    this.carousel$ = this.itemSvc.getCarousel();
    this.features$ = this.itemSvc.getFeatures();
    if(window.innerWidth <= 500){
      this.zoomEnabled = true;
    }else{
      this.zoomEnabled = false;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 500){
      this.zoomEnabled = true;
    }else{
      this.zoomEnabled = false;
    }
  }

}
