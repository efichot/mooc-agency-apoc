import React from 'react';
//import PropTypes from 'prop-types';

export default class Step3 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div>
        <div class="consigncontainer" style={{ float: 'left' }}>
          <div class="consigncontainer">
            <div
              class="sequence"
              style={{
                marginLeft: '27px',
                position: 'relative',
                marginTop: '35px'
              }}
            >
              <div class="Bigtitle">
                <span
                  style={{
                    fontSize: '35px',
                    fontWeight: 'normal',
                    textTransform: 'uppercase',
                    color: '#000000'
                  }}
                >
                  RISQUE / PERFORMANCE
                </span>
              </div>
            </div>
          </div>
          <div class="consigncontainer" style={{ marginTop: '70px' }}>
            <div class="sequence" style={{ marginLeft: '9px' }}>
              <div
                class="imgcontaineye view"
                style={{ width: '35px', position: 'relative', top: '8px' }}
              />
              <div class="sequencetextcontainer">
                <span class="sequencetitle">VIDÉO</span>
                <br />
                <br />
                <div class="sequenceconsign">Durée :' 0'.38 min</div>
              </div>
            </div>
            <br />
            <div
              class="consigne"
              style={{
                marginBottom: '0px',
                lineHeight: '15px',
                position: 'relative',
                top: '-7px'
              }}
            >
              <span class="titlebl">VIDÉO INTRODUCTIVE </span>
              <br />
              <span>
                {' '}
                Découvrez l’étape 3 en cliquant sur la vidéo ci-dessous.
              </span>
              <br />
              <br />
            </div>
          </div>
          <div
            style={{
              width: '655px',
              height: '380px',
              backgroundColor: 'white',
              padding: '2px',
              paddingTop: '7px',
              paddingLeft: '-2px',
              marginLeft: '25px',
              marginBottom: '50px'
            }}
          >
            <iframe
              title="iframe-step3-1"
              src="https://player.vimeo.com/video/259824604"
              width="640"
              height="365"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              style={{ marginLeft: '5px', marginTop: '0px' }}
            />
          </div>
          <div class="consigncontainer" style={{ marginTop: '0px' }}>
            <div
              class="consigne"
              style={{ marginBottom: '0px', position: 'relative', top: '-7px' }}
            >
              <span>
                Le document de reporting publié par la société de gestion rend
                compte de la façon dont le fonds concerné a été géré à court,
                moyen et long terme. Pour commenter performance et risque du
                fonds, le gérant s’appuie sur les indicateurs que contient la
                fiche de reporting.{' '}
              </span>
              <br />
              <br />
            </div>
            <div class="consigne">
              <span>
                {' '}
                Au cours de l’étape 2, vous avez évalué les fonds actions,
                obligataires/monétaires et de type mixte, à partir des données
                et indicateurs extraits de leur fiche de reporting.
                <br />Choisissez la catégorie de fonds sur laquelle vous
                souhaitez travailler et un commentaire de reporting à compléter
                vous sera proposé.
              </span>
            </div>
            <div
              style={{
                width: '708px',
                height: '300px',
                marginLeft: '30px',
                backgroundColor: '#EFEFEF',
                display: 'block'
              }}
              id="men"
            >
              <iframe
                title="iframe-step3-2"
                style={{ display: 'block', border: 'none' }}
                width="709"
                height="300"
                src="/etape7/etape7/menu.html"
                id="frame1"
                align="middle"
                scrolling="no"
              />
            </div>
            <div id="scrollPoint1" style={{ width: '1px', height: '1px' }} />

            <iframe
              title="iframe-step3-3"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="663"
              src="/etape7/etape7/quiz1.html"
              id="acta1"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-4"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="400"
              src="/etape7/etape7/quiz1b.html"
              id="acta1b"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-5"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="603"
              src="/etape7/etape7/quiz2.html"
              id="acta2"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-6"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz2b.html"
              id="acta2b"
              align="middle"
              class="acta"
              scrolling="no"
            />

            <iframe
              title="iframe-step3-7"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="650"
              src="/etape7/etape7/quiz3.html"
              id="acta3"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-8"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz3b.html"
              id="acta3b"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-9"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz4.html"
              id="acta4"
              align="middle"
              class="acta"
              scrolling="no"
            />

            <iframe
              title="iframe-step3-10"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="400"
              src="/etape7/etape7/quiz4b.html"
              id="acta4b"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-11"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="600"
              src="/etape7/etape7/quiz5.html"
              id="acta5"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-12"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz5b.html"
              id="acta5b"
              align="middle"
              class="acta"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-13"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz6.html"
              id="oba1"
              align="middle"
              class="oba"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-14"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz6b.html"
              id="oba1b"
              align="middle"
              class="oba"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-15"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz7.html"
              id="oba2"
              align="middle"
              class="oba"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-16"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz7b.html"
              id="oba2b"
              align="middle"
              class="oba"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-17"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="600"
              src="/etape7/etape7/quiz8.html"
              id="mona1"
              align="middle"
              class="mona"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-18"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="400"
              src="/etape7/etape7/quiz8b.html"
              id="mona1b"
              align="middle"
              class="mona"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-19"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="600"
              src="/etape7/etape7/quiz9.html"
              id="mona2"
              align="middle"
              class="mona"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-20"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz9b.html"
              id="mona2b"
              align="middle"
              class="mona"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-21"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz10.html"
              id="diva1"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-22"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="350"
              src="/etape7/etape7/quiz10b.html"
              id="diva1b"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-23"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="700"
              src="/etape7/etape7/quiz11.html"
              id="diva2"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-24"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="300"
              src="/etape7/etape7/quiz11b.html"
              id="diva2b"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-25"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="750"
              src="/etape7/etape7/quiz12.html"
              id="diva3"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-26"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz12b.html"
              id="diva3b"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-27"
              style={{
                display: 'none',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none'
              }}
              width="709"
              height="800"
              src="/etape7/etape7/quiz13.html"
              id="diva4"
              align="middle"
              class="diva"
              scrolling="no"
            />
            <iframe
              title="iframe-step3-28"
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '0px',
                border: 'none',
                visibility: 'hidden'
              }}
              width="709"
              height="500"
              src="/etape7/etape7/quiz13b.html"
              id="diva4b"
              align="middle"
              class="diva"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    );
  }
}

Step3.propTypes = {};
