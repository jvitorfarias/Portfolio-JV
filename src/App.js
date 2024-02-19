import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

export default function App() {
  return (

    <div>
      <Header/>
    <main>
      <ProjectList nome="Primeiro projeto" description="ipsum lorem"/>
      <ProjectList nome="Segundo projeto" description="ipsum lorem"/>
    </main>
    </div>
  )
  }
