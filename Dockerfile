# Use official Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

<<<<<<< HEAD
# Copy the application files
COPY app/ /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Flask runs on
EXPOSE 5000

# Start the Flask application using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
=======
# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose port 5000
EXPOSE 5000

# Start Gunicorn when the container runs
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app.app:app"]

>>>>>>> 27dccbc (Update: Improved UI, sidebar nav, smooth scroll, and Docker setup)
