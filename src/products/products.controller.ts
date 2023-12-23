import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('description') description: string,
  ): string {
    return `Creando un producto ${name} con descripción ${description}`;
  }
  @Get()
  getHelloProducts(): string {
    return '¡Estamos en productos!';
  }
  @Get(':id')
  find(@Param('id') id: number): string {
    return `¡Estamos consultando el producto ${id}!`;
  }
  @Get(':id/:size')
  findWithSize(@Param('id') id: number, @Param('size') size: string): string {
    return `¡En esta ruta estamos consultando el producto ${id}, pero en su tamaño ${size}!`;
  }
  @Get('hot')
  getSpecialProducts(): string {
    return '¡Te vamos a mostrar los productos más calientes!';
  }
}
