import { asyncScheduler, concat, connect, debounceTime, OperatorFunction, SchedulerLike, take } from 'rxjs';

/**
 * Operator Function, изменяющий debounceTime для исключения задержки для начальных значений
 * @param amount - Сколько данных в потоке пропустить в начале без задержки
 * @param dueTime - Задержка между двумя последними значениями в потоке
 * @param scheduler - Шедулер
 */
export function debounceTimeAfter<T>(
  amount: number,
  dueTime: number,
  scheduler: SchedulerLike = asyncScheduler,
): OperatorFunction<T, T> {
  return connect((value) => concat(value.pipe(take(amount)), value.pipe(debounceTime(dueTime, scheduler))));
}
