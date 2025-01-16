@echo off
docker compose up -d
start cmd /k "cd .\productsService && npm i && npm run dev"
start cmd /k "cd .\ordersService && npm i && npm run dev"
start cmd /k "cd .\opinionsService && npm i && npm run dev"