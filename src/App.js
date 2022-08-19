import AmazingAuthor from './components/AmazingAuthor';
import AmazingCommunities from './components/AmazingCommunities';
import Content from './components/Content';
import Navbar from './components/Navbar';
import PlainContent from './components/PlainContent';
import PlainShortStory from './components/PlainShortStory';
import Stories from './components/Stories';

function App() {
  return (
    <div>
      <Navbar />
      <Stories />
      <Content />
      <PlainContent />
      <AmazingAuthor />
      <PlainShortStory />
      <PlainContent />
      <Content />
      <AmazingCommunities />
    </div>
  );
}

export default App;
