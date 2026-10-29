import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty({ message: "Nama tidak boleh kosong" })
    @IsString({ message: "Nama harus berupa teks" })
    @MaxLength(100, { message: "Nama maksimal 100 karakter" })
    readonly nama: string;

    @IsNotEmpty({ message: "Alamat tidak boleh kosong" })
    @IsString({ message: "Alamat harus berupa teks" })
    @MaxLength(50, { message: "Alamat maksimal 50 karakter" })
    readonly alamat: string;

    @IsNotEmpty({ message: "Foto tidak boleh kosong" })
    @IsString({ message: "Foto harus berupa teks atau path gambar" })
    @MaxLength(50, { message: "Path foto maksimal 50 karakter" })
    readonly foto: string;
}
