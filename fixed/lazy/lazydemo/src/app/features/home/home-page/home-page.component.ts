import { Component, OnInit } from '@angular/core';
import { HotPreloadService } from 'src/app/strategies/hot-preload.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( public hotPreload: HotPreloadService ) { }

  ngOnInit(): void {

  }

}
