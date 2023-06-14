import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Request } from 'express';
import { createReadStream } from 'fs';
import * as formidable from 'formidable';

@Injectable()
export class ArrayBufferPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const request = value as Request;
    const form = formidable({ multiples: true });
    const result = await new Promise<ArrayBuffer[]>((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) {
          reject(err);
        }
        try {
          const buffers = [];
          for (const fileName in files) {
            const fileData = files[fileName].data;
            if (fileData && fileData.buffer instanceof ArrayBuffer) {
              buffers.push(fileData.buffer);
            }
          }
          resolve(buffers);
        } catch (e) {
          reject(e);
        }
      });
    });
    return result;
  }
}