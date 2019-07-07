import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "../css/Carousel.css";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class="my-carousel row">
          <div class="carousel-text col-md-6 col-12">
            Приветствуем на сайте нашей управляющей компании ТСЖ "СУВОРОВ ПАРК"!{" "}
            <br /> <br />
            Наша работа для вас заключается в: <br />
            <ul>
              <li>
                управлении и обслуживании жилых домов и коммерческой
                недвижимости
              </li>
              <li> предоставлении коммунальных услуг жителям</li>
              <li>
                обеспечении жильцов актуальной информацией касаемо их дома,а
                также новостями из сферы ЖКХ
              </li>
              <li>
                облегчении процедур оплаты и передачи показаний счетчиков –
                через личные кабинеты на сайте
              </li>
            </ul>
          </div>
          <div class="carousel-img col-6">
            <img
              src="http://suvorovpark.ru/upload/resize_cache/iblock/539/605_396_2/4b8544ee4f7dafd776ff8fb0a238998a.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="my-carousel row">
          <div class="carousel-text col-md-6 col-12">
            На сайте управляющей компании ТСЖ "СУВОРОВ ПАРК" вы сможете: <br />{" "}
            <br />
            <ul>
              <li>
                ознакомиться с актуальной информацией, касающейся вашего дома, а
                также новостями из сферы ЖКХ
              </li>
              <li> увидеть всю необходимую документацию</li>
              <li> задать вопрос и получить оперативный ответ</li>
              <li> опосмотреть список домов, находящихся в нашем управлении</li>
            </ul>
          </div>
          <div class="carousel-img col-6">
            <img
              src="http://suvorovpark.ru/upload/resize_cache/iblock/539/605_396_2/4b8544ee4f7dafd776ff8fb0a238998a.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="my-carousel row">
          <div class="carousel-text col-md-6 col-12">
            Наша компания предоставляет для своих жильцов личный кабинет на
            сайте. В нем вы можете: <br/>
            <ul>
              <li>оплачивать счета ЖКУ</li>
              <li> передавать показания счетчиков</li>
              <li> просматривать историю операций</li>
              <li>
                оставлять заявки в аварийно-диспетчерскую службу и следить за
                ходом ее выполнения
              </li>
            </ul>
            Читайте о ТСЖ "СУВОРОВ ПАРК" подробнее.


          </div>
          <div class="carousel-img col-md-6 ">
            <img
              src="http://suvorovpark.ru/upload/resize_cache/iblock/539/605_396_2/4b8544ee4f7dafd776ff8fb0a238998a.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
