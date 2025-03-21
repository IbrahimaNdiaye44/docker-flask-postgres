<<<<<<< HEAD
from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

def get_db_connection():
    return psycopg2.connect(
        database=os.getenv("POSTGRES_DB"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        host="db",
        port="5432"
    )

@app.route('/')
def home():
    return jsonify({"message": "Flask Dockerized App Running!"})

@app.route('/users')
def users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users;")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
=======
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return {"message": "Flask Dockerized App Running!"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
>>>>>>> 27dccbc (Update: Improved UI, sidebar nav, smooth scroll, and Docker setup)
