# Angular 14 Documentazione Generata Automaticamente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<hr>

>Documentazione scritta da me

# Tutorial
I componenti hanno bisogno di avere `import { Component } from '@angular/core';` in cima alla pagina.
In angular a quanto pare, va per la maggiore usare un altro framework CSS, non Bootstrap, non Tailwind ma [Angular Material](https://material.angular.io/)
quindi lo installo come una qualsiasi dependencies.

Quando si aggiunge qualche elemento da _Angual Material_ lo si importa come se fosse un Modulo quindi si aggiunge la stringa `import { MatSliderModule } from '@angular/material/slider';` in `app.module.ts` e si aggiunge anche nella lista di imports
```ts
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ]
```
una volta fatto questo posso incollare l'html del mio elemento, copia incollandolo dal sito, nel mio caso questo:
```html
<mat-slider min="1" max="5" step="0.5" value="1.5"></mat-slider>
```
>Mi sembra chiaro che ormai le squadre siano definite, io tifo per la React-Tailwind-Node!!🍻

Per determinati componenti sarà necessario prendersi il CSS ed eventualmente la logica se ne esiste una.

### Ciclo divita di un componente
![img](https://i.ibb.co/9vvh4tL/Immagine-2022-10-13-154057.png)

- `ngOnInit()` indica l'inizzializazione del componente ed avviene solo la prima volta, solo una volta.
- `ngDoCheck()` fa un controllo, se il controllo risulta vuoto si passa a
- `ngAfterContentinit()` qui si parla del momento in cui viene inizializato il contenuto testuale del componente, questo momento esiste una sola volta, la prima volta.
- `ngAfterContentChecked()` check sul contenuto del componente
- `ngAfterViewInit()` inizializza tutto il resto della pagina, cioè il risultato finale.
- `ngAfterViewChecked()` controlla lo stato del componente fino a che non viene distrutto.
Quando si ritorna sulla stessa pagina si riparte da capo, ma senza le inizializzazioni (le parti rosse).

### Data bind

>Anche qui si usa, anche se in maniera più maschertata, la MWC dove la logica si chiama appunto Model
Il data biding collega la View col Model fondamentalmente.

Il data binding chiaramente esiste one e two way, e per farlo esistono 4 modi:
- `string interpolation` ossia mettere la variabile nella view con le graffe `{{variabile}}`
- `property binding` ossia con le proprietà dell'html, ad esempio cambiare i colori del testo. Per esempio `[disabled]='isDisabled'`.
- `event binding` ossia eventi che vengono avviati dalla view e si riperquotono nel model.
- `two way binding` bhe ci sono mille esempi per questo tipo di cosa.

### Directives
- Sono classi che servono per essere messe nel DOM per cambiare il comportamento degli elementi, ad esempio `ngModel`.
- Si dividono in tre categorie,
  - Built-in ad esempio ngClass, ngStyle, ngModel cose che modificano il comportamento dell'oggetto
  - Attribute che modificano il comportamento o apparenza di un elemento, come ad esempio può essere disabled
  - Structural scritte con l'asterisco e cambiano il DOM aggiungendo o rimuovendo elementi, ad esempio *ngIf, *ngFor

#### *ngIf
Semplice direi:
- `<p *ngIf="4<5">Paragrafo!</p>` Appare
- `<p *ngIf="6<5">Paragrafo!</p>` Non appare

Le cose iniziano a diventare interesanti quando si parla dell'else e dei template.

Posso renderizzare delle condizioni inserendo il codice dell'else dentro un nuovo blocco di codice:
```html
<p *ngIf="isVisible; then bloccoIf else bloccoElse"></p>
<ng-template #bloccoIf>
  <p>Sono visibile</p>
</ng-template>
<ng-template #bloccoElse>
  <p>non sono visibile</p>
</ng-template>
```
>ng-template è un wrapper!

#### *ngFor, *ngSwitch, *ngStyle

Vedi codice sorgente

#### ngClass
Esempio nel codice, ma tanto non so a quanto possa servire per lo stile, usando un framework CSS

### Passare dati da Parent a Chiild e viceversa
qui le cose si fanno più interessanti dai, o perlomeno utili!

Anche qui guardare il codice, mi sono preso alcune libertà dall'esempio, io non ho richiamato un componente che stava dentro AppComponent, ma ho proprio richiamato da un componente ad un altro.

Che senso ha richiamare qualcosa che sta nella root se tanto la struttura non avrà mai nulla nella root!?
Oltretutto aggiungendo l'evento `Onchanges` riesco a riscrivere i dati cambiati.
> SI ma non funziona tra parenti sibling, funziona solo da figlio a padre, tra sibling si deve comunque fare col metodo @Input e con il property binding.
>> questa roba fa schifo! 🤮

### Usare i Template

Nell'html si fa `<input #inputSaluti value='ciao'>` e nel component.ts si fa `@ViewChild('inputSaluti') valoreInput!: ElementRef` e significa che nella view deve associare al __figlio della view__ un valore.

Il punto esclamativo dopo il nome della variabile serve ad confermare a Typescript che questa variabile non sarà mai null, altrimenti l'ElementRef va in errore.
> chiaramente la variabile avrà un valore dopo che la view è stata renderizzata!!

Considerando che la variabile `valoreInput` è di tipo `ElementRef` che a sua volta è un riferimento ad una classe, devo cercare il vero valore in `valoreInput.nativeElement.value`

> è possibile fare anche una cosa cosi `@ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>` per essere più specifici dato che sto usando Typescript

### Creare Direttive

- Creare direttive
  - per creare la direttiva si usa `ng g d nomedirettiva`
  - vedi codice in [highlight.directive.ts](../Angular14/src/app/drettive/highlight/highlight.directive.ts)
  - con `HostListener` creo un listener che ascolta un evento custom
- Passare dati alle direttive
  - per passare i dati alle direttive si usa `@Input()` vedi codice [highlight.directive.ts](../Angular14/src/app/drettive/highlight/highlight.directive.ts) e in [app.module.ts](./src/app/app.module.ts) e in [app.component.ts](app/../src/app/app.component.ts)
  - la direttiva se inserita in un databinding diventa essa stessa la proprietà.
- Aggiungere una seconda proprietà
  - aggiungere una proprietà in @Input che non sia chiaramente il nome del selettore

### Pipes
- Funzioni da usare in string interpolation (esempio nel codice)
  - Uppercase
  - Lowercase
  - datapipe (per date)
  - decimalpipe, percentagepipe
  - currencypipe

### Services
Servono a spostare la logica dei componenti dentro un servizio appunto.
Solitamente i componenti servono solo a fare vedere roba, la logica sta nel service.

Si generano con `ng g s nomeservizio` nulla di grave.

I servizi si aggiungono nella [app.module.ts](src/app/app.module.ts) sotto la voce `providers:[]`

Nel costruttore di un componente si può importare il servizio cosi:
`constructor( servizioProva: ServizioProvaService) {}`

### Routing
L'app routing è a tutti gli effetti un modulo, quindi fa importato come tale, soltamente tanto quando si crea l'app si crea anche questo modulo.
Una volta definito il routing in [app-routing.module.ts](src/app/app-routing.module.ts) si aggiunge il tag `<router-outlet></router-outlet>` dove avverrà la magia.

Per fare le cose n maniera più cristiana si usa `routerLink` vedi [app.component.html](src/app/app.component.html).

E' possibile aggiungere parametri al routing, stile ID, vedi codice.
Fondamentalmente è necessario usare l'`ActivatedRoute` importandolo nel costruttore e poi usando il metodo `this.route.snapshot.paramMap.get('id')` per consentire al routing di capire che si sta chiedendo il parametro id. Follia.

Adesso il valore dell'id che cerco è contenuto in tutta questa roba qui `this.route.snapshot.paramMap.get('id')`.
Una cosa più intelligente è assegnare un routerLink ad ogni elemento della lista, facendo muovere solo l'indice dentro il routerLink stesso:
```
<div *ngFor="let persona of persone; index as i">
    <a routerLink="/contatti/{{i}}">
      <p style="margin-left: 10px;">{{ persona.nome }} {{ persona.cognome }}</p>
    </a>
</div>
```
>> N.B. Per passare i parametri si fa con il decoratore @Input!!

Se si fa il routing di una route figlio però le cose cambiano un sacco!

### Routing Guard
Servizio di [autenticazione](src/app/servizi/auth.service.ts) per evitare che tutti possano accedere a tutte le route, ma solo i loggati.
E' necessario anche creare una [Guard](src/app/servizi/auth.guard.ts) con `ng g guard auth`.

Una volta fatto questo si va ad assegnare alla route che voglio sorvegliare la proprietà `canActivate: [AuthGuard]`  con il relativo file che farà da guardia, aspettandosi un autenticazione avvenuta e passatagli dal servizio auth.service.ts.

Stessa cosa vale per la gestione di un ruolo, che sarà un autenticazione dentro l'altra fondamentalmente, solo gestita con `canActivateChild: [AuthGuard]`.

### Observable
Sono tipi di variabile messi a disposizione dalla libreria RxJs, come ad esempio `interval()` dentro [app.component.ts](src/app/app.component.ts) che è una sorta di timer che genera un observable number al quale possiamo sottoscriverci per richiedere una specifica azione.
Tutto questo per dire che agli observable è possibile sottoscriversi!!

Tutte le sottoscrizioni che faccio rimangono attive anche durante il cambio di pagina con il route, quindi quando una sottoscrizione non serve, va stoppata.

Per fare questo bisogna mettere l'unsubscribe sull' ngOnDestroy della pagina.
```
ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe()
  }
```

### Template Driven Form
Qui non si usa form action method, si invia direttamente il contenuto del form da dentro un service.
Il service chiamerà il modulo HTTP che manda direttamente la roba al backend.
Per richiamare il form si assenga una variabile template al form stesso `#homeform="ngForm"` cosi facendo posso direttamente aggiungere un evento `(ngSubmit)="onSubmit(homeForm)"`.

Cosi facendo dentro [home.componente.ts](src/app/componenti/home/home.component.ts) posso creare un metodo che si occupa di prendere come parametro il form come tipo `ngForm`.

A fianco ad ogni input nel form è necessario aggiungere `ngModel` cosi da inserire ogni dato dentro un modello di dato di angular (non so sinceramente che senso abbia).

> è possibile avere un decoratore che ti permetta di accedere direttamente al form senza bisogno di crere un parametro nel metodo, ad esempio posso fare:
> ```ts
>@ViewChild('homeform') homeform: NgForm
> onSubmit(form: NgForm){
>  console.log(this.homeform)
>}
>```
>questo è possibile perché ho inserito la variabile template al form

Il form ha diversi stati, come anche i singoli campi hanno uno stato che gli viene attribuito da angular che aggiunge la classe ng-valid, ng-invalid etc etc...
Vedere il codice per un esempio di validazione, con tanto di disable del pulsante submit in caso di mancata validità dei campi.

### Reactive Form
Sono form gestiti interamente nel middleware, quindi in TypeScript.
Questa roba ha bisogno del `ReactiveFormsModule`. Questo tipo di formsi dichiara come `reactiveForm: FormGroup` in [home.componente.ts](src/app/componenti/home/home.component.ts).
Anche il form nell'html va bindato al reactiveForm con `<form [formGroup]="reactiveForm">`, anche le singole input vanno bindate con `formControlName="nome"` etc etc..

La validazione qui viene fatta nel middleware appunto, quind in TypeScript ad esempio:
```ts
email: new FormControl(null, [Validators.required, Validators.email]),
```

## Modulo HTTP
Bisogna importare `import { HttpClientModule } from '@angular/common/http'`
per avere adelle api da usare con angular ho preso 30 giorni di realtime database su firebase.

Ho creato un servizio per effettuare chiamate http, [firebase.service.ts](src/app/servizi/firebase.service.ts)
