import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WheatherService {
api="c034517206d550201c42125c34326707"
  constructor(private http:HttpClient) { }
  getInfo( city:string)
  {
    let params = new HttpParams()
    .set('q', city)
    .set('appid',this.api)

    return this.http.get('https://api.openweathermap.org/data/2.5/weather',{ params });
  }

  getonlocation( lattitude,longitude)
{
  let params =new HttpParams()
  .set( 'lat',lattitude)
  .set('lon',longitude)
  .set('units','imperial')
  .set('appid',this.api)
  return this.http.get('https://api.openweathermap.org/data/2.5/weather',{params});
}
}
