# TUTORIAL : IMAGE-UPLOAD-MULTER

The tutorial on how to implement image uploads using Express and Multer (+postgres)

- Eng : [Medium : How to Implement Image Upload using Express and Multer (+ PostgreSQL)](https://hseoy.medium.com/how-to-implement-image-upload-using-express-and-multer-postgresql-c6de64679f2)
- Kor : [Velog : Express와 Multer를 사용하여 이미지 업로드를 구현하는 방법(+ PostgreSQL)](https://velog.io/@hseoy/Express%EC%99%80-Multer%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-PostgreSQL)

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
