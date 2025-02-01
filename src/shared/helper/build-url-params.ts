import { HttpParams } from '@angular/common/http';

export function buildUrlParams(urlParamsObject: Record<string, string | boolean | number | null>): HttpParams {
  let httpParams = new HttpParams();
  Object.keys(urlParamsObject).forEach((key) => {
    const value = urlParamsObject[key];
    if (value !== null) httpParams = httpParams.set(key, value);
  });
  return httpParams;
}
