import { Injectable } from '@angular/core';
import type { User } from '@supabase/supabase-js';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(
    private readonly supabaseService: Supabase
  ) {}

  async login(
    email: string,
    password: string
  ) {
    return this.supabaseService.client.auth.signInWithPassword({
      email,
      password
    });
  }

  async register(
    email: string,
    password: string
  ) {
    return this.supabaseService.client.auth.signUp({
      email,
      password
    });
  }

  async forgotPassword(
    email: string,
    redirectTo: string
  ) {
    return this.supabaseService.client.auth.resetPasswordForEmail(
      email,
      { redirectTo }
    );
  }

  async resetPassword(
    password: string
  ) {
    return this.supabaseService.client.auth.updateUser({
      password
    });
  }

  async logout() {
    return this.supabaseService.client.auth.signOut();
  }

  async getUser() {
    const { data } =
      await this.supabaseService.client.auth.getUser();

    return data.user;
  }

  async getSession() {
    const { data } =
      await this.supabaseService.client.auth.getSession();

    return data.session;
  }

  onAuthStateChange(callback: (user: User | null) => void) {
    return this.supabaseService.client.auth.onAuthStateChange((_event, session) => {
      callback(session?.user ?? null);
    });
  }

  async isAdmin(): Promise<boolean> {
    const user = await this.getUser();

    if (!user) {
      return false;
    }

    const role = (user.user_metadata?.['role'] as string) || '';
    return role === 'admin';
  }
}