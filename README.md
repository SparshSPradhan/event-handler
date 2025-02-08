# Event Tracker - Sydney Events

This project is a web application that automatically scrapes events in Sydney, Australia from event websites and lists them on a webpage. It updates the event data every 24 hours and allows users to get tickets after providing their email.

# Features

✅ Scrapes event data automatically
✅ Lists events with details (title, date, venue, etc.)
✅ Updates the event list every 24 hours
✅ Redirects users to the original ticket website after email opt-in
✅ API to fetch event data

# Technologies Used

Backend: Flask (Python)
Scraping: BeautifulSoup (Python)
Task Scheduler: APScheduler
Frontend: React, TailwindCSS
Database: In-memory (for demo, can be extended to use a DB)

# Project Structure


event-tracker/
│── backend/             # Backend (Flask API + Scraper)
│   ├── app.py           # Main Flask server
│   ├── scraper.py       # Scrapes event data
│   ├── requirements.txt # Python dependencies
│   ├── venv/            # Virtual environment (optional)
│
│── frontend/            # Frontend (React App)
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Pages
│   │   ├── App.js       # Main app component
│   │   ├── index.js     # React entry point
│   │   ├── index.css    # Tailwind styles
│   ├── package.json     # Frontend dependencies
│   ├── public/
│   │   ├── index.html   # HTML entry point
│
│── README.md            # Documentation

# Setup Instructions

Backend Setup (Flask API)

1. Clone the repository

git clone https://github.com/your-repo/event-tracker.git
cd event-tracker/backend

2. Create a virtual environment

python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate     # On Windows

3. Install dependencies

pip install -r requirements.txt

4. Run the Flask server

python3 app.py
Flask will start at http://127.0.0.1:5000/

Frontend Setup (React App)

1. Go to frontend folder

cd ../frontend

2. Install dependencies

npm install

3. Start the frontend

npm start
The React app will run at http://localhost:3000/

# API Endpoints

Method	Endpoint	Description

GET	/api/events	Fetches event list

POST	/get-tickets	Submits email & redirects to ticket site

# How It Works

Scraper runs every 24 hours and fetches event details

Events are stored in memory (or database)

Users can view events on the frontend

Clicking "GET TICKETS" asks for email, then redirects to the ticket site

# Future Improvements

Store events in PostgreSQL or MongoDB

Add email validation before redirecting

Improve scraping logic for more accuracy

# Contributors

Sparsh S. Pradhan - Developer

🚀 Enjoy tracking Sydney's events! 🎉
