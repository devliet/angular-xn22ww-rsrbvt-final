import { Component } from '@angular/core';

import { myHero } from '../myhero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new myHero(-1, '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
