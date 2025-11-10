#!/bin/bash
# Quick setup script for local development (macOS/Linux)

set -e

echo "🚀 Bookstore Project Setup"
echo "================================"

# Check if .env exists in backend
if [ ! -f "backend/.env" ]; then
    echo "❌ backend/.env not found. Creating from .env.example..."
    cp .env.example backend/.env
    echo "✅ Created backend/.env — please edit with your MongoDB URI and ADMIN_PASSWORD"
    exit 1
fi

# Install dependencies
echo "📦 Installing root dependencies..."
npm install

echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ All dependencies installed!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your MONGODB_URI and ADMIN_PASSWORD"
echo "2. Run backend: cd backend && npm run dev"
echo "3. Run frontend (in another terminal): cd frontend && npm run dev"
echo "4. Open http://localhost:3000"
