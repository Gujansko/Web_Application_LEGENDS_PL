import { Component, OnInit } from '@angular/core';
import { FuncsService } from '../funcs.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private funcs : FuncsService, private router : Router) { }

  user : any;
 
  login()
  {
      (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "lightgrey";
      (document.getElementById("username") as HTMLInputElement).style.borderColor = "lightgrey";

      let username_i = (document.getElementById("username") as HTMLInputElement).value;
      let password_i = (document.getElementById("InputPassword") as HTMLInputElement).value;
      if(!username_i.length && !password_i.length)
      {
        (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
        (document.getElementById("username") as HTMLInputElement).style.borderColor = "red";
        Swal.fire(
          {
            icon: 'error',
            title: 'Błąd',
            text: 'Należy podać nazwę użytkownika i hasło!',
            confirmButtonColor: "#000004ff"
          }
        )
        return;
      }
      else if(!username_i.length)
      {
        (document.getElementById("username") as HTMLInputElement).style.borderColor = "red";
        Swal.fire(
          {
            icon: 'error',
            title: 'Błąd',
            text: 'Należy podać nazwę użytkownika!',
            confirmButtonColor: "#000004ff"
          }
        )
        return;
      }
      else if(!password_i.length)
      {
        (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
        Swal.fire(
          {
            icon: 'error',
            title: 'Błąd',
            text: 'Należy podać hasło!',
            confirmButtonColor: "#000004ff"
          }
        )
        return;
      }


      this.funcs.loginUser().subscribe(data => {
        this.user = data;
        let str = "";
        str = JSON.stringify(this.user);

        if (str === '[]') {
          (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
          (document.getElementById("username") as HTMLInputElement).style.borderColor = "red";
          Swal.fire(
            {
              icon: 'error',
              title: 'Błąd',
              text: 'Taki użytkownik nie istnieje!',
              confirmButtonColor: "#000004ff"
            }
          )
          return;
        }
  
        else if (str !== '[]') 
        {
          var pos = str.search("p1");
          var pos1 = pos;
          for (pos1; ; ++pos1) 
          {
            if (str[pos1] === ',')
              break;
          }
          var password = str.substring(pos + 5, pos1 - 1);
  
          if (password_i !== password) 
          {
            (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
            Swal.fire(
              {
                icon: 'error',
                title: 'Błąd',
                text: 'Podano błędne hasło',
                confirmButtonColor: "#000004ff"
              }
            )
            return;
          }
          else
          {
            (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "grey";
            (document.getElementById("username") as HTMLInputElement).style.borderColor = "grey";
            Swal.fire(
              {
                icon: 'success',
                title: 'Sukces',
                text: 'Udało ci się zalogować!',
                confirmButtonColor: "#000004ff"
              }
            )
            this.router.navigateByUrl("/main");
          }
        }
      })
  }
  ngOnInit(): void {
  }

}
