import React from "react";
import "../styles/Content.css";
import Seperator from "../components/Seperator";

const Content = () => {
  return (
    <div className="container-content">
      <h1 className="content-title"> Porsche 964 Turbo </h1>
      <h3 className="content-text">
        Porsche 964, 1989-1993 yılları arasında satılan Porsche 911'lerin
        fabrika içi kodudur.
      </h3>
      <h4 className="content-user">porsche964</h4>
      <Seperator />
      <div className="static-content-one">
        <h1 className="content-title"> MongoDB Atlas </h1>
        <h3 className="content-text">
          MongoDB Atlas, bulutta çalışan bir NoSQL veritabanı servisidir.
          MongoDB'nin tam yönetilen bir sürümüdür. Kullanıcılar, veritabanı
          işlemlerini kolayca yönetebilir, ölçeklendirebilir ve güvenli bir
          şekilde veri saklayabilirler. Atlas, AWS, Google Cloud ve Azure gibi
          büyük bulut servis sağlayıcılarıyla entegre şekilde çalışır.
          Kullanıcılar, küresel veritabanı dağılımlarını tek bir tıklamayla
          gerçekleştirebilirler. Atlas, veritabanı yönetimini basitleştiren
          otomatik yedekleme, güvenlik ve performans izleme özelliklerine
          sahiptir.
        </h3>
        <h4 className="content-user">emirhancopoglu</h4>
        <Seperator />
      </div>
      <div className="static-content-two">
        <h1 className="content-title"> Hello World! </h1>
        <h3 className="content-text">
          Bu React ile yazdığım ilk frontend sayfam.
        </h3>
        <h4 className="content-user">emirhancopoglu</h4>
      </div>
    </div>
  );
};

export default Content;
