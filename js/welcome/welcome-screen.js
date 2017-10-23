import WelcomeView from './welcome-view';
import {showScreen} from '../util';
// import getArtistScreen from '../artist/artist';
// import getGenreScreen from '../genre/genre';
import App from '../application';


class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    showScreen(this.view);

    this.view.onClick = () => {
      App.showGame();
    };
  }
}

export default new WelcomeScreen();
