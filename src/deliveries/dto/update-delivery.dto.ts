import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDeliveryDto{
    @IsString()
    @IsNotEmpty()
    id_delivery: string

    @IsString()
    @IsNotEmpty()
    id_deliveryman: string
}
