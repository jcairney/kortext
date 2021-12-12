import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {OrderBy} from 'src/app/models/order-by.enum';
import {VolumeList} from 'src/app/models/volume-list';
import {GoogleBooksService} from 'src/app/services/google-books.service';
import {GoogleSuggestionService} from 'src/app/services/google-suggestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  OrderBy = OrderBy; // this obtuse looking statement makes the enum accessible in the template as a class property.
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild("auto") autoComplete: MatAutocomplete | undefined;
  searchFormControl = new FormControl();
  searchTerms = "";
  $searchSuggestions: Observable<string[]> | undefined;
  $searchResult: Observable<VolumeList> | undefined;
  resultOrder:OrderBy = OrderBy.Relevance;


  constructor(
    private googleBooksService:GoogleBooksService, // To the imaginary other developers: please leave each dependency on a separate line to avoid merge conflicts and syntax errors
    private googleSuggestionService:GoogleSuggestionService,
  ) {  }

  ngOnInit() {
    this.$searchSuggestions = this.searchFormControl.valueChanges.pipe(
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        return this.googleSuggestionService.suggest(searchTerm);})
    );
  }

  search() {
    this.paginator!.pageIndex=0;
    this.searchTerms = this.searchFormControl.value;
    this.getResults();
  }

  onSortOrderChange() {
    this.paginator!.pageIndex=0;
    this.getResults();
  }

  getResults() {
    this.$searchResult = this.googleBooksService.search(this.searchTerms, this.paginator!.pageIndex * this.paginator!.pageSize, this.paginator!.pageSize, this.resultOrder)
  }
}
