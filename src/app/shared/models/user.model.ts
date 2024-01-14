export interface User {
  email: string;
  password: string;
}

export interface RetornoMock {
  sucess: boolean;
  user: User;
  token: string;
}
