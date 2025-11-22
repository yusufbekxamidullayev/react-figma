import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Portfolios from "./components/portfolios/Portfolios"
import Mode from "./components/mode/Mode"
import "../src/App.css"
import { Pagination } from "swiper/modules"
import { BsPeopleFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import ReactTabs from "./components/react-tabs/ReactTabs"


function App() {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <main>
        <section>
          <Portfolios />
        </section>
        <section>
          <div className="container">
            <h1 className="about-name">О компании <span className="about-name-span">LEANGROUP</span></h1>
            <div className="about-card">
              <div className="about-img">
                <img className="about-image" src="https://www.leangroup.com/_next/image?url=https%3A%2F%2Fwebapi.leangroup.com%2Fwp-content%2Fuploads%2F2025%2F08%2Fa40f29300fe2eb06e9ea0853530e10375125bff3-scaled.jpg&w=3840&q=75" alt="" />
              </div>
              <div>
                <p className="about-desc1">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и <br /> на сегодняшний день является ведущей компанией по производству <br /> ламинатных и экструзионных туб.</p>
                <p className="about-desc2">Имея две технологии – для производства ламинатных и <br /> экструзионных туб, мы предлагаем вам широкий спектр <br /> возможностей. Большим преимуществом является собственный<br /> печатный цех в ламинате и in-line печать в экструзии с возможностью <br /> различных дополнительных опций декора. Особое внимание <br /> уделяется работе с поставщиками для контроля и поддержания <br /> качества производимой нами продукции.</p>
                <p className="about-desc3">С января 2018 года компания стала членом Европейской Ассоциации <br /> производителей туб (ETMA), что подтверждает сильную позицию <br /> бренда и на рынке Европы. </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="about-name">Качество продукции подтверждают <span className="about-name-span">сертификаты</span></h1>
            <div className="about-futures">
              <Mode />
            </div>

          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="about-name">Наша <span className="about-name-span">продукция</span></h1>
            {/* <div className="our-btns">
              <button className="our-btn">Ламинатные тубы</button>
              <button className="our-btn">Экструзионные тубы</button>
              <button className="our-btn">Другая упаковка</button>
            </div>
            <div className="our-imagess">
              <div className="our-images">
                <img className="our-img" src="https://lean-group-tau.vercel.app/product-1.png" alt="" />
              </div>
              <div className="our-images">
                <img src="https://lean-group-tau.vercel.app/product-2.png" alt="" />
              </div>
              <div className="our-images">
                <img src="https://lean-group-tau.vercel.app/product-3.png" alt="" />
              </div>
              <div className="our-images">
                <img src="https://lean-group-tau.vercel.app/product-4.png" alt="" />
              </div>
              <div className="our-images">
                <img src="https://lean-group-tau.vercel.app/product-5.png" alt="" />
              </div>
            </div> */}
            <ReactTabs/>
            <div className="our-buttons">
              <button className="our-button">
                Перейти в каталог
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div
              className="banner banner-bg"
              role="region"
              aria-label="Promo banner with contact form"
            >
              <div className="left">
                <h1 className="heading">
                  Получить подробную <span className="accent">информацию</span>
                </h1>
                <p className="sub">
                  Просто заполните форму, наш менеджер свяжется <br /> с вами в ближайшее время
                </p>

                <form className="form" onSubmit={(e) => { e.preventDefault(); alert("Форма отправлена!"); }}>
                  <div className="formm">
                    <div className="form1">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="icon"><BsPeopleFill /></div>
                        <input className="input" type="text" placeholder="Ваше имя" required />
                      </div>
                    </div>
                    <div className="form1">
                      <div className="phone" style={{ display: "flex", alignItems: "center" }}>
                        <div className="icon"><FaPhoneAlt /></div>
                        <input className="input" type="tel" placeholder="+375 (29) 0000000" required />
                      </div>
                    </div>
                  </div>


                  <div className="form2">
                    <textarea className="input2" placeholder="Комментарий"></textarea>
                  </div>

                  <div className="cta-row">
                    <button className="btn" type="submit">Получить информацию</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="group-name">Наша <span className="group-name-span">команда</span></h1>
            <div className="group-cards">
              <div className="group-card">
                <div className="group-image">
                  <img className="group-img" src="https://lean-group-tau.vercel.app/staff-1.png" alt="" />
                </div>
                <div>
                  <p className="group-page">Войнич Дарья</p>
                  <p className="group-desc">Заместитель директора по <br /> продажам</p>
                  <p className="group-phone">+375 (17) 270-53-77 (317)</p>
                </div>
              </div>
              <div className="group-card">
                <div className="group-image">
                  <img className="group-img" src="https://lean-group-tau.vercel.app/staff-2.png" alt="" />
                </div>
                <div>
                  <p className="group-page">Войнич Дарья</p>
                  <p className="group-desc">Заместитель директора по <br /> продажам</p>
                  <p className="group-phone">+375 (17) 270-53-77 (317) <br />  +375 29 112-73-48</p>
                  <p className="group-email">k.melnichenko@leangroup.by</p>
                </div>
              </div>
              <div className="group-card">
                <div className="group-image">
                  <img className="group-img" src="https://lean-group-tau.vercel.app/staff-3.png" alt="" />
                </div>
                <div>
                  <p className="group-page">Войнич Дарья</p>
                  <p className="group-desc">Заместитель директора по <br /> продажам</p>
                  <p className="group-phone">+375 (17) 270-53-77 (317) <br /> +375 29 360-32-26</p>
                  <p className="group-email">dmitrochenko@leangroup.by</p>
                </div>
              </div>
              <div className="group-card">
                <div className="group-image">
                  <img className="group-img" src="https://lean-group-tau.vercel.app/staff-4.png" alt="" />
                </div>
                <div>
                  <p className="group-page">Войнич Дарья</p>
                  <p className="group-desc">Заместитель директора по <br /> продажам</p>
                  <p className="group-phone">+375 (17) 270-53-77 (317) <br /> +375 44 764-16-28</p>
                  <p className="group-email">j.antuh@leangroup.by</p>
                </div>
              </div>
              <div className="group-card">
                <div className="group-image">
                  <img className="group-img" src="https://lean-group-tau.vercel.app/staff-5.png" alt="" />
                </div>
                <div>
                  <p className="group-page">Войнич Дарья</p>
                  <p className="group-desc">Заместитель директора по <br /> продажам</p>
                  <p className="group-phone">+375 (17) 270-53-77 (317) <br /> +375 29 329-34-03</p>
                  <p className="group-email">e.misnik@leangroup.by</p>
                </div>
              </div>
            </div>
            <div className="our-buttons">
              <button className="our-button">
                Наша команда
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="new-name">Новости</h1>
            <div className="new-cards">
              <div>
                <div>
                  <img className="new-img" src="https://lean-group-tau.vercel.app/news-1.png" alt="" />
                </div>
                <div>
                  <p className="new-page">28.01.2022</p>
                  <p className="new-desc">"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
              </div>
              <div>
                <div>
                  <img className="new-img2" src="https://lean-group-tau.vercel.app/news-2.png" alt="" />
                </div>
                <div>
                  <p className="new-page">21.01.2022</p>
                  <p className="new-desc">"ЛеанГрупп" серебряный призер <br /> EcoVadis!</p>
                </div>
              </div>
              <div>
                <div>
                  <img className="new-img3" src="https://lean-group-tau.vercel.app/news-3.png" alt="" />
                </div>
                <div>
                  <p className="new-page">16.12.2021</p>
                  <p className="new-desc">Туба, как вид упаковки</p>
                </div>
              </div>
            </div>
            <div className="our-buttons">
              <button className="our-button">
                Все новости
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App