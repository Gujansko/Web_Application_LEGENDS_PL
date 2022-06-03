import { Component, OnInit } from '@angular/core';
import { FuncsService } from '../funcs.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private func : FuncsService) { }
  check = false;
  
  ngOnInit(): void {
  }

  register()
  {
    this.func.newUser();
  }
}
