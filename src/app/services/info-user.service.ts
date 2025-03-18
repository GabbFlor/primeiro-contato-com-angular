import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor() { }

  // coleta informações do usuário atualmente logado (apenas um teste)
  user = {
            id: 2025, 
            nome: "Florindo", 
            email: "florindo@gmail.com", 
            idade: 18
          }
          
}
