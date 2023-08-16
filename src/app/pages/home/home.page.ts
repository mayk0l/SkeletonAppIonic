import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  /*
  En el constructor del HomePage se colocan por parametros todas aquellas propiedades
  con el siguiente formato
  private = visibilidad
  activeRoute = identificador
  activeRoute = Tipo de Objeto
  : Indica que el identificador sera de la clase posterior a los : puntos
  */

  constructor(private activeroute: ActivatedRoute, private router: Router) {
   // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.data)
      }
    });
  }
}
