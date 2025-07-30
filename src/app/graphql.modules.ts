import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
// Importa provideHttpClient si lo necesitas, dependiendo de tu versión de Angular y si usas Standalone Components
import { provideHttpClient } from '@angular/common/http';

const uri = 'https://rickandmortyapi.com/graphql'; // <-- ¡Aquí está la URL de la API!

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
// export class GraphQLModule {}