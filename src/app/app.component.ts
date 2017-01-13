import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'MapIt!';
  zoom: number = 12;
  lat: number =  12.913425;
  lng: number = 77.596502;

  markers : marker[] = [
    {
      name : "Company One",
      lat : 12.913624,
      lng: 77.593337,
      draggable : true
    },
    {
      name : "Company Two",
      lat : 12.933624,
      lng: 77.513337,
      draggable : true
    },
    {
      name : "Company One3",
      lat : 12.913425,
      lng: 77.596502,
      draggable : true
    },
  ];
  constructor(){

  }

}
interface marker {
  name?:string;
  lat: number;
  lng: number;
  draggable: boolean;
}
