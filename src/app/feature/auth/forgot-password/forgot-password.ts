import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../core/service/auth';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  loading = false;
  error = '';
  success = '';

  form: any;

  constructor() {
    const fb = inject(FormBuilder);
    this.form = fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  private readonly authService = inject(Auth);

  async sendResetLink(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const { email } = this.form.getRawValue();

    const { error } = await this.authService.forgotPassword(
      email,
      `${window.location.origin}/reset-password`
    );

    this.loading = false;

    if (error) {
      this.error = error.message;
      return;
    }

    this.success = 'Enviamos um link para redefinicao de senha no seu email.';
  }
}
