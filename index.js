const morgan = require('morgan');
const express = require('express');
const multer = require('multer');
const path = require('path');
const knex = require('knex');

// Create database object
const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'YOUR_PG_USER',
    password: 'YOUR_PG_USER_PASSWORD',
    database: 'image_upload',
  },
});

// Create multer object
const imageUpload = multer({
  dest: 'images',
});

// Create express object
const app = express();

// Set middlewares
app.use(express.json());
app.use(morgan('dev'));

// Image Upload Routes
app.post('/image', imageUpload.single('image'), (req, res) => {
  const { filename, mimetype, size } = req.file;
  const filepath = req.file.path;

  db.insert({
    filename,
    filepath,
    mimetype,
    size,
  })
    .into('image_files')
    .then(() => res.json({ success: true, filename }))
    .catch(err =>
      res.json({ success: false, message: 'upload failed', stack: err.stack }),
    );
});

// Image Get Routes
app.get('/image/:filename', (req, res) => {
  const { filename } = req.params;
  db.select('*')
    .from('image_files')
    .where({ filename })
    .then(images => {
      if (images[0]) {
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, images[0].filepath);
        return res.type(images[0].mimetype).sendFile(fullfilepath);
      }
      return Promise.reject(new Error('Image does not exist'));
    })
    .catch(err =>
      res
        .status(404)
        .json({ success: false, message: 'not found', stack: err.stack }),
    );
});

// Run express server
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
