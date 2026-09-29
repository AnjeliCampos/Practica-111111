import { Component, signal } from '@angular/core';
import { PrimerComponente } from './components/primer-componente/primer-componente';
import { SegundoComponente } from './components/segundo-componente/segundo-componente';

@Component({
  imports: [PrimerComponente, SegundoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_1');
}
