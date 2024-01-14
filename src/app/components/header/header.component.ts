import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  imports: [AvatarModule],
})
export class HeaderComponent {}
