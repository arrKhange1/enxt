import { asyncScheduler, concat, connect, debounceTime, OperatorFunction, SchedulerLike, take } from 'rxjs';

export function debounceTimeAfter<T>(
  amount: number,
  dueTime: number,
  scheduler: SchedulerLike = asyncScheduler,
): OperatorFunction<T, T> {
  return connect((value) => concat(value.pipe(take(amount)), value.pipe(debounceTime(dueTime, scheduler))));
}
