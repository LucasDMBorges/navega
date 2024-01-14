import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { PAGES } from './sidebar-mock.const';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  imports: [ListboxModule, DividerModule],
})
export class SidebarComponent {
  public pages = PAGES;
}
