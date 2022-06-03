import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() src: string = "#";
  @Input() src_login: string = "#";
  @Input() src_reg: string = "#";

  constructor() { }

  ngOnInit(): void {
  }

}
