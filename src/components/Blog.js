import React from "react";
import "../css/Blog.css";

function Blog() {
  return (
    <section id="blog">
      <div id="blog-messages">
        <h2 class="blog-header" id="blog-messages-header"><div>Последние сообщения</div> <div id="blog-filter">Фильтры<i class="fas fa-chevron-down"></i></div></h2>

        <p>В блоге пока нет сообщений</p>
      </div>
      <div>
        <h2 class="blog-header">Облако тегов</h2>
        <h2 class="blog-header">Последние комментарии</h2>
        <h2 class="blog-header">Популярные блоги</h2>
        <p> Доступных блогов нет</p>
      </div>
    </section>
  );
}


export default Blog;
