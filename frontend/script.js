// Fetch event data from the backend
async function fetchEvents() {
    const response = await fetch('http://localhost:5000/api/events');
    const events = await response.json();

    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h2>${event.name}</h2>
            <p>${event.date}</p>
            <button class="get-tickets" onclick="openModal('${event.url}')">Get Tickets</button>
        `;
        eventsList.appendChild(eventCard);
    });
}

// Open the modal and set the event URL
function openModal(eventUrl) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    const submitBtn = document.getElementById('submit-email');
    submitBtn.onclick = () => {
        const email = document.getElementById('email').value;
        if (email) {
            // Send email and event URL to the backend
            fetch('http://localhost:5000/get-tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${email}&event_url=${eventUrl}`,
            }).then(() => {
                window.location.href = eventUrl;
            });
        }
    };
}

// Fetch events when the page loads
window.onload = fetchEvents;
