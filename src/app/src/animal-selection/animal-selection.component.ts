import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-selection',
  templateUrl: './animal-selection.component.html',
  styleUrls: ['./animal-selection.component.css']
})
export class AnimalSelectionComponent implements OnInit {

  bypass:boolean = false;
  animals_name = [
    {
      'name':'Horse',
      'color': 'blue',
      'weight':'lighter',
      "shadow": '0px 0px white',
  
    },
    {
      'name':'Monkey',
      'color': 'brown',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',

    },
    {
      'name':'Lion',
      'color': 'crimson',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Panther',
      'color': 'peru',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Cat',
      'color': 'darkmagenta',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Panda',
      'color': 'darkgreen',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Leapord',
      'color': 'chocolate',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Tiger',
      'color': 'darkred',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Yak',
      'color': 'sienna',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    },
    {
      'name':'Kangaroo',
      'color': 'deeppink',
      'weight':'lighter',
      "shadow": '0px 0px #ff0000',
    }
  ];
  selected_animal:any = [false,false,false,false,false,false,false,false,false,false];
  constructor() { }

  ngOnInit(): void {


  }

  setIndex(index:number)
  {
    console.log(index)
    if(this.selected_animal[index] === false)
    {
      this.selected_animal[index] = true;
      this.animals_name[index].weight = "bold";
      this.animals_name[index].shadow = "1px 1px  white";
    }
    else{
      this.selected_animal[index] = false;
      this.animals_name[index].weight = "normal";
      this.animals_name[index].shadow = "0px 0px black";
    }
  }

  OnSubmit()
  {
    this.bypass = true
  }

}
