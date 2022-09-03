import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crawl-modal',
  templateUrl: './crawl-modal.component.html',
  styleUrls: ['./crawl-modal.component.scss'],
})
export class CrawlModalComponent implements OnInit {
  crawlOpening: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    this.crawlOpening = data;
  }

  ngOnInit(): void {}
}
