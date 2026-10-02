import { Component, computed, inject, signal } from '@angular/core';
import { ImageItem, ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  private imageService = inject(ImageService);

  readonly images = signal<ImageItem[]>(this.imageService.getImages());
  currentIndex = signal<number>(0);

  currentImage = computed(() => this.images()[this.currentIndex()]);

  trackTransform = computed(()=> {
    const index = this.currentIndex();
    const total = this.images().length;

    const step = 90;

    let offset = index-1;

    if (offset < 0) offset = 0;
    if (offset > total - 3) offset = total - 3;
    if (total <= 3) offset = 0;

    return `translateX(-${offset * step}px`

  });

  setIndex(index: number): void {
    const total = this.images().length;
    if (total === 0) return;

    const newIndex = (index + total) % total;
    this.currentIndex.set(newIndex);
  }

  nextPreview(): void {
    this.setIndex(this.currentIndex() + 1);
  }

  prevPreview(): void {
    this.setIndex(this.currentIndex() - 1);
  }

  nextThumbnails(): void {
    this.nextPreview();
  }

  prevThumbnails(): void {
    this.prevPreview();
  }

  selectImage(index: number): void {
    this.setIndex(index);
  }
}

