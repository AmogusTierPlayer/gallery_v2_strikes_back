import { Injectable } from '@angular/core';

export interface ImageItem {
  id: number;
  url: string;
  alt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly images : ImageItem[] = [
    { id: 1, url: `images/img1.webp`, alt: 'Картинка 1' },
    { id: 2, url: `images/img2.webp`, alt: 'Картинка 2' },
    { id: 3, url: `images/img3.webp`, alt: 'Картинка 3' },
    { id: 4, url: `images/img4.png`, alt: 'Картинка 4' },
    { id: 5, url: `images/img5.webp`, alt: 'Картинка 5' },
    { id: 6, url: `images/logo.jpg`, alt: 'Картинка 6'}
  ];

  getImages(): ImageItem[] {
    return this.images
  }
}
