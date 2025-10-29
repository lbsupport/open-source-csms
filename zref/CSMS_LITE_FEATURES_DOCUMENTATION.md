# CSMS Lite - Feature Documentation

## Project Overview
**CSMS Lite** is a comprehensive OCPP 1.6 Charging Station Management System implementation built with Node.js. This project serves as a learning platform for understanding OCPP protocols and provides a complete CSMS solution with both backend services and web interface.

## Core Architecture

### Technology Stack
- **Backend**: Node.js with ES6 modules
- **OCPP Protocol**: OCPP 1.6 implementation using `ocpp-rpc` library
- **Web Server**: Express.js with CORS support
- **Logging**: Winston with multiple transport levels
- **Web Interface**: Vanilla JavaScript with modern CSS
- **Communication**: WebSocket for OCPP, HTTP for API and web interface

### Server Components
- **OCPP Server**: Handles charger connections on port 9220 (configurable)
- **HTTP Server**: Serves web interface and REST API on port 3000 (configurable)
- **Dual Protocol Support**: Simultaneous OCPP and HTTP operations

## Implemented Features

### 1. OCPP Protocol Support

#### 1.1 Core OCPP Messages (Incoming from Chargers)
- **BootNotification**: Handles charger initialization and registration
- **Heartbeat**: Maintains connection health monitoring
- **StatusNotification**: Tracks connector status changes
- **Authorize**: User authentication and authorization
- **StartTransaction**: Initiates charging sessions
- **StopTransaction**: Terminates charging sessions
- **MeterValues**: Energy consumption monitoring

#### 1.2 Remote Operations (Outgoing to Chargers)
- **RemoteStartTransaction**: Remotely initiate charging sessions
- **RemoteStopTransaction**: Remotely terminate charging sessions
- **Reset**: Soft and hard charger resets
- **ChangeConfiguration**: Modify charger settings
- **GetConfiguration**: Retrieve charger configuration

### 2. Connection Management

#### 2.1 Charger Connection Lifecycle
- **Authentication Middleware**: Validates charger credentials during connection
- **Connection Tracking**: Real-time monitoring of charger connections
- **Session Management**: Unique session IDs for each charger connection
- **Disconnection Handling**: Graceful cleanup when chargers disconnect

#### 2.2 Connection Monitoring
- **Heartbeat Monitoring**: Automatic detection of offline chargers (5-minute threshold)
- **Connection Statistics**: Real-time stats on connected/offline chargers
- **Status Updates**: Live connector status tracking
- **Connection Health**: Periodic health checks every 30 seconds

### 3. Charger Status Management

#### 3.1 Real-time Status Tracking
- **Connector Status**: Available, Occupied, Charging, Unavailable, Faulted
- **Transaction Tracking**: Active transaction monitoring
- **Charger Information**: Model, vendor, firmware version, serial numbers
- **Last Activity**: Heartbeat timestamps and boot notifications

#### 3.2 Data Storage
- **In-Memory Storage**: Global charger status tracking
- **Transaction History**: Complete transaction lifecycle management
- **Connector State**: Individual connector status tracking
- **Session Data**: Connection session information

### 4. REST API Endpoints

#### 4.1 Charger Management API
- `GET /api/chargers` - Retrieve all chargers with status
- `GET /api/chargers/:id` - Get specific charger details
- Real-time charger information including connectors and transactions

#### 4.2 Remote Operations API
- `POST /api/operations/remote-start` - Start transaction remotely
- `POST /api/operations/remote-stop` - Stop transaction remotely
- `POST /api/operations/reset` - Reset charger (Soft/Hard)
- `POST /api/operations/change-configuration` - Modify charger settings
- `POST /api/operations/get-configuration` - Retrieve charger configuration

#### 4.3 Logging API
- `GET /api/logs` - Retrieve system logs with filtering
- `GET /api/logs/charger/:chargerId` - Get charger-specific logs
- `DELETE /api/logs` - Clear log files (development/testing)

#### 4.4 System API
- `GET /health` - Health check endpoint
- `GET /` - Web interface serving

### 5. Web Interface

#### 5.1 Dashboard Features
- **Real-time Charger List**: Live display of connected chargers
- **Connection Status**: Visual indicators for online/offline status
- **Charger Details**: Session ID, heartbeat, connectors, transactions
- **Auto-refresh**: Automatic updates every 5 seconds

#### 5.2 Remote Operations Panel
- **Charger Selection**: Dropdown for connected chargers
- **Transaction Management**: Start/stop transaction controls
- **Reset Operations**: Soft and hard reset buttons
- **Form Validation**: Input validation for operations
- **Real-time Feedback**: Success/error notifications

#### 5.3 System Monitoring
- **Live Logs**: Real-time system log display
- **Log Filtering**: Level-based log filtering
- **Connection Statistics**: Live connection count
- **Manual Refresh**: Manual data refresh controls

### 6. Logging System

#### 6.1 Multi-level Logging
- **Console Output**: Colored console logging for development
- **Combined Logs**: All application logs in `logs/combined.log`
- **Error Logs**: Error-only logs in `logs/error.log`
- **OCPP Traffic**: OCPP message logs in `logs/ocpp-traffic.log`

#### 6.2 Logging Features
- **Structured Logging**: JSON-formatted log entries
- **OCPP Message Logging**: Complete OCPP message tracking
- **Charger Event Logging**: Connection/disconnection events
- **Error Tracking**: Comprehensive error logging with stack traces
- **Timestamp Management**: Precise timestamp logging

### 7. Transaction Management

#### 7.1 Transaction Lifecycle
- **Transaction Initiation**: Local and remote transaction starts
- **Transaction Tracking**: Real-time transaction monitoring
- **Energy Monitoring**: Meter value tracking
- **Transaction Completion**: Proper transaction termination
- **Transaction History**: Complete transaction records

#### 7.2 Transaction Features
- **Unique Transaction IDs**: Auto-generated transaction identifiers
- **User Authorization**: ID tag validation
- **Energy Consumption**: Meter start/stop tracking
- **Transaction Status**: Active/Completed status tracking
- **Connector Management**: Automatic connector status updates

### 8. Configuration Management

#### 8.1 Charger Configuration
- **Dynamic Configuration**: Runtime configuration changes
- **Configuration Retrieval**: Get current charger settings
- **Key-Value Management**: OCPP configuration key handling
- **Validation**: Configuration value validation

### 9. Security Features

#### 9.1 Authentication
- **Charger Authentication**: Connection-time authentication
- **Session Management**: Secure session handling
- **Authorization**: User authorization for transactions
- **Connection Validation**: Handshake validation

### 10. Monitoring and Observability

#### 10.1 System Monitoring
- **Connection Monitoring**: Automatic offline detection
- **Health Checks**: System health monitoring
- **Performance Tracking**: Connection statistics
- **Error Monitoring**: Comprehensive error tracking

#### 10.2 Operational Features
- **Real-time Updates**: Live system status
- **Manual Operations**: Remote charger control
- **Log Management**: Log viewing and management
- **Status Reporting**: Comprehensive status information

## Technical Specifications

### Ports and Protocols
- **OCPP Server**: Port 9220 (WebSocket)
- **HTTP Server**: Port 3000 (HTTP/HTTPS)
- **Protocol Support**: OCPP 1.6, HTTP/HTTPS, WebSocket

### Configuration
- **Environment Variables**: Configurable ports and settings
- **Log Levels**: Configurable logging levels
- **Heartbeat Intervals**: Configurable heartbeat timing
- **Connection Timeouts**: Configurable timeout settings

### Dependencies
- **ocpp-rpc**: OCPP protocol implementation
- **express**: Web server framework
- **winston**: Logging framework
- **ws**: WebSocket support
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Development Features

### Code Organization
- **Modular Architecture**: Separated concerns with middleware
- **ES6 Modules**: Modern JavaScript module system
- **Error Handling**: Comprehensive error management
- **Code Documentation**: Well-documented codebase

### Testing and Development
- **Development Mode**: Nodemon for development
- **Log Management**: Development-friendly logging
- **API Testing**: RESTful API for testing
- **Web Interface**: User-friendly testing interface

## Comparison Points

### Strengths
1. **Complete OCPP 1.6 Implementation**: Full protocol support
2. **Dual Interface**: Both API and web interface
3. **Real-time Monitoring**: Live status updates
4. **Comprehensive Logging**: Multi-level logging system
5. **Remote Operations**: Full remote control capabilities
6. **Modern Architecture**: Clean, modular codebase
7. **User-friendly Interface**: Intuitive web dashboard
8. **Production-ready Features**: Health checks, monitoring, error handling

### Use Cases
- **Learning Platform**: Educational OCPP implementation
- **Development Testing**: CSMS testing environment
- **Prototype Development**: Rapid prototyping
- **Integration Testing**: OCPP integration validation
- **Small-scale Deployments**: Lightweight CSMS solution

### Limitations
- **In-memory Storage**: No persistent database
- **Single Instance**: No clustering support
- **Basic Authentication**: Simple auth implementation
- **Limited Scalability**: Designed for small to medium deployments

## Conclusion

CSMS Lite provides a comprehensive, feature-rich implementation of an OCPP 1.6 Charging Station Management System. It offers both educational value for learning OCPP protocols and practical functionality for managing charging stations. The system includes complete OCPP message handling, remote operations, real-time monitoring, web interface, and comprehensive logging - making it suitable for development, testing, and small-scale production deployments.
