import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  ngOnInit() {
    if(localStorage.getItem('response')){
    const datax : any = localStorage.getItem('response');
    const data = JSON.parse(datax);
    this.nombreUsuario = data.username;
    }
  }
  nombreUsuario:any;

  constructor(){}


}
