# CSMS-v2 Core Server

Charging Station Management System (CSMS) core server implementation with Express.js and Prisma.

## Project Structure

```
core/
├── prisma/
│   └── schema.prisma       # Database schema
├── module/
│   ├── chargers/          # Charger management
│   ├── connectors/        # Connector management
│   └── transactions/      # Transaction management
├── test/
│   └── postman/           # API test collections
└── generated/             # Prisma generated files
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/csms"
PORT=3000
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

## API Documentation

### Chargers

- **GET /api/chargers**
  - Query params:
    - page (default: 1)
    - limit (default: 10)
    - sortBy (default: "lastHeartbeatAt")
    - sortOrder (default: "desc")
    - connected (boolean)
    - vendor (string)
    - search (string)

- **POST /api/chargers**
  ```json
  {
    "id": "CHARGER001",
    "vendor": "TestVendor",
    "model": "TestModel",
    "firmwareVersion": "1.0.0",
    "serialNumber": "SN001"
  }
  ```

- **GET /api/chargers/:id**
- **PUT /api/chargers/:id**
- **DELETE /api/chargers/:id**

### Connectors

- **GET /api/connectors**
  - Query params:
    - page (default: 1)
    - limit (default: 10)
    - sortBy (default: "lastStatusAt")
    - sortOrder (default: "desc")
    - status (string)
    - chargerId (string)
    - errorCode (string)

- **POST /api/connectors**
  ```json
  {
    "chargerId": "CHARGER001",
    "connectorId": 1,
    "status": "Available"
  }
  ```

- **GET /api/connectors/:id**
- **PUT /api/connectors/:id**
- **DELETE /api/connectors/:id**

### Transactions

- **GET /api/transactions**
  - Query params:
    - page (default: 1)
    - limit (default: 10)
    - sortBy (default: "startTimestamp")
    - sortOrder (default: "desc")
    - status (string)
    - chargerId (string)
    - startDate (ISO date)
    - endDate (ISO date)

- **POST /api/transactions**
  ```json
  {
    "chargerId": "CHARGER001",
    "connectorId": 1,
    "idTag": "TAG001",
    "meterStart": 0,
    "startTimestamp": "2024-01-15T10:00:00Z",
    "status": "Active"
  }
  ```

- **GET /api/transactions/:id**
- **PUT /api/transactions/:id**
- **DELETE /api/transactions/:id**

## Response Format

All APIs return responses in the following format:

Success Response:
```json
{
  "success": true,
  "data": { ... }
}
```

Error Response:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Testing

1. Import the Postman collection from `test/postman/csms-v2.postman_collection.json`
2. Import the environment from `test/postman/csms-v2.postman_environment.json`
3. Set up your environment variables
4. Run the collection to test all endpoints

## Database Schema

The system uses PostgreSQL with the following main entities:

- **Charger**: EV charging stations
- **Connector**: Physical connectors on chargers
- **Transaction**: Charging sessions

Refer to `prisma/schema.prisma` for detailed model definitions.
