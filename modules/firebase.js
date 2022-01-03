const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.files.image) return next();
  const { image } = req.files;
  const imageName = `${Date.now()}.${image.name.split('.').pop()}`;

  const file = bucket.file(imageName);
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype
    }
  });

  stream.on('error', (e) => {
    console.log(e);
  });

  stream.on('finish', async () => {
    await file.makePublic();

    req.files.image.firebaseURL = `https://storage.googleapis.com/${process.env.STORAGE_BUCKET}/${imageName}`;

    next();
  });

  stream.end(image.data);
};

module.exports = {
  uploadImage
};
