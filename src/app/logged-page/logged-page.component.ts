import { Component, OnInit } from '@angular/core';
import { FuncsService } from '../funcs.service';
import { Tournament } from '../tournament';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-page',
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.css']
})
export class LoggedPageComponent implements OnInit {

  constructor(private funcs : FuncsService, private router : Router) { }
  
  display = "none";
  UserName :string = "userName";
  users : any;
  color : string = "#F7B801";

  tournaments : Tournament[] = [{name : "Spring Invitational",category : "1vs1 Bez nagród", sponsor : "Brak", date : "15.06.2022", filled : 6, p1 : "Ios", p2 : "GrandCanion96", p3 : "Empfall132", p4 : "Grenter", p5 : "Hubert993", p6 : "Popeye", p7 : "", p8 : ""},
  {name : "Świat Pojedynków",category : "1vs1 Z nagrodami", sponsor : "GamersWorld.pl", filled : 8, date : "18.06.2022", p1 : "GraKula111", p2 : "Wequn", p3 : "Manper4", p4 : "PopoGun", p5 : "Merchant192", p6 : "Qenqu", p7 : "Cempian", p8 : "Fred90"},
  {name : "Legendy powstają",category : "1vs1 Z nagrodami", sponsor : "Legends.pl", filled : 7, date : "19.06.2022", p1 : "Wacpan654", p2 : "Fenquan", p3 : "Rempra331", p4 : "Yua890", p5 : "Pepiqo", p6 : "Centaur123", p7 : "Asparagus", p8 : ""},
  {name : "Challenge Me",category : "1vs1 Bez nagród", sponsor : "Brak", filled : 4, date : "24.06.2022", p1 : "Gentle", p2 : "Pitfall325", p3 : "Orangutan54", p4 : "Mardigras1254", p5 : "", p6 : "", p7 : "", p8 : ""},
  {name : "OMSI",category : "1vs1 Z nagrodami", sponsor : "OMSI.pl", filled : 8, date : "27.06.2022", p1 : "Aspirin", p2 : "Jolka442", p3 : "UrbanMan", p4 : "Vander", p5 : "Omegalul14567", p6 : "ZażartyWojownik983", p7 : "Uwios", p8 : "Rembrant669"}]
  
  isFilled(turn : Tournament)
  {
    if(turn.p1 == this.UserName ||
      turn.p2 == this.UserName ||
      turn.p3 == this.UserName ||
      turn.p4 == this.UserName ||
      turn.p5 == this.UserName ||
      turn.p6 == this.UserName ||
      turn.p7 == this.UserName ||
      turn.p8 == this.UserName)
      {
        Swal.fire(
          {
            icon: 'error',
            title: 'Jesteś już zapisany',
            text: 'Nie trzeba zapisywać się na turniej podwójnie!',
            confirmButtonColor: "#000004ff"
          }
        )
      }

    else
    {
      Swal.fire(
        {
          icon: 'error',
          title: 'Turniej jest pełny',
          html: 'Niestety w tym turnieju nie zostało już żadne wolne miejsce.<br/>Spróbuj zapisać się na inny.',
          confirmButtonColor: "#000004ff"
        }
      )
    }
  }

  signTurn(turn : Tournament)
  {
    if(turn.p1 == this.UserName ||
      turn.p2 == this.UserName ||
      turn.p3 == this.UserName ||
      turn.p4 == this.UserName ||
      turn.p5 == this.UserName ||
      turn.p6 == this.UserName ||
      turn.p7 == this.UserName ||
      turn.p8 == this.UserName)
      {
        Swal.fire(
          {
            icon: 'error',
            title: 'Jesteś już zapisany',
            text: 'Nie trzeba zapisywać się na turniej podwójnie!',
            confirmButtonColor: "#000004ff"
          }
        )
      }

    else
    {
      if(turn.filled === 0)
      {
        turn.p1 = this.UserName;
      }
      else if(turn.filled === 1)
      {
        turn.p2 = this.UserName;
      }
      else if(turn.filled === 2)
      {
        turn.p3 = this.UserName;
      }
      else if(turn.filled === 3)
      {
        turn.p4 = this.UserName;
      }
      else if(turn.filled === 4)
      {
        turn.p5 = this.UserName;
      }
      else if(turn.filled === 5)
      {
        turn.p6 = this.UserName;
      }
      else if(turn.filled === 6)
      {
        turn.p7 = this.UserName;
      }
      else
      {
        turn.p8 = this.UserName;
      }
      turn.filled++;

      Swal.fire(
        {
          icon: 'success',
          title: 'Zapisałeś się na turniej',
          html: 'Gratulacje zapisałeś się na turniej!<br/>Powodzenia przywoływaczu!',
          confirmButtonColor: "#000004ff"
        }
      )
    }
  }

  ngOnInit(): void {
    this.funcs.currentUser.subscribe(name => 
      {
        this.UserName = name
        if(!this.UserName.localeCompare("userName"))
        {
          Swal.fire(
            {
              icon: 'error',
              title: 'Błąd',
              html: 'Podczas logowania wystąpił błąd!<br/>Spróbuj ponownie.',
              confirmButtonColor: "#000004ff"
            }
          )
          this.router.navigateByUrl("/log");
        }
      });
    this.funcs.getUsers().subscribe(data =>
      {
        this.users = data;
      });
  }

}
