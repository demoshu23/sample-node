# Use official Node image
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
