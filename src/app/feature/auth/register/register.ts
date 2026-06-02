import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/service/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  loading = false;
  error = '';
  success = '';

  form: any;

  constructor() {
    const fb = inject(FormBuilder);
    this.form = fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  async register(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password, confirmPassword } = this.form.getRawValue();

    if (password !== confirmPassword) {
      this.error = 'As senhas nao conferem.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const { error } = await this.authService.register(email, password);

    this.loading = false;

    if (error) {
      this.error = error.message;
      return;
    }

    this.success = 'Cadastro realizado com sucesso. Verifique seu email para confirmar a conta.';
    await this.router.navigate(['/login']);
  }
}
