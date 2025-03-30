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
        console.log('Carrito cargado desde localStorage:', this.cartItems);
        this.cartSubject.next(this.cartItems);
      }
    } catch (error) {
      console.error('Error al cargar el carrito desde localStorage:', error);
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    try {
      console.log('Agregando producto al carrito:', product);
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        console.log('Cantidad actualizada:', existingItem.quantity);
      } else {
        this.cartItems.push({ product, quantity: 1 });
        console.log('Nuevo producto agregado al carrito');
      }
      
      this.updateCart();
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
    }
  }

  removeFromCart(productId: number): void {
    try {
      console.log('Eliminando producto del carrito:', productId);
      this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      this.updateCart();
    } catch (error) {
      console.error('Error al eliminar producto del carrito:', error);
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    try {
      console.log('Actualizando cantidad:', productId, quantity);
      const item = this.cartItems.find(item => item.product.id === productId);
      if (item) {
        item.quantity = Math.max(1, quantity);
        this.updateCart();
      }
    } catch (error) {
      console.error('Error al actualizar cantidad:', error);
    }
  }

  clearCart(): void {
    try {
      console.log('Limpiando carrito');
      this.cartItems = [];
      this.updateCart();
    } catch (error) {
      console.error('Error al limpiar el carrito:', error);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  private updateCart(): void {
    try {
      console.log('Actualizando carrito:', this.cartItems);
      this.cartSubject.next(this.cartItems);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      console.log('Carrito guardado en localStorage');
    } catch (error) {
      console.error('Error al actualizar el carrito:', error);
    }
  }
} 