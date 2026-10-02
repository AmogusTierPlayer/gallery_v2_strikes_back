import { Component } from '@angular/core';
import {GalleryComponent} from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  template: `
    <main class="app-container">
      <h1>Да работай ты уже</h1>
      <app-gallery/>
    </main>
  `,
  styles: [
    `
      .app-container {
        padding: 20px;
        text-align: center;
      }
    `,
  ],
})
export class App {}
