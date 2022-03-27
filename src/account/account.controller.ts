import { Controller, Post, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthDto } from './dto';

@Controller('authenticate')
export class AccountController {
    constructor(private accountService: AccountService){}

    @Post('client')
    sigInClient(@Body() {username,password}:AuthDto){
        return this.accountService.sigInClient({username,password});
    }

    @Post('deliveryman')
    sigInDeliveryman(@Body() {username,password}:AuthDto){
        return this.accountService.sigInDeliveryman({username,password});
    }

}
