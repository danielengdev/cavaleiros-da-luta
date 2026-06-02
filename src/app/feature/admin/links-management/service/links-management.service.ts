import { Injectable } from '@angular/core';
import { Supabase } from '../../../../core/service/supabase';

export interface LinkItem {
  id?: number;
  link: string;
  descricao?: string;
  created_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinksMgmtService {

  constructor(
    private readonly supabaseService: Supabase
  ) {}

  async getLinks() {
    const { data, error } = await this.supabaseService.client
      .from('links')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data as LinkItem[];
  }

  async createLink(link: LinkItem) {
    const { data, error } = await this.supabaseService.client
      .from('links')
      .insert([link])
      .select();

    if (error) {
      throw error;
    }

    return data?.[0] as LinkItem;
  }

  async updateLink(id: number, link: LinkItem) {
    const { data, error } = await this.supabaseService.client
      .from('links')
      .update(link)
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return data?.[0] as LinkItem;
  }

  async deleteLink(id: number) {
    const { error } = await this.supabaseService.client
      .from('links')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return true;
  }
}
