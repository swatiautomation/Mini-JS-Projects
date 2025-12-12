# Mini JavaScript Projects

A collection of beginner-friendly JavaScript projects for learning and practicing core JavaScript concepts including DOM manipulation, event handling, and interactive UI development.

## 📁 Projects Overview

### 1. Color Flipper
**Location:** `1/`

A simple color changing application that allows users to change the background color of the page.

**Features:**
- Set background to Red, Blue, or Green
- Generate random colors
- Interactive button-based UI

**Files:**
- `main.html` - HTML structure
- `index.js` - JavaScript logic
- `main.css` - Styling

**Concepts:**
- DOM manipulation
- Event listeners
- Random color generation using hex values

---

### 2. Palindrome Checker
**Location:** `2/`

An interactive tool to check if a given string is a palindrome.

**Features:**
- Input text validation
- Real-time palindrome checking
- Case-insensitive comparison

**Files:**
- `main.html` - HTML structure
- `index.js` - JavaScript logic

**Concepts:**
- String manipulation
- Reverse string algorithm
- Form input handling

---

### 3. Random Quote Generator
**Location:** `3/`

A motivational quote generator that displays random quotes with each button click.

**Features:**
- Generate random quotes from a collection
- Prevents duplicate quotes until all have been shown
- Clean and simple interface

**Files:**
- `main.html` - HTML structure
- `index.js` - JavaScript logic

**Concepts:**
- Array manipulation
- Random number generation
- Set data structure for tracking used quotes

**Quote Collection:**
- Motivational and inspirational quotes
- 5+ unique quotes

---

### 4. Stopwatch
**Location:** `4/`

A fully functional digital stopwatch application with start, stop, and reset controls.

**Features:**
- Start/Stop timer functionality
- Reset timer to 00:00
- Time display in MM:SS format
- Accurate second counting
- Prevents multiple timers running simultaneously

**Files:**
- `main.html` - HTML structure
- `index.js` - JavaScript logic with complete timer implementation

**Concepts:**
- Timer functions (setInterval/clearInterval)
- Time formatting with padStart
- State management with intervalId
- Preventing memory leaks

**Status:** ✅ Complete

---

### 5. Calculator
**Location:** `5/`

A functional calculator application for basic arithmetic operations.

**Features:**
- Basic arithmetic operations (+, -, *, /)
- Number buttons (0-9) and decimal point
- Equal button for calculation
- Clear button to reset
- Dynamic result display

**Files:**
- `calculator.html` - HTML structure
- `calculator.js` - JavaScript logic
- `calculator.css` - Styling

**Concepts:**
- DOM manipulation with querySelectorAll
- Event listeners on multiple elements
- Dynamic element creation
- JavaScript eval() for expression evaluation
- forEach loop for batch event handling

---

### 6. Heart Trail Animation
**Location:** `6/`

An interactive mouse trail animation that creates heart shapes following the cursor.

**Features:**
- Mouse movement tracking
- Dynamic heart generation
- Random size variations
- Auto-removal after 3 seconds
- Smooth animation effects

**Files:**
- `main.html` - HTML structure
- `index.js` - JavaScript logic
- `main.css` - Styling and animations
- `images/` - Heart image assets

**Concepts:**
- Mouse event handling (mousemove)
- Dynamic element creation and removal
- Position tracking (offsetX, offsetY)
- setTimeout for timed removal
- Random number generation for variety
- CSS positioning

---

### 7. Rock Paper Scissors
**Location:** `7/`

A classic Rock Paper Scissors game where you play against the computer with score tracking.

**Features:**
- Play Rock, Paper, or Scissors against computer
- Random computer move generation
- Score tracking (Wins, Losses, Ties)
- Persistent score using localStorage
- Reset score functionality
- Visual feedback with color-coded results
- Image-based UI with emojis

**Files:**
- `rock-paper-scissors.html` - HTML structure
- `script.js` - JavaScript game logic
- `styles.css` - Styling
- `images/` - Rock, paper, scissors emoji images

**Concepts:**
- Game logic and conditional statements
- localStorage for persistent data
- JSON parsing and stringifying
- Random move selection
- Score management
- Dynamic UI updates

---

### 8. Heads or Tails
**Location:** `8/`

A coin flip game where you guess Heads or Tails and track your win/loss record.

**Features:**
- Choose Heads or Tails
- Random coin flip simulation (50/50 probability)
- Win/Loss score tracking
- Persistent scoreboard using localStorage
- Reset score functionality
- Simple and clean interface

**Files:**
- `headsAndTails.html` - HTML structure
- `headsAndTails.js` - JavaScript logic
- `headsAndTails.css` - Styling

**Concepts:**
- Probability and randomization (Math.random)
- localStorage for score persistence
- Ternary operators for conditional logic
- Event handling
- Score management
- Arrow functions

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Running the Projects

1. Navigate to the desired project folder (1, 2, 3, 4, 5, 6, 7, or 8)
2. Open the HTML file in your web browser:
   - Projects 1-4, 6: `main.html`
   - Project 5: `calculator.html`
   - Project 7: `rock-paper-scissors.html`
   - Project 8: `headsAndTails.html`
3. Interact with the application

Alternatively, you can use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000/mini_projects/[project-number]/main.html`

---

## 📚 Learning Objectives

Through these projects, you'll learn:

- **DOM Manipulation**: Selecting and modifying HTML elements
- **Event Handling**: Responding to user interactions
- **String Operations**: Processing and manipulating text
- **Random Generation**: Creating random numbers and selections
- **Timer Functions**: Working with time-based operations
- **CSS Styling**: Basic styling and layout
- **User Input**: Handling and validating user input
- **Mouse Events**: Tracking cursor movement and interactions
- **Animation**: Creating dynamic visual effects
- **Mathematical Operations**: Implementing calculator logic
- **Game Logic**: Building interactive games with rules and scoring
- **Local Storage**: Persisting data across browser sessions
- **Probability**: Working with random outcomes and statistics

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

---

## 📝 Project Structure

```
mini_projects/
├── 1/                  # Color Flipper
│   ├── index.js
│   ├── main.html
│   └── main.css
├── 2/                  # Palindrome Checker
│   ├── index.js
│   └── main.html
├── 3/                  # Random Quote Generator
│   ├── index.js
│   └── main.html
├── 4/                  # Stopwatch
│   ├── index.js
│   └── main.html
├── 5/                  # Calculator
│   ├── calculator.js
│   ├── calculator.html
│   └── calculator.css
├── 6/                  # Heart Trail Animation
│   ├── index.js
│   ├── main.html
│   ├── main.css
│   └── images/
├── 7/                  # Rock Paper Scissors
│   ├── script.js
│   ├── rock-paper-scissors.html
│   ├── styles.css
│   └── images/
├── 8/                  # Heads or Tails
│   ├── headsAndTails.js
│   ├── headsAndTails.html
│   └── headsAndTails.css
└── README.md
```

---

## 🎯 Future Enhancements

- Add more projects (Counter, To-Do List, Weather App, etc.)
- Improve styling and responsiveness across all projects
- Add keyboard support for calculator and games
- Enhance animations with more effects
- Add sound effects for games
- Implement error handling for calculator division by zero
- Add difficulty levels for Rock Paper Scissors
- Create leaderboard for game scores

---

## 🤝 Contributing

Feel free to fork this repository and add your own mini projects or improvements!

---

## 📄 License

This project is open source and available for learning purposes.

---

## 👤 Author

**Swati Sharma**

Happy Coding! 🎉
