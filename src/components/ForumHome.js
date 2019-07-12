import React from "react";
import "../css/Forum.css";
import ContactsPreview from "./ContactsPreview";

function ForumHome() {
  return (
    <section>
      <div id="forum-table">
        <table>
          <tr>
            <th>Форумы</th>
            <th>Темы</th>
            <th>Сообщения</th>
          </tr>
          <tr>
            <td>
              Форум жильцов <br />
              Разговоры обо всем на свете
            </td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <div>
        <ul id="forum-stats-list">
          <li>
            5 <br /> Гостей онлайн
          </li>
          <li>
            2<br /> зарегистрированных пользователей
          </li>
          <li>
            0 <br /> Приняло участие в обсуждении
          </li>
          <li>
            0 <br />
            Всего тем
          </li>
          <li>
            0 <br /> Всего сообщений
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ForumHome;
