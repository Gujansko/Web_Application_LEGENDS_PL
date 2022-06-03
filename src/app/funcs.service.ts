import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FuncsService {

  constructor(private http: HttpClient, private router : Router) { }


  private userSource = new BehaviorSubject<string>("userName");
  currentUser = this.userSource.asObservable();

  changeUser(user : string)
  {
    this.userSource.next(user);
  }

  getUsers()
  {
    return this.http.get('https://imsi.pl:5000/players/Legends');
  }

  loginUser()
  {
    const name_i = (document.getElementById("username") as HTMLInputElement).value;
    
    let str =  "https://imsi.pl:5000/player/"
    let str1 = str.concat(name_i.toString());

    this.changeUser(name_i);
    return this.http.get(str1)
  }
  
  newUser()
  {
    (document.getElementById("username") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("InputPasswordAgain") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("InputEmail") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("age") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("region") as HTMLInputElement).style.borderColor = "lightgrey";
    (document.getElementById("rank") as HTMLInputElement).style.borderColor = "lightgrey";

    let user;
    const name_i = (document.getElementById("username") as HTMLInputElement).value;
    const password_i1 = (document.getElementById("InputPassword") as HTMLInputElement).value;
    const password_i2 = (document.getElementById("InputPasswordAgain") as HTMLInputElement).value;
    const email_i = (document.getElementById("InputEmail") as HTMLInputElement).value;
    const age_i = (document.getElementById("age") as HTMLInputElement).value;
    const region_i = (document.getElementById("region") as HTMLInputElement).value;
    const rank_i = (document.getElementById("rank") as HTMLInputElement).value;


    if(!name_i.length)
    {
      (document.getElementById("username") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Nazwa użytkownika jest wymagana!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("username") as HTMLInputElement).style.borderColor = "grey";


    if(!password_i1.length)
    {
      (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Hasło jest wymagane!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "grey";


    if(!password_i2.length)
    {
      (document.getElementById("InputPasswordAgain") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Hasło jest wymagane!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("InputPasswordAgain") as HTMLInputElement).style.borderColor = "grey";
    if(password_i1 !== password_i2)
    {
      (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "red";
      (document.getElementById("InputPasswordAgain") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Podane hasła są różne!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("InputPassword") as HTMLInputElement).style.borderColor = "grey";
    (document.getElementById("InputPasswordAgain") as HTMLInputElement).style.borderColor = "grey";


    if(!email_i.length)
    {
      (document.getElementById("InputEmail") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Adres e-mail jest wymagany',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    const control = new FormControl(email_i, Validators.email);
    if(control.errors !== null)
    {
      (document.getElementById("InputEmail") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Adres e-mail jest niepoprawny!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("InputEmail") as HTMLInputElement).style.borderColor = "grey";


    if(!age_i.length)
    {
      (document.getElementById("age") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Wiek jest wymagany!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    if(parseInt(age_i) < 12)
    {
      (document.getElementById("age") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Minimalny wiek dla użytkownika to 12 lat!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    if(parseInt(age_i) > 122)
    {
      (document.getElementById("age") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Maksymalny wiek dla użytkownika to 122 lata!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("age") as HTMLInputElement).style.borderColor = "grey";


    if(!region_i.localeCompare("-1"))
    {
      (document.getElementById("region") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Region jest wymagany!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("region") as HTMLInputElement).style.borderColor = "grey";


    if(!rank_i.localeCompare("-1"))
    {
      (document.getElementById("rank") as HTMLInputElement).style.borderColor = "red";
      Swal.fire(
        {
          icon: 'error',
          title: 'Błąd',
          text: 'Ranga jest wymagana!',
          confirmButtonColor: "#000004ff"
        }
      )
      return;
    }
    (document.getElementById("rank") as HTMLInputElement).style.borderColor = "grey";

    
    const body =
    {
      name: name_i,
    };
    this.http.put('https://imsi.pl:5000/players',body).subscribe(data =>
    {
      user = JSON.parse(JSON.stringify(data));
      let str = 'https://imsi.pl:5000/players/';
      let str1 = (user.id).toString();

      if(str1 === '0')
      {
        Swal.fire(
          {
            icon: 'error',
            title: 'Błąd',
            text: 'Użytkownik o takiej nazwie już istnieje!',
            confirmButtonColor: "#000004ff"
          }
        )
        return;
      }

      let str2 = str.concat(str1.toString());

      const body1 =
    {
      p0 : "Legends",
      p1 : password_i1,
      p2 : email_i,
      p3 : age_i,
      p4 : region_i,
      p5 : rank_i
    };
    this.http.put(str2,body1).subscribe(data =>
      {
        Swal.fire(
          {
            icon: 'success',
            title: 'Sukces',
            text: 'Udało ci się założyć konto',
            confirmButtonColor: "#000004ff"
          }
        )
        this.router.navigateByUrl("/log");
    })
    })
  }
}
