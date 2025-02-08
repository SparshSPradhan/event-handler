from flask import Flask, jsonify, request, redirect
from scraper import get_event_data
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

# In-memory data store
events = []

# Endpoint to get events data
@app.route('/api/events', methods=['GET'])
def get_events():
    return jsonify(events)


@app.route('/')
def home():
    return "Welcome to the Event Tracker API! Use /api/events to see events."


# Endpoint to handle "Get Tickets"
@app.route('/get-tickets', methods=['POST'])
def get_tickets():
    email = request.form['email']
    event_url = request.form['event_url']
    # You can store email for future reference
    print(f"Received email: {email} for event: {event_url}")
    return redirect(event_url)

# Function to scrape event data
def update_events():
    global events
    events = get_event_data()
    print("Event data updated!")

# Set up the scheduler to run the scraping function every 24 hours
scheduler = BackgroundScheduler()
scheduler.add_job(func=update_events, trigger="interval", hours=24)
scheduler.start()

if __name__ == '__main__':
    # Initialize events on startup
    update_events()
    app.run(debug=True)
