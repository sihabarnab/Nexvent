# Nexvent

## Project Overview

Nexvent is a Next.js-based web application for browsing, expressing interest in, and buying tickets for events containing the keyword "puera." Users can register, log in, view event details including maps, make payments, and receive confirmation emails. The app integrates SEO best practices and Google Event schema.

---

## Features

- Browse all events matching the keyword "puera"
- User registration and login system
- Mark interest in events
- Purchase tickets (only logged-in users)
- Event attendance tracking
- Detailed event pages with location map and images
- Secure payment processing
- Email confirmation on ticket purchase
- Image upload and optimized display
- SEO-friendly pages with Google Event schema integration

---

## Technology Stack

- Next.js (React) for frontend and server-side rendering
- MongoDB with MongoDB Compass for database management
- NextAuth.js or custom JWT for authentication
- Stripe (or similar) for payment processing
- Nodemailer or third-party service for email notifications
- Google Maps API for event location display
- Next.js Image component for image optimization
- SEO with dynamic meta tags and JSON-LD schema markup

---

## Functional Requirements

1. **Event Browsing**  
   Display events filtered by "puera" with server-side rendering or static generation.

2. **User Authentication**  
   Allow users to register and log in securely.

3. **Event Interaction**  
   Users can express interest in events and view their status.

4. **Ticket Purchase & Management**  
   Logged-in users can buy tickets securely and receive confirmation.

5. **Event Details Page**  
   Show event info including date, time, location (map), images, and description.

6. **Email Notifications**  
   Send confirmation emails after successful ticket purchase.

7. **Image Handling**  
   Upload and display event-related images with optimization.

8. **SEO & Schema Integration**  
   Implement SEO best practices and Google Event schema markup.

---

## Non-Functional Requirements

- Use MongoDB for data storage accessed via Next.js API routes
- Ensure security for authentication and payment processes
- Optimize performance with SSR/ISR techniques
- Build a scalable and maintainable codebase

---

## Getting Started

1. Clone the repository
2. Install dependencies
3. Configure environment variables for MongoDB, authentication, payment, and email services
4. Run the development server

---

## Contact

For any questions or contributions, please contact [Your Name or Email].
