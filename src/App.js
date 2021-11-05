import './App.css';
import AnnouncementsContainer from './components/Announcements/AnnouncementsContainer';
import NewAnnouncement from './components/NewAnnouncement/NewAnnouncement';

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Notice Board</h1>
      <div className="mainContetnt">
        <NewAnnouncement />
        <AnnouncementsContainer />
      </div>
    </div>
  );
}

export default App;
