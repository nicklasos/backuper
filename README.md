# backuper

## Project setup
```
yarn
yarn global add knex

cp .env.example .env
vim .env
```

### Compiles and hot-reloads for development
```
chmod +x assets
chmod +x serve

./assets
./serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Migrations

Create migration
```
knex migrate:make --env production create_table_name
knex migrate:latest --env production
knex migrate:rollback --env production
```
