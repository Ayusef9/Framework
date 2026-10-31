import {
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "Nama tidak boleh kosong" })
    @IsString({ message: "Nama harus berupa teks" })
    @MaxLength(100, { message: "Nama maksimal 100 karakter" })
    readonly nama: string;

    @IsNotEmpty({ message: "Email tidak boleh kosong" })
    @IsEmail({}, { message: "Format email tidak valid" })
    @MaxLength(50, { message: "Email maksimal 50 karakter" })
    readonly email: string;

    @IsNotEmpty({ message: "Nomor telepon tidak boleh kosong" })
    @IsString({ message: "Nomor telepon harus berupa teks" })
    @MaxLength(20, { message: "Nomor telepon maksimal 20 karakter" })
    readonly phone: string;

    @IsNotEmpty({ message: "Password tidak boleh kosong" })
    @IsString({ message: "Password harus berupa teks" })
    @MinLength(8, { message: "Password minimal 8 karakter" })
    readonly password: string;

    @IsNotEmpty({ message: "Alamat tidak boleh kosong" })
    @IsString({ message: "Alamat harus berupa teks" })
    @MaxLength(50, { message: "Alamat maksimal 50 karakter" })
    readonly alamat: string;
}
