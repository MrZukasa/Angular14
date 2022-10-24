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

### Passare dati da Parent a Chiild
qui le cose si fanno più interessanti dai, o perlomeno utili!

Anche qui guardare il codice, mi sono preso alcune libertà dall'esempio, io non ho richiamato un componente che stava dentro AppComponent, ma ho proprio richiamato da un componente ad un altro.

Che senso ha richiamare qualcosa che sta nella root se tanto la struttura non avrà mai nulla nella root!?
Oltretutto aggiungendo l'evento `Onchanges` riesco a riscrivere i dati cambiati
