import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import FormikFormComponent from './components/FormikFormComponent';
import FormikFormComponent2 from './components/FormikFormComponent2';

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <FormComponent />
      <FormikFormComponent />
      <FormikFormComponent2 />
    </div>
  );
}

export default App;
