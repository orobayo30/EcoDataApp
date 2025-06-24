import { Component, OnInit} from '@angular/core';
import { IonProgressBar } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  public progress = 0;

  tips: string[] = [
    'Para distancias cortas usa la bicicleta  camina.',
    'Para trayectos largos trata de usar el transporte público.',
    'Si tiene vehiculo propio, trata de compartirlo con mas personas en tu trayecto.',
    'Desconecta los aparatos que no estés usando.',
    'Trata de usar la luz natural en lugar de la artificial.',
    'Utiliza bombillas de bajo consumo.',
    'Reduce el desperdicio de alimentos.',
    'Evita los envace plasticos de un solo uso.',
    'Trata de nos gastar tanta agua',
    'Recicla los materiales que puedas.',
  ];

  currentTipIndex = 0;

  nextTip() {this.currentTipIndex = (this.currentTipIndex + 1) % this.tips.length; // Cambia al siguiente consejo
  }

  

  constructor() { 
    setInterval(() => {
      this.progress += 0.01;
      // Resetea la barra de progreso cuando esta llegue  100%

      if(this.progress > 1){
        setTimeout(() => {
          this.progress = 0;
      }, 1000);
    }
  }, 50);
}
  

  ngOnInit() {
  }

}
