import { IsNotEmpty, IsString } from "class-validator"

export class CreateDeliveryDto{
    @IsString()
    @IsNotEmpty()
    item_name: string

    @IsString()
    @IsNotEmpty()
    id_client: string
}
