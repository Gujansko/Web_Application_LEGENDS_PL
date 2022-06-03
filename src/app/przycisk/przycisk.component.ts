import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-przycisk',
  templateUrl: './przycisk.component.html',
  styleUrls: ['./przycisk.component.css']
})
export class PrzyciskComponent implements OnInit {

  @Input() text: string = "Dołącz do nas";
  @Input() src: string = "#";

  constructor() { }

  ngOnInit(): void {
  }

}
