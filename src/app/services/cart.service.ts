import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next(this.cartItems);
      }
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    try {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ product, quantity: 1 });
      }
      
      this.updateCart();
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }

  removeFromCart(productId: number): void {
    try {
      this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      this.updateCart();
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    try {
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeFromCart(productId);
        }
        this.updateCart();
      }
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }

  clearCart(): void {
    try {
      this.cartItems = [];
      this.updateCart();
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  private updateCart(): void {
    try {
      this.cartSubject.next(this.cartItems);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }
} 