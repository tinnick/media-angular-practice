import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fw-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, AfterViewInit, OnDestroy {
  public activeTabIndexSubscription?: Subscription;

  public set activeTabIndex(value: number) {
    this._activeTabIndex = +value;
    
    this.router.navigate([], { queryParams: {
      activeTab: value
    } });
  }
  public get activeTabIndex(): number {
    return this._activeTabIndex;
  }

  private _activeTabIndex: number = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const queryParamsSnapshot = this.activatedRoute.snapshot.queryParams;

    if (!queryParamsSnapshot || !queryParamsSnapshot['activeTab']) {
      this.router.navigate([], { queryParams: {
        activeTab: this.activeTabIndex
      } });
    }
  }
  
  public ngOnDestroy(): void {
    if (this.activeTabIndexSubscription) {
      this.activeTabIndexSubscription.unsubscribe();
    }
  }
  
  public ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (!queryParams || !queryParams['activeTab']) {
        return;
      }

      const activeTabIndex = +queryParams['activeTab'];

      requestAnimationFrame( () => this.activeTabIndex = activeTabIndex );
    });
  }
}
