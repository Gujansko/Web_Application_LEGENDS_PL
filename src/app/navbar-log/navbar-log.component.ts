import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-log',
  templateUrl: './navbar-log.component.html',
  styleUrls: ['./navbar-log.component.css']
})
export class NavbarLogComponent implements OnInit {

  @Input() user_name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
