import { Component } from '@angular/core';

import { myHero } from '../myhero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new myHero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  //model = new myHero(18, '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero(){
    this.model = new myHero(42, '', '');
  }
}
