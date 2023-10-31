import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "Saiu a nova versão do Angular";
  @Input()
  Id: string = "0";
}