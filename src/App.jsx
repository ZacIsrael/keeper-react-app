import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from './components/Footer';
import Note from './components/Note';

/*

Project Spec:

1. Create a new React app
2. Create a Header.jsx component that render a <header> element to 
show the Keeper App name in an <h1>
3. Create a Footer.jsx component that renders a <footer> element to 
show a copyright message in a <p> with a dynamically updated year
4. Create a Note.jsx component to show a <div> element with a <h1> 
for a title and a <p> for the content

*/

function App() {
  const [count, setCount] = useState(0)
  // In a real application, this data would be getting fetched from the server
  const appTitle = "Keeper App";
  const noteTitle = "Note 1";
  const noteContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.";

  return (
    <>
    <Header appName={appTitle}/>
    <Note title={noteTitle} content={noteContent} />
    <Footer />
    </>
  )
}

export default App
