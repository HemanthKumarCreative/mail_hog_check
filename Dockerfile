# Use the official Cypress base image
FROM cypress/browsers:node14.17.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Cypress dependencies
RUN npm install

# Copy the rest of the Cypress test files
COPY . .

# Run the Cypress tests
CMD ["npm", "run", "cypress:run"] # Assuming you have a script named 'cypress:run' in your package.json
