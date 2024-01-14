import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';
import { ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });
        if (email === 'X3Jt5@example.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }
        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(3000));

    return httpCallObservable;
  }

  // validate(
  //   control: AbstractControl<any, any>
  // ): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   return of({
  //     emailTaken: true,
  //   }).pipe(delay(1000));
  // }
}
