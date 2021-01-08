import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() selected_animal: any;
  @Input() animal_name: any;





  result: any;
  first: boolean = false;
  second: boolean = false;
  third: boolean = false;
  present_animal: any = ["Yak", "Horse", "Panda", "Lion", "Tiger", "Kangaroo", "Monkey", "Cat"]


  p_animal1 = [
    {
      'name': 'Yak',
      'color': 'blue',
      'weight': 'normal',
      'size':"1.2rem",
      "shadow": '0px 0px #ff0000',

    },
    {
      'name': 'Horse',
      'color': 'brown',
      'weight': 'normal',
      'size':"1.2rem",
      "shadow": '0px 0px #ff0000',
    },
    {
      'name': 'Panda',
      'color': 'crimson',
      'weight': 'normal',
      'size':"1.2rem",
      "shadow": '0px 0px #ff0000',
    },
    {
      'name': 'Lion',
      'color': 'peru',
      'weight': 'normal',
      'size':"1.2rem",
      "shadow": '0px 0px #ff0000',
    }
  ];


  p_animal2 = [
    {
      'name': 'Tiger',
      'color': 'blue',
      'weight': 'normal',
      'size':"1.2rem",
      "shadow": '0px 0px #ff0000',

    },
    {
      'name': 'Kangaroo',
      'color': 'brown',
      'weight': 'normal',
      'size': "1.2rem",
      "shadow": '0px 0px #ff0000',

    },
    {
      'name': 'Monkey',
      'color': 'crimson',
      'weight': 'normal',
      'size': "1.2rem",
      "shadow": '0px 0px #ff0000',
    },
    {
      'name': 'Cat',
      'color': 'peru',
      'weight': 'normal',
      'size': "1.2rem",
      "shadow": '0px 0px #ff0000',
    }
  ];


  dict = { "Yak": 0, "Horse": 1, "Panda": 2, "Lion": 3, "Tiger": 4, "Kangaroo": 5, "Monkey": 6, "Cat": 7 }
  constructor() { }
  ngOnInit(): void {
    console.log(this.selected_animal)
    console.log(this.animal_name)

    let top_count = 0;
    let bottom_count = 0;
    for (let i = 0; i < this.animal_name.length; i++) {
      if (this.selected_animal[i]) {

        let x: String = this.animal_name[i].name
        let index = this.dict[x];

        if (index == null)
          continue
        if (index === 0 || index === 3 || index === 4 || index === 7) {
          top_count++;
        }
        else {
          bottom_count++;
        }

        if (index <= 3) {
          this.p_animal1[index].weight = "bold";
          this.p_animal1[index].shadow = "0px 2px black";
          this.p_animal1[index].size = '1.4rem'

        }
        else {
          this.p_animal2[index - 4].weight = "bold";
          this.p_animal2[index - 4].shadow = "0px 2px black";
          this.p_animal2[index - 4].size = '1.4rem'

        }
      }
    }

    if(top_count === 0 && bottom_count === 0)
    {
      this.first = true;
      this.second = false;
      this.third = false;
    }

    else if(top_count>bottom_count)
    {
      this.first = false;
      this.second = true;
      this.third = false;
    }
    else if(top_count<=bottom_count){
      this.first = false;
      this.second = false;
      this.third = true;
    }


  }
  restart()
  {
    window.location.reload()
  }
}
