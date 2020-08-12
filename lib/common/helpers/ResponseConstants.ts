export enum Status {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  PAGE_NOT_FOUND = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export type Statuses = keyof typeof Status;
