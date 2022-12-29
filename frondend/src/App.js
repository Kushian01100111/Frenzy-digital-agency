import './App.css';

function App() {
  return (
    <div className="App">
     <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <InstagramEmbed
      captioned
      url="https://www.instagram.com/p/Cl86VvALY7d/"
      width={600}
    />
  </div>
    </div>
  );
}

export default App;
