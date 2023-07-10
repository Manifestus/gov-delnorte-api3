import {
  Body,
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
import { StorageFile } from 'src/shared/storage/storage-file';
import { StorageService } from '../storage/storage.service';

@Controller('upload')
export class MediaController {
  constructor(private storageService: StorageService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 1048576 * 1048576,
      },
    }),
  )
  async uploadPropertyPhoto(
    @UploadedFile() file: Express.Multer.File,
    @Body('uploadphoto') mediaId: string,
  ) {
    await this.storageService.save(
      'uploadphoto/' + mediaId,
      file.mimetype,
      file.buffer,
      [{ mediaId: mediaId }],
    );
  }

  @Post()
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
    @Body('uploadfile/') mediaId: string,
  ) {
    await this.storageService.save(
      'property/' + mediaId,
      file.mimetype,
      file.buffer,
      [{ mediaId: mediaId }],
    );
  }

  @Get('/:mediaId')
  async downloadMedia(@Param('mediaId') mediaId: string, @Res() res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get('media/' + mediaId);
    } catch (e) {
      if (e.message.toString().includes('No such object')) {
        throw new NotFoundException('image not found');
      } else {
        throw new ServiceUnavailableException('internal error');
      }
    }
    res.setHeader('Content-Type', storageFile.contentType);
    res.setHeader('Cache-Control', 'max-age=60d');
    res.end(storageFile.buffer);
  }
}
