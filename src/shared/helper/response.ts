import { catchError, of, OperatorFunction, startWith } from 'rxjs';

export interface ServerResponse<T> {
  isLoading: boolean;
  error?: Error;
  data?: T;
}

export abstract class AbstractResponseService {
  getLoadingValue<T>(): ServerResponse<T> {
    return { isLoading: true };
  }

  public buildReadyValue<T>(data: T): ServerResponse<T> {
    return {
      isLoading: false,
      data,
    };
  }

  public startWithLoading<T>(): OperatorFunction<ServerResponse<T>, ServerResponse<T>> {
    return startWith(this.getLoadingValue<T>());
  }

  public catchLoadingError<T>(): OperatorFunction<ServerResponse<T>, ServerResponse<T>> {
    return catchError((error) => {
      console.error('Error occurred:', error);
      return of({ isLoading: false, error });
    });
  }
}
