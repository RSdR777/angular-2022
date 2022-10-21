// copiar el json desde la url
// crear el archivo request-model.ts
// CTRL + SHIFT + P --> Elegir JSON to ts clipboard
// Pegar

import { UsuarioRepository } from "../../../repository";

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface SingleUser {
    data: User;
    support: Support;
}

export interface Support {
  url: string;
  text: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}