import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { routes } from './app.routes';

// Define la URI de tu API GraphQL
const uri = 'https://rickandmortyapi.com/graphql';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Manejo de errores globales
    provideZonelessChangeDetection(), // Cambio de detección sin zona
    provideRouter(routes), // Tus rutas
    provideHttpClient(),    // Necesario para que Apollo haga las peticiones HTTP

    // Configuración de Apollo Client
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(), // La caché de Apollo
          link: httpLink.create({ uri }), // Enlace HTTP a tu API GraphQL
        };
      },
      deps: [HttpLink], // Dependencias para useFactory
    },
    Apollo, // Registra el servicio Apollo para que pueda ser inyectado
    // provideClientHydration(withEventReplay()) // Si lo usas, déjalo
  ]
};
