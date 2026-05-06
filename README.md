
# Express Rate Limiter Demo

Simple Express.js project demonstrating API rate limiting using `express-rate-limit`.

## Features

- Express server
- IP-based rate limiting
- Returns HTTP 429 when limit exceeded
- Basic load testing support

## Install

```bash
npm install
```

## Run Server

```bash
node app.js
```

Server runs on:

```text
http://localhost:3000
```

## Test Endpoint

```text
GET /api/test
```

## Test Rate Limiting

Run multiple requests quickly:

```bash
for i in {1..10}; do curl http://localhost:3000/api/test; echo ""; done
```

After the limit is exceeded, the server responds with:

```json
{
  "error": "Too many requests"
}
```

## Tech Stack

- Node.js
- Express.js
- express-rate-limit
