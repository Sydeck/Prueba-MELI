Docker (Recommended)
# Use correct Node version
nvm use

# Start application with Docker
docker-compose up --build
Option 2: Manual Setup
# Clone repository
git clone https://github.com/Sydeck/mercadolibre-challenge.git
cd mercadolibre-challenge

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
npm run dev
