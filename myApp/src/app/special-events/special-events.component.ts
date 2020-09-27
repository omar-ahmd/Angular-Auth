import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialevents=[]
  constructor(private eventservice:EventService) { }

  ngOnInit(): void {
    this.eventservice.getSpecialEvents()
        .subscribe(
          res => this.specialevents = res,
          err => console.log(err)
        )
  }

}
