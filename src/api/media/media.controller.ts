import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  ServiceUnavailableException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { StorageService } from '../storage/storage.service';
import { File } from '@google-cloud/storage';

@Controller('upload')
export class MediaController {
  constructor(private storageService: StorageService) {}

  @Post('uploadphoto')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 1048576 * 1048576,
      },
    }),
  )
  async uploadPropertyPhoto(@UploadedFile() file: Express.Multer.File) {
    await this.storageService.save(
      file.originalname,
      `propertyphoto/` + file.originalname,
      file.mimetype,
      file.buffer,
      [{ mediaId: file.originalname }],
    );
  }

  @Post('propertyfiles/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 1048576 * 1048576,
      },
    }),
  )
  async uploadPropertyFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    await this.storageService.save(
      file.originalname,
      `propertyfiles/${id}/` + file.originalname,
      file.mimetype,
      file.buffer,
      [{ mediaId: file.originalname }],
    );
  }

  @Get('propertyfiles/:id')
  async downloadPhoto(@Param('id') id: string, @Res() res: Response) {
    let storageFile: File[];
    try {
      storageFile = await this.storageService.listFiles(id);
    } catch (e) {
      if (e.message.toString().includes('No such object')) {
        throw new NotFoundException('image not found');
      } else {
        throw new ServiceUnavailableException('internal error');
      }
    }
    const list = [];
    storageFile.map((file) => {
      list.push(file.metadata);
    });
    res.json(list);
  }
}
