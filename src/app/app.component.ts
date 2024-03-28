import { Component } from '@angular/core';
import { SharedataService } from './library/service/sharedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArcheFather';
  remote: any;
  constructor(private pubSubService: SharedataService) {}

  ngOnInit(): void {
    // Suscribirse a un evento desde el Remote
    this.pubSubService.subscribe('eventoRemoto', (msg: string, data: any) => {
      this.remote = data.message;
      console.log('Evento recibido en el Shell:', data);
      // Realizar acciones necesarias con los datos recibidos
    });

  }

  enviarEventoAlRemote(): void {
    // Publicar un evento para el Remote
    console.log("enviando");
    this.pubSubService.publish('eventoShell', { message: 'Hola desde el Shell' });
  }
}
