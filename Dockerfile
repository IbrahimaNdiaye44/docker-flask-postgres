# Use official Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose port 5000
EXPOSE 5000

# Start Gunicorn when the container runs
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app.app:app"]

