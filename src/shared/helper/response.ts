import { catchError, of, OperatorFunction, startWith } from 'rxjs';

export interface ServerResponse<T> {
  isLoading: boolean;
  error?: Error;
  data?: T;
}

/**
 * Класс, который наследуется API сервисами
 * для построения ответа с сервера вместе с loading, error и data
 * В конце запроса в ответ вставляются данные и поле isLoading = false,
 * Если произошла ошибка
 */
export abstract class AbstractResponseService {
  getLoadingValue<T>(): ServerResponse<T> {
    return { isLoading: true };
  }

  /**
   * Метод, который вызывается после успешного выполнения запроса
   * В конце запроса в ответ вставляются данные и поле isLoading = false
   * @param data - Данные, который пришли с сервера
   */
  public buildReadyValue<T>(data: T): ServerResponse<T> {
    return {
      isLoading: false,
      data,
    };
  }

  /**
   * Operator Function, который вызывается в начале потока с запросом
   * В начале запроса поле ответа isLoading сеттится в true
   */
  public startWithLoading<T>(): OperatorFunction<ServerResponse<T>, ServerResponse<T>> {
    return startWith(this.getLoadingValue<T>());
  }

  /**
   * Operator Function, который вызывается, если запрос выполнился с ошибкой
   * @returns Поток с ошибкой и isLoading = false
   */
  public catchLoadingError<T>(): OperatorFunction<ServerResponse<T>, ServerResponse<T>> {
    return catchError((error) => {
      console.error('Error occurred:', error);
      return of({ isLoading: false, error });
    });
  }
}
