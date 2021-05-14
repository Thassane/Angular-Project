import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
<<<<<<< HEAD
import { Personne } from '../interfaces/personne'
import { map, catchError } from 'rxjs/operators';
import { PersonneService } from '../shared/personne.service'
=======
import { Personne } from "../interfaces/personne";
import { map, catchError } from 'rxjs/operators';
import { PersonneService } from '../shared/personne.service';
>>>>>>> 82ca067bbd204e59e82a0e8c2729c4aa148416f9

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolver implements Resolve<Personne> {
  constructor(private personneService: PersonneService, private route:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne> {
<<<<<<< HEAD
    let id:any = route.paramMap.get('id');
    console.log("PersonDetailsResolver  called with "+ id);
    return this.personneService.getPerson(id)
    .pipe(map( data => {
            if (data[0]) {
                console.log(data[0]);
                return data[0];
              } else {
                console.log('redirecting');
                this.route.navigate(['error']);
                return null

              }

          }))

  }

=======
        let id:any = route.paramMap.get('id');
        console.log("PersonDetailsResolver  called with "+ id);
        return this.personneService.getPerson(id)
        .pipe(map(data => {
            if (data[0]) {
                console.log(data[0]);
                return data[0];
            } else {
                console.log('redirecting');
                this.route.navigateByUrl('error', {skipLocationChange: true});
                return null
            }
        }))
  }
>>>>>>> 82ca067bbd204e59e82a0e8c2729c4aa148416f9
}
