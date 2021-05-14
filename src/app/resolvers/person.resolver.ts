import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
<<<<<<< HEAD
=======
import { map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';
>>>>>>> 82ca067bbd204e59e82a0e8c2729c4aa148416f9

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class PersonResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
=======
export class PersonResolver implements Resolve<Personne[]> {

  constructor(private personneService: PersonneService, private route: Router) { }

  // Les Resolver d'Angular permettent d'attendre le
  // retour d'un observable avant d'initialiser / mettre à
  // jour un composant après une mise à jour de l'url.

  // Le Resolver est un service que l'on associe à la route du composant.

  resolve(): Observable<any> {
    return this.personneService.getAllPersons()
      .pipe(map(res => {
        if (res) {
          console.log(res);
          return res;
        } else {
          console.log('redirecting');
          this.route.navigate(['error'], {skipLocationChange: true});
          return null
        }
      }));
>>>>>>> 82ca067bbd204e59e82a0e8c2729c4aa148416f9
  }
}
