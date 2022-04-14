import { Component, VERSION } from '@angular/core';

// https://angular.io/guide/what-is-angular
// Component
// ngStyle
// ngClass
// Pipe
// Directive
// structral-directive


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sqaureClasses: string[] = ['square', 'd-flex', 'flex-column'];
  public squareColored: boolean = false;
  private prevFunnyColor: string = '';

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

  public onClick(element: HTMLDivElement): void {
    // const isSquare = element.classList.contains('square');
    // if (isSquare) {
    //   const prevColor = element.style.backgroundColor;
    //   element.style.backgroundColor = this.prevSquareColor;
    //   this.prevSquareColor = prevColor;
    // }
  }
}
