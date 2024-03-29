import { IsDefined, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  @Length(5, 20, { message: 'Tol kafi nist' })
  password: string;
}
