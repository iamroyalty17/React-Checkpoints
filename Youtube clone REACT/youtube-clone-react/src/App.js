import logo from './logo.svg';
import './App.css';
import Mainvideo from './Mainvideo/mainvideo';
import SuggestionVideos from './Suggestion video/suggestionvideo';
import Comments from './comments/comments';
import Navigation from './componets/components';

function App() {
  return (
    <>
    <Navigation/>
    <div className='mainvideo'>
       <Mainvideo/>
       <div className='Comments'>
    <Comments/>
    </div>
    </div>
   <div className='suggestionvideos'>
     <SuggestionVideos/>
   </div>
   
    </>
  );
}

export default App;
