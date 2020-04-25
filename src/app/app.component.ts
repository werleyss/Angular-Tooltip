import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTooltip';

  public visible = false;
  public mouse = {x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y};
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }
}
