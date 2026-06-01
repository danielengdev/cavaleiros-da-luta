import { Injectable } from '@angular/core';
import { Supabase } from '../../../core/service/supabase';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
   constructor(private supabaseService: Supabase) {}

  async getLinks() {
    const { data, error } = await this.supabaseService.client
      .from('links')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  }
}
