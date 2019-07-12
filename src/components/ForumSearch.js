import React from "react";
import "../css/Forum.css";

function ForumSearch() {
  return (
    <form id="forum-search">
      <div class="label-input-group">
        <label for="forum-search-input">Поиск:</label>
        <input
          id="forum-search-input"
          class="forum-search-tb"
          type="text"
          name="forum-search"
        />
      </div>
      <div class="label-input-group">
        <label for="forum-select-input">Форум:</label>
        <input
          id="forum-select-input"
          class="forum-search-tb"
          type="text"
          name="forum-select"
        />
      </div>
      <div class="label-input-group">
        <label for="forum-period-input">Период:</label>
        <select class="forum-search-select" name="forum-period-input" id="forum-period-input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="label-input-group">
        <label for="forum-sort-input">Упорядочить:</label>
        <select class="forum-search-select" id="forum-sort-input" name="forum-sort-input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
        <input id="submit-button" class="submit-button" type="submit" value="Найти" />
    </form>
  );
}

export default ForumSearch;
