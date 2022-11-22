import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sottoscrizione: any | undefined;
  reactiveForm!: FormGroup;

  constructor(private firebase: FirebaseService) { }

  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe()
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    }

  onSubmitReactive(){
    console.log(this.reactiveForm)
    this.firebase.insert('https://corso-angular-e0c40-default-rtdb.europe-west1.firebasedatabase.app/persone.json',{
      nome: this.reactiveForm.value.nome,
      email: this.reactiveForm.value.email
    }).subscribe(data =>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe(numero =>{
      console.log(numero)
    })
    this.reactiveForm = new FormGroup({
      nome: new FormControl("Luca", Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }
}
