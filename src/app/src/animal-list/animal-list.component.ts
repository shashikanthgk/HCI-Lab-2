import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  timeLeft: number = 10;
  interval:any;
  toggle:boolean = false;
  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      if(this.timeLeft >0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.toggle = true;

      }
    },1000)


  }



}
