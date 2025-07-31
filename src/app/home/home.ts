import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor, *ngIf
import { Observable } from 'rxjs';
import { CharactersService, Character } from '../characters'; // ¡Importa tu nuevo servicio!

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  characters$!: Observable<Character[]>; // Usamos un $ para indicar que es un Observable

  constructor(private charactersService: CharactersService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters();
  }
}
