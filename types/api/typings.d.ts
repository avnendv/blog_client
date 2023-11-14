/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace API {
  /** Globally return results through table query */
  type TableListResult<T = any> = {
    list: T;
    pagination?: PaginationResult;
  };

  /** Global common table pagination return data structure */
  type PaginationResult = {
    page: number;
    size: number;
    total: number;
  };

  /** Global common table pagination request parameters */
  type PageParams<T = any> = {
    limit?: number;
    page?: number;
  } & {
    [P in keyof T]?: T[P];
  };

  type ErrorResponse = {
    /** The error code of the business agreement */
    errorCode: string;
    /** Business error message */
    errorMessage?: string;
    /** Whether the business request is successful */
    success?: boolean;
  };

  type PaginationType = {
    total: number;
    pages: number;
    offset: number;
    limit: number;
    currentPage: number;
  };

  type ListResult<T = any> = {
    result: number;
    message?: string;
    pagination: PaginationType;
    data: T[];
  };
}
