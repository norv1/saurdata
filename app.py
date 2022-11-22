from flask import Flask

app = Flask(__name__)
app.secret_key = "saurdataaa"

@app.route('/')
def index():
    return "on"

if __name__ == "__name__":
    app.run(host="192.168.68.91", port=5000)