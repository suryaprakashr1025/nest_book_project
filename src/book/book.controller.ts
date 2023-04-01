import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create_book.dto';


@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Post('/new')
    async createBook(@Body() book:CreateBookDto): Promise<Book> {
        return await this.bookService.createBook(book);
    }

    @Get(':id')
    async getOneBook(@Param('id') id:string): Promise<Book> {
        return await this.bookService.getoneBook(id)
    }

    @Put(':id')
    async updatebook(@Param('id') id: string, @Body() book:CreateBookDto): Promise<Book> {
        return await this.bookService.updateBook(id, book);
    }

    @Delete(':id')
    async deletebook(@Param('id') id:string): Promise<Book> {
        return await this.bookService.deletebook(id);
    }
}
