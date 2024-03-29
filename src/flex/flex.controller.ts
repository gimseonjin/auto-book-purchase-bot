import { Controller, Get } from '@nestjs/common';
import { InjectBrowser, InjectPage } from 'nestjs-playwright';
import { Browser, Page } from '@playwright/test';
import { FlexRobot } from './flex.robot';
import { BookReqeustDto } from '../common/book.reqest.dto';

@Controller('flex')
export class FlexController {

    constructor(
        @InjectBrowser() private readonly browser: Browser
        ){}

    @Get()
    async getHello(): Promise<string> {

        const browserPage = await this.browser.newPage()

        const bookRequestDto = new BookReqeustDto("name", "link", "1", "100원", "reason")
        
        const robot = new FlexRobot(browserPage, bookRequestDto)

        robot.run()
        
        return "done"
    }
}
