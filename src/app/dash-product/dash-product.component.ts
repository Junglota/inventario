import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-dash-product',
  templateUrl: './dash-product.component.html',
  styleUrls: ['./dash-product.component.css']
})
export class DashProductComponent implements OnInit{
  sessionInfo:any;

  constructor(private request:RequestsService){}
  ngOnInit(): void {
      try {
        this.sessionInfo = this.request.getSessionInfo();
      } catch (error) {
        //implementar error handling
      }
  }


}
