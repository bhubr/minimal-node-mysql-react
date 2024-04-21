# Backend of dummy API

Dummy MySQL-powered Node.js/Express API

## How to use

1. Adapt values in `db/init.sql` to suit your needs/preferences
2. Create db with `db/init.sql`. e.g. `mysql -uroot -p < db/init.sql`
3. Copy `sample.env` as `.env`
4. Run migrations: `npx db-migrate up -e dev`
5. Run app: `node src/index`

## cURL requests

### Get all people

```
curl http://localhost:3000/api/people/
```

### Create a person

```
curl -X POST -H 'Content-Type: application/json' -d '{"name": "George"}' http://localhost:3000/api/people/
```

### Delete a person

```
curl -X DELETE http://localhost:3000/api/people/1
```
