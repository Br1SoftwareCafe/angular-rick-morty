import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Define tu query GraphQL
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

// Define una interfaz para tipar tus datos que vas a recibir
export interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

interface CharactersResponse {
  characters: {
    results: Character[];
  };
}

@Injectable({
  providedIn: 'root', // Lo hace disponible en toda la aplicación
})
export class CharactersService {
  constructor(private apollo: Apollo) {}

  getCharacters(): Observable<Character[]> {
    return this.apollo
      .watchQuery<CharactersResponse>({
        query: GET_CHARACTERS,
      })
      .valueChanges.pipe(map((result) => result.data.characters.results));
  }
}
