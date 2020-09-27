import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _Event_Url="http://localhost:3000/api/events"
  private _SpecialEvent_Url="http://localhost:3000/api/special"
  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._Event_Url)
  }
  getSpecialEvents(){
    return this.http.get<any>(this._SpecialEvent_Url)
  }
}
