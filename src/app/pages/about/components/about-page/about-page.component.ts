import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { PictureApiService } from '../../../../core/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fw-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, AfterViewInit, OnDestroy {
  public activeTabIndexSubscription?: Subscription;
  
  public topImages: string[] = [];
  
  public readonly formGroup = new FormGroup({
    width: new FormControl(320, [Validators.min(100), Validators.max(1920)]),
    height: new FormControl(240, [Validators.min(60), Validators.max(1080)])
  });

  private _activeTabIndex: number = 0;

  public set activeTabIndex(value: number) {
    this._activeTabIndex = +value;
    
    this.router.navigate([], { queryParams: {
      activeTab: value
    } });
  }
  public get activeTabIndex(): number {
    return this._activeTabIndex;
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly pictureApiService: PictureApiService
  ) {}

  public ngOnInit(): void {
    const queryParamsSnapshot = this.activatedRoute.snapshot.queryParams;

    if (!queryParamsSnapshot || !queryParamsSnapshot['activeTab']) {
      this.router.navigate([], { queryParams: {
        activeTab: this.activeTabIndex
      } });
    }

    this.setRandomImage();
    this.setFormValueHandler();
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
  
  private setRandomImage(): void {
    this.pictureApiService.getRandomImageList().subscribe(data => {
      this.topImages = data;
    });
  }

  private setFormValueHandler(): void {
    this.formGroup.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      if (this.formGroup.invalid) {
        return;
      }

      this.pictureApiService.getRandomImageList(value.width, value.height).subscribe(data => {
        this.topImages = data;
      });
    });
  }
}
