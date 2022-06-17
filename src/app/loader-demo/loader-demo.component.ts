import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderDemoService } from '../loader-demo.service';

@Component({
  selector: 'app-entries',
  templateUrl: './loader-demo.component.html',
  styleUrls: ['./loader-demo.component.scss'],
})
export class LoaderDemoComponent implements OnInit {
  entries: any;
  constructor(
    private loaderService: LoaderDemoService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getallentries();
  }

  getallentries() {
    this.spinnerService.show();
    this.loaderService.getallData().subscribe((res: any) => {
      if (res) {
        this.entries = res.entries;
        console.log(this.entries);
        this.spinnerService.hide();
      }
    });
  }
}
