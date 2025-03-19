# Use official Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the application files
COPY app/ /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Flask runs on
EXPOSE 5000

# Start the Flask application using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
