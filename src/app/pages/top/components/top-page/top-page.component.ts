import { Component } from '@angular/core';

// https://angular.io/guide/what-is-angular
// Component
// ngStyle
// ngClass
// Pipe
// Directive
// structral-directive

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent {
  public sqaureClasses: string[] = ['square', 'd-flex', 'flex-column'];
  public squareColored: boolean = false;

  public data = [
    {
      hello: 'world',
      can: 'juice',
    },
    {
      hello: 'meet',
      can: 'bottle',
    },
    {
      hello: 'no',
      can: 'kick',
    },
  ];

  public dataBase64 = btoa( JSON.stringify( this.data ) );

  public articleTitle: string = 'The new jearjey homestore massacre';

  public vibes: boolean = false;

  public toggleSquareBackgroundColor(): void {
    this.squareColored = !this.squareColored;
  }

  public toggleVibes(): void {
    this.vibes = !this.vibes;

    if (this.vibes) {
      this.sqaureClasses = [
        ...this.sqaureClasses.filter((klass) => klass !== 'vibes-media'),
        'vibes-media',
      ];
    } else {
      this.sqaureClasses = [
        ...this.sqaureClasses.filter((klass) => klass !== 'vibes-media'),
      ];
    }
  }
}
