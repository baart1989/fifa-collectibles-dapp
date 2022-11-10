export type ApiError = {
  error: ApiErrorTypes;
};

export type ApiErrorTypes =
  | 'Unable to create user'
  | 'Delete data failed'
  | 'User is not logged in';
