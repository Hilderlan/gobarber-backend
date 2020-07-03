import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const pathName = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: pathName,
  storage: multer.diskStorage({
    destination: pathName,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
