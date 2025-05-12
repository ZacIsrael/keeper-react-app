import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";

/*

Project Spec:

1. Create a new React app
2. Create a Header.jsx component that render a <header> element to 
show the Keeper App name in an <h1>
3. Create a Footer.jsx component that renders a <footer> element to 
show a copyright message in a <p> with a dynamically updated year
4. Create a Note.jsx component to show a <div> element with a <h1> 
for a title and a <p> for the content

The app should look like this: https://w00gz.csb.app/


*/

function App() {
  const [count, setCount] = useState(0);
  // In a real application, this data would be getting fetched from the server
  const notes = [
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
    },
    {
      key: 3,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
    },
    {
      key: 4,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
    },
  ];

  const appTitle = "Keeper App";
  const noteTitle = "Note 1";
  const noteContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.";

  return (
    <>
      <Header appName={appTitle} />
      {/* use map function to dynamically display notes (in a real application, they would be fetched from a backend server instead of a static array) */}
      {notes.map((item, i) => (
        <div key={i}>
          <Note title={item.title} content={item.content} />
        </div>
      ))}
      <Footer />
    </>
  );
}

export default App;
