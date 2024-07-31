import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { envs } from 'src/config';

@Injectable()
export class AuthService {
  private readonly apiKeyService: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKeyService = envs.apiKey;
  }

  validateApiKey(apiKey: string): boolean {
    return this.apiKeyService === apiKey;
  }
}
