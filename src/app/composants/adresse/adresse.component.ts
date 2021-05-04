import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  ville:any;
  codePostal:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Dans adresse.component.html, construisez un lien vers la
    // route /adresse avec deux parametres
    // Dans adresse.component.ts, utilisez la solution snapshot
    // puis observable pour recuperer les parametres. Dans
    // adresse.component.html, on affiche les param` etres.
    // Verifier, en cliquant sur le lien, que les nouveaux parametres sont
    // affiches

     // Solution avec les observables

    // http://localhost:4200/adresse/nice/06000

    // this.route.paramMap.subscribe(res => {
    //   this.ville = res.get('ville');
    //   this.codePostal = res.get('codePostal');
    //   console.log(this.ville + " " + this.codePostal);
    // });

    // Solution avec les snapshots

    this.ville = this.route.snapshot.params.ville;
    this.codePostal = this.route.snapshot.params.codePostal;
    console.log(this.ville + " " + this.codePostal);

  }

}
