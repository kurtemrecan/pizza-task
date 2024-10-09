import MainCard from './MainCard';
import './Cards.css';

export default function Cards() {
  return (
    <section className="card-section">
      <div className="chef-container">
        <div className="cards">
          <MainCard
            title={
              <>
                Özel
                <br />
                Lezzetus
              </>
            }
            className="card-1"
            headingLevel="h1"
            subtitle="Position: Absolute Acı Burger"
          />
          <div className="mini-cards">
            <MainCard
              title="Hackathlon Burger Menü"
              className="card-2"
              headingLevel="h3"
            />
            <MainCard
              title={
                <>
                  <span className="card-3-span">Çoooook</span> hızlı npm gibi
                  kurye
                </>
              }
              className="card-3"
              headingLevel="h3"
            />
          </div>
        </div>
        <div className="centered-text">
          <p className="red-text">en çok paketlenen menüler</p>
        </div>
        <div className="centered-text">
          <p className="black-text">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
      </div>
    </section>
  );
}
