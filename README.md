# TUTORIAL : IMAGE-UPLOAD-MULTER

The tutorial on how to implement image uploads using Express and Multer (+postgres)

- [Medium : How to Implement Image Upload using Express and Multer (+ PostgreSQL)](https://hseoy.medium.com/how-to-implement-image-upload-using-express-and-multer-postgresql-c6de64679f2)

## How to Run

1. Setting up a database

```
# Create image_upload postgres database
$ createdb image_upload

# Create image_files table
$ psql -d image_upload -a -f ./postgres/image_upload.sql

# Check
$ psql image_upload
$ image_upload=# \d
```

2. Install dependencies and run express server

```
$ npm install
$ npm start
```
