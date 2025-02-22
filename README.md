
# Sticky Notes App

A modern sticky notes application built using **React JS** for the frontend and **Appwrite** as the backend. This app allows users to create, edit, drag, and save notes with an intuitive and seamless experience.

## 🚀 Features

-   **Production Database**: All notes are stored securely in a live production-ready database using Appwrite.
    
-   **Draggable Notes**: Easily drag and reposition notes anywhere on the screen.
    
-   **Autosave Changes**: Changes to note content and position are automatically saved without explicit actions.
    
-   **Color Picker**: Customize note colors using a color picker for better organization.
    

## 🛠 Tech Stack

### Frontend

-   React JS

### Backend

-   Appwrite (Database & Authentication)
    

## 📌 Installation & Setup

### Prerequisites

-   Node.js installed
    
-   Appwrite instance setup (Self-hosted or Cloud)
    

### Clone the Repository

```
https://github.com/ashishalf/stickyNotesApp.git
cd sticky-notes-app
```

### Install Dependencies

```
npm install
```

### Configure Appwrite

1.  Create a new project in Appwrite.
    
2.  Set up a database and collection for storing notes.
    
3.  Get the project ID and API endpoint from Appwrite.
    
4.  Create a `.env` file in the root directory and add:
    

```
REACT_APP_APPWRITE_ENDPOINT=your-appwrite-endpoint
REACT_APP_APPWRITE_PROJECT_ID=your-project-id
REACT_APP_APPWRITE_DATABASE_ID=your-database-id
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

**Source** - https://sticky-fcc.vercel.app/

Developed with ❤️ using React & Appwrite

