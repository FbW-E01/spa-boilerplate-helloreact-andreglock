import logo from './logo.svg';
import './App.css';
import addButton from './addButton';

function App() {
  return (
    <div className="App">
      <header>Hello React! {addButton()}</header>
      <sidebar>Sidebar {addButton()}</sidebar>
      <main>lorem ipsum {addButton()}</main>
      <footer>Made by a highly trained not a monkey {addButton()}</footer>
    </div>
  );
}

export default App;
