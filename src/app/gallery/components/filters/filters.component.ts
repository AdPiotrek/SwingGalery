import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DogsFilterValues } from '../../shared/models/dogs-filter-values';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() filtersSubmitted = new EventEmitter<DogsFilterValues>();

  colorForm: FormGroup;
  licenseForm: FormGroup;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createColorForm();
    this.createLicenseForm();
    this.createSearchForm();

  }

  ngOnInit() {
  }

  createLicenseForm() {
    this.licenseForm = this.fb.group({
      'license': ''
    });
  }

  createColorForm() {
    this.colorForm = this.fb.group({
      '0': false,
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      'a': false,
      'b': false,
      'c': false,
      'd': false,
      'e': false
    });
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      'search': ''
    });
  }

  filter() {
    this.filtersSubmitted.emit({
      colors: { ...this.colorForm.value },
      license: this.licenseForm.value.license,
      search: this.searchForm.value.search
    });
  }

}
