export interface Usuario {
  email: string;
  senha: string;
}

export interface RetornoMock {
  sucesso: boolean;
  usuario: Usuario;
  token: string;
}
