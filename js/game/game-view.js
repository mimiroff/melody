import AbstractView from '../view';
import ArtistView from '../artist/artist-view';
import {generateArtistQuestion} from "../data/artist-screen-data";
import {showScreen} from "../util";
import GenreView from "../genre/genre-view";
import {generateGenreQuestion} from "../data/genre-screen-data";
import {initialState} from "../data/data";
import Header from '../header/header-view';

// const update = (container, view) => {
//   container.innerHTML = ``;
//   container.appendChild(view.element);
// };

export default class GameView extends AbstractView {

  updateLevel(newLevel) {
    let level;
    if (newLevel === `artist`) {
      level = new ArtistView(generateArtistQuestion(3));
      level.onArtistListClick = (evt) => this.onArtistListClick(evt);
      level.onArtistControlClick = (evt) => this.onArtistControlClick(evt);
    } else if (newLevel === `genre`) {
      level = new GenreView(generateGenreQuestion(4));
      level.onCheckboxClick = (evt) => this.onCheckboxClick(evt);
      level.onControlClick = (evt) => this.onControlClick(evt);
      level.onSubmitClick = () => this.onSubmitClick();
    }

    showScreen(level);
    this.drawHeader();
    this.level = level;
  }

  drawHeader() {
    this.header = new Header(initialState);
    this.header.draw();
  }

  updateHeader() {
    this.header.updateTime(initialState);
  }

  onArtistListClick() {

  }

  onArtistControlClick() {

  }

  onCheckboxClick() {

  }

  onControlClick() {

  }

  onSubmitClick() {

  }
}