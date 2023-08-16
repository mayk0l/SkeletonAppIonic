import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /*
  Se genera el modelo user con dos claves
  cada clave tiene su valor inicial
  */

  user={
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(){

    //declaro e instancio un elemento de tipo NavigationExtras

    let navigationExtras: NavigationExtras={
      state:{
        user: this.user  //Al estado le asignamos un objeto con clave y valor
      }
    }

    console.log(this.user)
    this.router.navigate(['/home'], navigationExtras);
  }

}
