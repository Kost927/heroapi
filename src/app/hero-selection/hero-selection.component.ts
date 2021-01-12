import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  HostListener,
} from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RefDirective } from './../shared/ref.directive';
import { AlphabetService } from './../shared/services/alphabet.service';
import { SearchService } from './../shared/services/search.service';
import constants from '../shared/constants';
import { AlphabetComponent } from '../alphabet/alphabet.component';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.scss'],
})
export class HeroSelectionComponent implements OnInit {
  @ViewChild(RefDirective) refDir: RefDirective;

  public loading: boolean;
  public page: number = 1;
  public errorMsg: any;
  public searchForm: FormGroup;
  public isSelected: boolean = false;

  constructor(
    public searchService: SearchService,
    public alpha: AlphabetService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.searchFormValidate();
    this.searchService.getRecentSearches();
  }

  searchFormValidate(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [
        Validators.required,
        Validators.pattern(constants.SEARCH_VALIDATE),
      ]),
    });
  }

  submitSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }
    this.loading = true;

    this.searchMethod();
  }

  searchMethod(): void {
    const query: string = this.searchForm.value.search;

    this.searchService
      .searchEntries(query)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.loading = false;
          this.errorMsg = err.message;
          return throwError(err);
        })
      )
      .subscribe((res) => {
        this.loading = false;
        this.searchService.setRecentSearches(query);
        this.searchService.getRecentSearches();
        this.searchForm.reset();
      });
  }

  selectHero(event): void {
    this.searchService.heroes.forEach((hero) => {
      if (event.target.id === hero.id) {
        this.searchService.selectHero(hero);
        localStorage.setItem('lastSelectedHero', JSON.stringify(hero));
        event.target.disabled = true;
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.refDir.containerRef.clear();
    }
  }

  showModal(): void {
    const modalFactory = this.resolver.resolveComponentFactory(
      AlphabetComponent
    );
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }

  ngIfSearchValidation(): boolean {
    return (
      this.searchForm.get('search').invalid &&
      this.searchForm.get('search').touched
    );
  }

  ngIfSearchRequired(): void {
    return this.searchForm.get('search').errors.required;
  }

  ngIfSearchPattern(): void {
    return this.searchForm.get('search').errors.pattern;
  }
}
