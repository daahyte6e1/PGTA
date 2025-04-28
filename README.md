# PGTA - Telegram Mini App with AR and Maps

A modern web application that combines Telegram Mini App functionality with AR features and interactive maps.

## Features

- Telegram Mini App integration
- AR capabilities using MindAR.js
- Interactive maps with Mapbox
- TypeScript + React for frontend
- Node.js backend
- PostgreSQL database with geospatial support

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Telegram Bot Token
- Mapbox API Key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_bot_token
   VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/     # Reusable React components
  ├── pages/         # Page components
  ├── services/      # API and external service integrations
  ├── utils/         # Utility functions
  ├── types/         # TypeScript type definitions
  └── assets/        # Static assets
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

## License

MIT 