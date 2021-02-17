import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  mensaje: string = '';
  mensajeEnviado: Mensaje = new Mensaje();

  constructor(private userService: UserService, private servicioMensaje: MensajesService) { }

  userSelected: User = null;
  users: User[] = [];
  infoUser: boolean = false;

  ngOnInit(): void {
    this.listarUsuario();
  }

  info(): void {
    this.infoUser = !this.infoUser;
  }

  listarUsuario(): void {
    this.userService.listarUsuario().subscribe(
      respuesta => {
        console.log(respuesta);
        this.users = respuesta;
      },
      error => {console.log(error),
      this.mensaje = error.error.error
      }
    );
  }

  escribirMensaje(): void {
    this.mensajeEnviado.idDestinatario = this.userSelected.id;
    this.servicioMensaje.enviarMensaje(this.mensajeEnviado).subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajeEnviado = new Mensaje();
      },
      error => {console.log(error),
      this.mensaje = error.error.error
      }
    )
  }
}
