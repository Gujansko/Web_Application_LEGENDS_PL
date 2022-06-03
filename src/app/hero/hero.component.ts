import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() title!: string;
  @Input() text!: string;
  @Input() photo!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() reverse!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
