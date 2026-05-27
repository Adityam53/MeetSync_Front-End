# Meetup Event Management App

A fullstack meetup event management application that allows users to explore upcoming events, view detailed meetup information, search events by title or tags, and browse speaker and venue details.

Developed using React JS, React Router, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose.

---

## Demo Link

[Live Demo](https://meet-sync-front-end-sandy.vercel.app/)

---

## Quick Start

```bash
https://github.com/Adityam53/MeetSync_Front-End.git
cd meetSync
cd FrontEnd
npm install
npm run dev
```

---

## Technologies

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* React JS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

---
## Demo Video

Watch a walkthrough (detailed) of all major features of this app:[Loom Video](https://drive.google.com/file/d/1NxeRcb7Dtdm0P68L8k_Xast-yUAiASQT/view?usp=sharing)

## Features

---

### Home Page

* View all available meetup events
* Responsive card-based event layout
* Displays event image, title, date, venue, and event type
* Dynamic data fetching from backend API

---

### Search Meetups

* Search meetups by title
* Search meetups using tags
* Real-time filtering of events
* Improved event discovery experience

---

### Meetup Details

* View complete information about a meetup
* Includes:

  * Event title
  * Date
  * Start time
  * End time
  * Event type
  * Description
  * Venue
  * Entry fee
  * Dress code
  * Age restrictions

---

### Speakers Section

* Display speaker information for every meetup
* Includes:

  * Speaker image
  * Speaker name
  * Designation
* Supports multiple speakers per event

---

### Event Information

* View additional meetup details such as:

  * Tags
  * Venue details
  * Event category
  * Registration information
  * Pricing information

---

### Backend API Integration

* Fetch meetup data from MongoDB
* REST API powered by Express.js
* Centralized database operations
* Structured JSON responses

---

### Database Seeding

* Populate MongoDB database using JSON data
* Easy setup for development and testing
* Bulk meetup insertion support

---

### Responsive Design

* Mobile-friendly interface
* Tablet and desktop optimized layouts
* Clean and modern user experience

---

## API Reference

### Meetup Endpoints

#### GET `/meetups`

Fetch all meetup events from the database.

**Response**

```json
[
  {
    "_id": "65f123abc456",
    "title": "Tech Connect 2025",
    "date": "2025-06-20T00:00:00.000Z",
    "startTime": "10:00 AM",
    "endTime": "01:00 PM",
    "type": "Offline",
    "imageThumbnail": "https://example.com/image.jpg",
    "tags": ["Technology", "Networking"],
    "details": "Meet professionals and discuss emerging technologies.",
    "dressCode": "Business Casual",
    "ageRestrictions": "18+",
    "speakers": [
      {
        "speakerName": "John Doe",
        "speakerDesignation": "Software Engineer",
        "speakerImg": "https://example.com/speaker.jpg"
      }
    ],
    "venue": "Mumbai Convention Center",
    "entryFee": 499
  }
]
```

---

### Error Response

When no meetup data is available:

```json
{
  "error": "Meetups not found"
}
```

---

### Server Error Response

```json
{
  "error": "An error occured while fetching meetups."
}
```

---

## Meetup Data Structure

Each meetup document contains:

```json
{
  "_id": "65f123abc456",
  "title": "Tech Connect 2025",
  "date": "2025-06-20T00:00:00.000Z",
  "startTime": "10:00 AM",
  "endTime": "01:00 PM",
  "type": "Offline",
  "imageThumbnail": "https://example.com/image.jpg",
  "tags": ["Technology", "Networking"],
  "details": "Meet professionals and discuss emerging technologies.",
  "dressCode": "Business Casual",
  "ageRestrictions": "18+",
  "speakers": [
    {
      "speakerName": "John Doe",
      "speakerDesignation": "Software Engineer",
      "speakerImg": "https://example.com/speaker.jpg"
    }
  ],
  "venue": "Mumbai Convention Center",
  "entryFee": 499
}
```

---

## Future Enhancements

* Create meetup functionality
* Update meetup details
* Delete meetup events
* User authentication
* Event registration system
* Event bookmarking
* Category-based filtering
* Pagination support

---

## Contact

For bugs or feature requests, please reach out to:

**Email:** adityamoorjmalani53@gmail.com
