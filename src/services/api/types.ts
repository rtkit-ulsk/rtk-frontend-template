export type Pokemon = {
  name: string;
};
export type BaseResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};
