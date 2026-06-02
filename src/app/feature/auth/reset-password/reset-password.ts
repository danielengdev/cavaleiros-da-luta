import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/service/auth';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  loading = false;
  error = '';
  success = '';

  form: any;

  constructor() {
    const fb = inject(FormBuilder);
    this.form = fb.nonNullable.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  async resetPassword(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { password, confirmPassword } = this.form.getRawValue();

    if (password !== confirmPassword) {
      this.error = 'As senhas nao conferem.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const { error } = await this.authService.resetPassword(password);

    this.loading = false;

    if (error) {
      this.error = error.message;
      return;
    }

    this.success = 'Senha alterada com sucesso.';
    await this.router.navigate(['/login']);
  }
}
