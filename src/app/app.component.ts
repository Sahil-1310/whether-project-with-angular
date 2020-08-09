  import { WheatherService } from './service/-wheather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'wheather';
latitude:number;
longitude:number;
  constructor (private WheatherService: WheatherService) {}

ngOnInit() {  this.setCurrentLocation();   }
output;

 get(city)
 {
   this.WheatherService.getInfo(city).subscribe(res=>
   {
     this.output=res;
     console.log(this.output)
   })
 }

 //onlocation fetching data
 setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.WheatherService.getonlocation(this.latitude,this.longitude).subscribe(data=>
        {
          this.output=data;
          console.log(this.output)
        })
    });
}

 }
}



