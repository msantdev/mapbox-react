## Introduction

This is a simple web application that allows you to test your web application.
The goal is to create a mini dashboard of vehicles.

The features are simple:

- Connect to the WS backend,
- Display the vehicles according to the types or status,
- and follow the design of the application.

The stack we are aiming to use is:

- Bun
- React
- Socket IO
- Typescript
- Mapbox
- Tailwind
- TurfJS

## Installation

```bash
bun install
```

## Usage of web app

Create .env file in packages/web-app and use the access token provided by email

```bash
VITE_MAPBOX_ACCESS_TOKEN=
VITE_WEBSOCKET_URL=http://localhost:3000
```
```bash
cd packages/web-app
bun dev
```

## Testing of web app
```bash
cd packages/web-app
bun run test
```

## Usage of backend

```bash
cd packages/ws-backend
bun start
```

## How to connect to the WS backend

The WS engine is based on Socket IO.

The backend will be simulated by a bun script that will send an initial payload and updates.
It is allowed to use the type definition of the backend directly in the frontend (exposed by TS or zod).

## Subject

Please find what we are going to review in your project :

- The design should follow the guidelines provided in the linked figma file (cf Specifications).
- The app should display our scooters on a map using Mapbox, represented by markers.
- The app should handle connection and update from WS to an internal state,
- The app should display an orange marker if the scooter status is available,
- The app should display a black marker if the scooter status is booked,
- The app should display a red marker if the scooter status is maintenance,
- The app should NOT display a marker if the scooter status is disabled,
- The app should be able to let the user select a scooter and display the information of the scooter,
- The app should display a responsive design following the guidelines provided in the Figma.

### Bonus

- The app should display an search input to find by name OR plate the scooter.
- The app should display the zone on the map provided in `./assets/zones/barcelona.json`.

## Specifications

### Assets

Assets provided in the Figma (see below).

### Mapbox API

API Key is provided in the email.

### Figma

Figma file available in the email.
