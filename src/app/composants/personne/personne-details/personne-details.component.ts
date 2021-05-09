import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: number;
  personne: Personne = {};

  constructor(private Router: ActivatedRoute, private personneService: PersonneService, private route: Router) { }

  ngOnInit(): void {
    this.personne = this.Router.snapshot.data['personne'];
   // this.personneService.getPerson(this.id).subscribe(data =>{
     // console.log(data);
      //this.personne = data[0];
    //})
  }
  // Redirige vers le composant personne
  backToPersonList(){
    // this.router.navigateByUrl('/personne');
    this.route.navigate(['/personne']);

  }
}
