## Database Setting

```
# Create image_upload postgres database
$ createdb image_upload

# Create image_files table
$ psql -d image_upload -a -f ./image_upload.sql

# Check
$ psql image_upload
$ image_upload=# \d
```
