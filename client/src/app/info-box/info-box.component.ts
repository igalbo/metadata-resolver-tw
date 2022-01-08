import { Component, OnInit, Input } from '@angular/core';
import { ResolverService } from '../services/resolver.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css'],
})
export class InfoBoxComponent implements OnInit {
  @Input() metadata!: object;

  constructor(private resolverService: ResolverService) {}

  ngOnInit(): void {
    // this.resolverService
    //   .getMetadata("test")
    //   .subscribe((metadata) => (this.metadata = metadata));
  }
}
