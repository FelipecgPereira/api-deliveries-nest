import{IsNotEmpty, IsString} from 'class-validator';


export class CreateDeliverymanDto{
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}