import './App.css';
import AnnouncementsContainer from './components/Announcements/AnnouncementsContainer';

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Notice Board</h1>
        <AnnouncementsContainer />
    </div>
  );
}

export default App;
