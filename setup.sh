# Install frontend dependencies
ECHO "Installing frontend dependencies..."
cd ./client
npm install && npm install @mui/material @emotion/react@latest @emotion/styled@latest @mui/icons-material @mui/x-date-pickers dayjs
cd ../

# Install backend dependencies
ECHO "Installing backend dependencies..."
cd ./server/src
npm install && npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer dayjs
cd ../

ECHO "Setup complete!"