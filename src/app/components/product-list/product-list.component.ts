import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];
  selectedCategory: number | null = null;
  loading = true;
  error = false;
  private defaultImage = 'https://via.placeholder.com/400x400?text=No+Image';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = false;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: () => {
        // Manejar el error silenciosamente
      }
    });
  }

  filterByCategory(categoryId: number): void {
    this.selectedCategory = categoryId;
    this.loading = true;
    this.error = false;
    this.productService.getProductsByCategory(categoryId).subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  onImageError(event: Event, product: Product): void {
    const img = event.target as HTMLImageElement;
    img.src = this.defaultImage;
    if (product.images.length > 1) {
      const currentIndex = product.images.indexOf(img.src);
      if (currentIndex < product.images.length - 1) {
        img.src = product.images[currentIndex + 1];
      }
    }
  }
} 