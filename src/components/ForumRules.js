import React from "react";
import "../css/Forum.css";
import ContactsPreview from "./ContactsPreview";

function ForumRules() {
  return (
    <section id="forum-rules">
      <div class="rules-container">
        <ul>
          <li>
            <i class="fas fa-minus"></i>
            Правила форума, указанные ниже, обязательны для выполнения всеми
            участниками форума без исключений.
          </li>
          <li>
              <i class="fas fa-minus"></i> Правила отдельных форумов
            являются дополнениями к общим правилам форума.
          </li>
          <li>
              <i class="fas fa-minus"></i>
            Администрация оставляет за собой право изменять правила без
            уведомления.
          </li>
          <li>
              <i class="fas fa-minus"></i>
            Дополнения и изменения правил начинают действовать с момента их
            опубликования.
          </li>
        </ul>
      </div>
      <div class="rules-container">
        <h2 id="prohibited-header"> Запрещено</h2>
        <ol>
          <li>Публиковать заведомо ложнyю инфоpмацию.</li>
          <li>
            Использовать мат и/или грубые выражения (в том числе в
            замаскированной форме).
          </li>
          <li>
            Оскорблять кого-либо в прямой или косвенной форме, высказывать
            неуважение и/или хамить участникам форума.
          </li>
          <li>
            Создавать сообщения, наpyшающие действyющее законодательство РФ.
          </li>
          <li>
            Рекламировать в сообщениях, подписях или аватарах любые товары и
            услуги без специального разрешения администрации форума.
          </li>
          <li>Создавать одинаковые темы или сообщения в разных форумах.</li>
          <li>
            Создавать темы с вопросами, ответы на которые даны в теме FAQ.
          </li>
          <li>
            Создавать новые темы с названиями, не отражающими суть проблемы или
            вопроса.
          </li>
          <li>
            Вести разговор на "вольные темы" (флеймить), создавать темы, не
            соответствующие данному форуму, или отсылать сообщения, не
            соответствующие обсуждаемой теме (оффтопик).
          </li>
          <li>
            Публиковать ссылки на нелицензионное коммерческое програмное
            обеспечение (варез), программы для его взлома (краки) и генераторы
            ключей, а также на материалы, защищённые авторскими правами (книги,
            музыка, видео и прочее).
          </li>
          <li>
            Создавать сообщения, не несущие конкретной смысловой нагрузки в
            контексте обсуждаемой темы (флуд).
          </li>
          <li>
            Создавать сообщения, содержащие "аффтарскую" речь, специально
            сделанные ошибки; злостно несоблюдать правила русского языка.
          </li>
          <li>
            Создавать в подписях ссылки на сайты, не отвечающие тематике форума.
          </li>
          <li>
            Cоздавать сообщения ЗАГЛАВНЫМИ или заглавными и прописными буквами
            вперемешку ("вОт ТаКиМ оБрАзОм"), излишнее выделение текста в целях
            привлечения внимания полужирным шрифтом, курсивом, подчёркиванием,
            отличным от стандартного для сообщений форума цветом, шрифтом,
            размером шрифта.
          </li>
          <li>
            Самовольное модерирование. Т.е. когда некий участник форума, не
            являющийся модератором данного форума, делает замечания другим
            участникам.
          </li>
          <li>
            Обсуждать наказания, сделанные модератором или администратором.
          </li>
        </ol>
      </div>
      <div class="rules-container">
        <h2 id="warning-header">Не рекомендуется</h2>
        <ol>
          <li>
            Писать транслитом, так как это неудобно для чтения. Существуют
            методы, которые позволяют переводить транслит в кириллицу. Вы можете
            ознакомиться с такими методами на этой странице. Администрация
            оставляет за собой право закрывать темы, в которых пользователи
            постоянно пишут транслитом и игнорируют данный пункт правил.
          </li>
          <li>
            Создавать аватары и подписи на политические или религиозные темы.
            Администрация оставляет за собой право удалять такие аватары и
            подписи после уведомления пользователя через Персональные сообщения.
          </li>
          <li>
            Создавать сообщения политического или религиозного содержания.
            Администрация оставляет за собой право удалять подобные сообщения
            без предупреждения.
          </li>
          <li>
            Создавать подписи на любом языке, кроме русского и английского.
            Пользователи русскоязычного форума должны понимать то, что пишут
            остальные участники форума. Английский считается международным
            языком. Администрация оставляет за собой право удалять такие подписи
            после уведомления пользователя через Персональные сообщения.
          </li>
          <li>
            Многократно поднимать тему, если на поставленный вопрос ответ не был
            получен своевременно. В случае многократного поднятия темы
            сообщениями типа "up", это может быть расценено как флуд.
          </li>
        </ol>
      </div>
      <div class="rules-container">
        <h2 id="general-rules-header">Общие положения</h2>
        <ol>
          <li>
            Прежде чем создавать новые темы, обязательно воспользуйтесь ПОИСКОМ.
            FAQ. Возможно то, что Вы хотите спросить, уже обсуждалось на форуме.
            Так Вы сэкономите драгоценное время себе и другим.
          </li>
          <li>
            Старайтесь писать грамотно. Проверяйте написанные сообщения перед
            тем как их отправить.
          </li>
          <li>
            При написании сообщения избегайте излишнего цитирования. Это
            затрудняет чтение сообщения и излишне загружает тему.
          </li>
          <li>
            Личная переписка в общей теме считается оффтопиком. Для личной
            переписки есть Персональные сообщения.
          </li>
          <li>
            Если Вам нечего сказать — лучше ничего не говорить. Не надо писать
            сообщения только для того, чтобы отметиться.
          </li>
        </ol>
      </div>
      <div class="rules-container">
        <h2 id="admin-rules-header">Администрирование и модерирование</h2>
        <ol>
          <li>
            Администраторы и модераторы имеют право редактировать, переносить,
            закрывать, а также удалять сообщения и темы, не удовлетворяющие
            правилам форума.
          </li>
          <li>
            Администраторы и модераторы имеют право преимущественного
            трактования тех или иных пунктов правил форума в случае заявлений о
            наличии двойного смысла в таких пунктах со стороны пользователя.
          </li>
          <li>
            Действия модератора можно обжаловать только в администрации форума и
            только посредством Персональных сообщений.
          </li>
          <li>
            Решение администрации форума является окончательным и обжалованию не
            подлежит.
          </li>
        </ol>
      </div>
    <ContactsPreview/>
    </section>
  );
}

export default ForumRules;
