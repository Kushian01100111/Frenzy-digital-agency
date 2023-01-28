import './App.css';
import ProjectCards from './components/project cards/ProjectCards';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
        <ProjectCards />
        <Button text={"Mas proyectos"} />
    </div>
  );
}

export default App;
