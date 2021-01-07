import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from './../shared/services/search.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.scss'],
})
export class HeroSelectionComponent implements OnInit {
  public loading: boolean;
  public page: number = 1;
  public errorMsg: any;
  public searchForm: FormGroup;

  constructor(public searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.searchFormValidate();
    this.searchService.getRecentSearches();
  }

  searchFormValidate(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
      ]),
    });
  }

  public submitSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }

    this.loading = true;

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
      .subscribe((val) => {
        this.loading = false;
        this.searchService.setRecentSearches(query);
        this.searchService.getRecentSearches();
      });
  }

  goToAbcPage(): void {
    this.router.navigate(['/alphabet']);
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
