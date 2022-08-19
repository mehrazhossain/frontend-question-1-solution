import Content from './components/Content';
import Navbar from './components/Navbar';
import PlainContent from './components/PlainContent';
import Stories from './components/Stories';

function App() {
  return (
    <div>
      <Navbar />
      <Stories />
      <Content />
      <PlainContent />
    </div>
  );
}

export default App;
