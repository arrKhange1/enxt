import { catchError, of, OperatorFunction, startWith } from 'rxjs';

export interface LoadedValue<T> {
  isLoading: boolean;
  error?: Error;
  data?: T;
}

export abstract class WithLoading {
  getLoadingValue<T>(): LoadedValue<T> {
    return { isLoading: true };
  }

  public buildReadyValue<T>(data: T): LoadedValue<T> {
    return {
      isLoading: false,
      data,
    };
  }

  public startWithLoading<T>(): OperatorFunction<LoadedValue<T>, LoadedValue<T>> {
    return startWith(this.getLoadingValue<T>());
  }

  public catchLoadingError<T>(): OperatorFunction<LoadedValue<T>, LoadedValue<T>> {
    return catchError((error) => {
      console.error('Error occurred:', error);
      return of({ isLoading: false, error });
    });
  }
}
