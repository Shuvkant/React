import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Strange",
    age: 22,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card
        about="A full stack developer is skilled in both front-end and back-end technologies, handling the entire development process of a web application. They work with databases, servers, systems engineering, and user-facing interfaces to build comprehensive and functional software solutions."
        username="Shuvkant"
        designation="Fullstack Developer"
        country="Italy"
        imgSrc="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        about="A technical manager oversees the development and implementation of technology projects, ensuring that teams deliver high-quality solutions on time. They balance technical expertise with leadership skills, coordinating resources, managing risks, and aligning projects with business objectives."
        setObject={myObj}
        username="Walter"
        designation="Technical Manager"
        country="France"
        imgSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        about="A cybersecurity geek is passionate about protecting digital systems and data from cyber threats, constantly exploring vulnerabilities and security solutions. They stay up-to-date with the latest hacking techniques and defense strategies to ensure robust cybersecurity measures."
        username="Stephen"
        designation="Cyber Geek"
        country="Jordan"
        imgSrc="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </>
  );
}

export default App;
