import React from 'react';
//import PropTypes from 'prop-types';

export default class Step1 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div>
        <div
          class="consigncontainer"
          style={{ marginTop: '0px', marginLeft: '2px' }}
        >
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
            <br />
            <span>
              Un fonds de placement, dit aussi fonds d’investissement, est un
              véhicule qui permet à des épargnants de détenir collectivement des
              actifs financiers et en particulier :
              <br />
              <br />
              - des actions (titres de propriété représentant une fraction de
              capital d’une entreprise et donnant droit à un dividende qui varie
              en fonction des résultats de l’entreprise et qui peut être nul),
              <br />
              - des obligations (titres représentant une fraction de dette à
              plus d’un an d’une entreprise, d’un État ou organisme public, et
              assortis de la double obligation de verser une rémunération et
              d’être remboursés à leur échéance sauf cas de faillite),
              <br />
              - des titres monétaires (titres de même nature que les obligations
              mais à moins d’un an).
              <br />
              En regroupant les capitaux, le fonds de placement assure le
              partage des coûts mais aussi des avantages qui découlent du
              placement de sommes plus importantes, comme par exemple la
              possibilité de diversifier les placements et donc de mieux
              répartir les risques.
            </span>
            <br />
            <br />{' '}
            <span>
              Il existe différents types de fonds en fonction du profil et des
              besoins des épargnants.
            </span>
            <br />
            <br />
          </div>
        </div>
        <div class="gradient" />
        <div class="foryou" style={{ width: '708px' }}>
          <div class="allocex1" id="allocex1">
            <div class="consigncontainer">
              <div class="sequence">
                <div class="imgcontain horloge" />
                <div class="sequencetextcontainer">
                  <span class="sequencetitle">SIMULATEURS</span>
                  <br />
                  <div class="sequenceconsign">Durée : 5 min</div>
                </div>
              </div>
              <div class="consigne actiondrop1">
                <span class="titleblue">PROFILS D’INVESTISSEUR</span>
                <br />
                <span>
                  Déterminez votre profil d’investisseur en répondant aux
                  questions proposées dans le simulateur ci-dessous.
                  <br />
                </span>
                À la fin de la simulation, pensez à refermer la fenêtre ouverte
                pour revenir au parcours !
                <span />
                <br />
                <br />
              </div>
            </div>
            <div
              class="valider2"
              id="simul1b"
              onclick="simul1afunc()"
              style={{
                marginLeft: '60px',
                float: 'left',
                height: '300px',
                width: '260px',
                backgroundImage: `url('assets/img/simul1.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <div
              class="valider2"
              id="simul1a"
              onclick="simul1afunc()"
              style={{
                marginLeft: '60px',
                float: 'left',
                marginTop: '100px',
                marginBottom: '70px',
                padding: '15px 35px',
                fontFamily: 'Helvetica Neue LT Std 55 Roman'
              }}
            >
              démarrer la simulation{' '}
            </div>
          </div>
          <div class="allocex2" style={{ marginTop: '450px', clear: 'both' }}>
            <div class="consigncontainer">
              <div class="consigne actiondrop1">
                <span class="titleblue">ALLOCATION d'actifs</span>
                <br />
                <span>
                  Par allocation d'actifs, on entend la proportion d’actions,
                  d’obligations et de titres monétaires qui composent <br /> un
                  fonds. <br />
                  Pour connaître celle qui correspond à votre profil
                  d’investisseur, reportez ce dernier dans le simulateur <br />ci-dessous.<br />
                  En faisant varier votre durée de placement, vous verrez que
                  plus elle s’allonge, plus la part des actions et obligations
                  est importante.
                </span>
                <br />
                <br />
              </div>
              <div
                class="valider2"
                id="simul2b"
                onclick="simul2afunc()"
                style={{
                  marginLeft: '60px',
                  float: 'left',
                  height: '250px',
                  width: '260px',
                  backgroundImage: 'url("assets/img/simul2.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div
                class="valider2"
                id="simul2a"
                onclick="simul2afunc()"
                style={{
                  marginLeft: '60px',
                  float: 'left',
                  marginTop: '100px',
                  marginBottom: '70px',
                  padding: '15px 35px',
                  fontFamily: 'Helvetica Neue LT Std 55 Roman'
                }}
              >
                démarrer la simulation{' '}
              </div>
              <br />
              <br />
              <br />
              <div
                class="consigne"
                style={{ marginTop: '270px', clear: 'both' }}
              >
                L’allocation d’actifs qui vous est proposée dépend à la fois de
                votre propension à prendre ou à ne pas prendre de risque (profil
                d’investisseur) et de votre horizon de placement. Plus votre
                horizon est éloigné, plus votre capacité à prendre du risque est
                forte et vous pouvez donc investir une part plus importante de
                votre épargne en obligations et en actions ; n’ayant pas besoin
                de liquidités à brève échéance, vous n’êtes pas contraint de
                sécuriser vos placements pour éviter d’avoir à les vendre au
                plus mauvais moment, en cas de baisse brutale des marchés.
              </div>
            </div>
            <div class="allocex1" style={{ marginTop: '80px', clear: 'both' }}>
              <div class="gradient" />
              <div class="consigncontainer">
                <div class="sequence">
                  <div class="imgcontain" />
                  <div class="sequencetextcontainer">
                    <span class="sequencetitle">JEU DES DIAGRAMMES</span>
                    <br />
                    <div class="sequenceconsign">Durée : 3 min</div>
                  </div>
                </div>
                <div class="consigne actiondrop1">
                  <span class="titleblue">COMPOSITION D’UN FONDS</span>
                  <br />
                  <span>
                    Composez votre fonds selon l’allocation d’actifs qui vous a
                    été indiquée précédemment ou telle que vous l’imaginez, à
                    l’aide des boutons{' '}
                    <img
                      class="hand"
                      src="assets/img/soclearrow.png"
                      style={{
                        width: '30px',
                        height: '19px',
                        marginTop: '-25px',
                        marginLeft: '0px',
                        top: '6px'
                      }}
                      alt="hand"
                    />.
                  </span>
                  <br />
                  <br />
                  <span>
                    Au-delà des classes d’actifs « actions », « obligataire » et
                    « monétaire » abordées précédemment, un nouveau type d’actif
                    vous est proposé : les titres de l’entreprise.
                  </span>
                  <br />
                  <span>
                    Il s’agit des actions ou des obligations de votre entreprise
                    que vous pouvez acquérir dans le cadre d’opérations
                    d’actionnariat salarié qui seraient mises en place.
                  </span>
                  <br />
                  <br />
                  <span>
                    Vous pouvez composer votre fonds d’un ou plusieurs types
                    d’actifs à votre convenance.
                  </span>
                  <br />
                  <span>
                    Le pourcentage de 0 à 100% et par tranche de 10% que vous
                    affecterez à chacun, sera considéré comme la proportion que
                    vous souhaitez lui donner dans le fonds.
                  </span>
                  <iframe
                    title="step1-iframe-1"
                    style={{
                      display: 'block',
                      marginBottom: ' 0px',
                      border: 'none'
                    }}
                    width="708"
                    height="510"
                    src="etape4/iframe/pie2/index.html"
                    id="simulateur1"
                    scrolling="no"
                  />
                  <div
                    class="allocex1"
                    id="ex2"
                    style={{
                      display: 'block',
                      visibility: 'hidden',
                      height: '400px',
                      marginTop: '-90px'
                    }}
                  >
                    <div class="consigncontainer">
                      <div class="sequence">
                        <div class="consigne actiondrop1">
                          <span>
                            À votre avis, à quelle catégorie appartient le fonds
                            que vous avez composé ?
                          </span>
                          <span>Sélectionnez la bonne réponse et validez.</span>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div
                      class="form"
                      style={{ display: 'block', marginTop: '10px' }}
                      id="formMonetaire"
                    >
                      <div class="questioncontainer">
                        <div class="question" id="actionq1">
                          <button
                            class="buttonquestion"
                            id="actioncommq1"
                            onclick="questcommq1()"
                            onmouseover="infoshow1()"
                            onmouseout="infohide1()"
                          >
                            Fonds actions
                          </button>
                        </div>
                        <div class="question" id="actionq5">
                          <button
                            class="buttonquestion"
                            id="actioncommq5"
                            onclick="questcommq5()"
                            onmouseover="infoshow5()"
                            onmouseout="infohide5()"
                          >
                            Fonds obligataire
                          </button>
                        </div>
                        <div class="question" id="actionq2">
                          <button
                            class="buttonquestion"
                            id="actioncommq2"
                            onclick="questcommq2()"
                            onmouseover="infoshow2()"
                            onmouseout="infohide2()"
                          >
                            Fonds monétaire
                          </button>
                        </div>
                        <div class="question" id="actionq3">
                          <button
                            class="buttonquestion"
                            id="actioncommq3"
                            onclick="questcommq3()"
                            onmouseover="infoshow3()"
                            onmouseout="infohide3()"
                          >
                            Fonds de type mixte
                          </button>
                        </div>
                        <div class="question" id="actionq4">
                          <button
                            class="buttonquestion"
                            id="actioncommq4"
                            onclick="questcommq4()"
                            onmouseover="infoshow4()"
                            onmouseout="infohide4()"
                          >
                            Fonds en titres de l’entreprise
                          </button>
                        </div>
                        <div
                          class="valider"
                          id="actionvalid2"
                          onclick="checkrep4()"
                        >
                          Valider
                        </div>
                        <div class="containerinfo2">
                          <div
                            id="infobulle2"
                            style={{ display: 'none', width: '300px' }}
                          >
                            <div>
                              <span class="rubriquetitle">
                                FONDS EN TITRE DE L'ENTREPRISE{' '}
                              </span>
                              <br />
                              <span
                                class="glossary"
                                style={{ fontSize: '13px' }}
                              >
                                Cf. Glossaire
                              </span>
                              <br />Pour être classifié « fonds en titres de
                              l’entreprise » par l’AMF, il faut être composé
                              d’au plus un tiers en titres de l’entreprise
                              (fonds diversifié en titres de l’entreprise) ou
                              d’au moins un tiers en titres de l’entreprise
                              (fonds d’actionnariat salarié), le solde pouvant
                              être indifféremment constitué d’actions,
                              d’obligations ou de monétaire.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="consigncontainer" style={{ marginTop: '50px' }}>
                    <div class="consigne">
                      <span class="titleblue">SYNTHÈSE </span>
                      <br />
                      <span>
                        L’AMF classifie les fonds à partir de la classe d’actifs
                        la plus risquée présente dans le fonds, excepté pour les
                        fonds monétaires qui sont définis par rapport à la durée
                        des titres qui les composent.
                        <br />
                        À compter du 1ier janvier 2018, les classifications «
                        fonds actions » et « fonds obligataire » deviennent
                        optionnelles.
                      </span>
                    </div>
                  </div>
                  <div
                    class="allocex1"
                    style={{ marginTop: '0px', clear: 'both' }}
                  >
                    <div class="gradient" />
                    <div class="consigncontainer">
                      <div class="imgcontain" />
                      <div class="sequencetextcontainer">
                        <span class="sequencetitle">EN SAVOIR PLUS</span>
                        <br />
                        <div class="sequenceconsign">
                          Durée : 2.39 min à 3.49 min
                        </div>
                      </div>
                    </div>
                    <div class="consigne actiondrop1">
                      <span class="titleblue">
                        AUTRES CLASSIFICATIONS DES FONDS PAR L’AMF
                      </span>
                      <br />
                      <span>
                        Pour découvrir les autres modes de classification,
                        sélectionnez les vidéos ci-dessous.
                      </span>
                      <br />
                      <br />
                      <span class="sequencetitle">
                        PRINCIPALES FORMES JURIQUES DES FONDS D’INVESTISSEMENT
                      </span>
                      <br />
                      <br />
                      <span>
                        L’Organisme de Placement Collectif (OPC) est un produit
                        de placement qui permet à plusieurs investisseurs
                        (particuliers et/ou professionnels) de détenir en commun
                        un portefeuille collectif. Sa gestion est assurée par
                        une société de gestion d’actifs selon une stratégie
                        d’investissement connue à l’avance par les
                        investisseurs. Il permet à l’investisseur d’avoir accès
                        à une gestion diversifiée que ses montants de placement
                        ou sa connaissance des marchés financiers ne lui
                        permettraient pas de réaliser à titre individuel.
                      </span>
                      <br />
                      <br />
                      <span>
                        La gestion collective s’oppose à la gestion directe ou
                        individuelle pour laquelle l’investisseur (personne
                        physique ou morale) prend lui-même les décisions d’achat
                        et de vente des titres (actions, obligations, titres
                        monétaires…) via un compte-titres ou un plan d’épargne
                        en actions (PEA). De nombreux établissements financiers
                        (banques, sociétés de gestion, compagnies d’assurance)
                        proposent des OPC.
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
                      marginBottom: '50px',
                      margin: '0 auto'
                    }}
                  >
                    <iframe
                      title="step1-iframe-2"
                      src="https://player.vimeo.com/video/200964809"
                      width="640"
                      height="365"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style={{ marginLeft: '5px', marginTop: '0px' }}
                    />
                  </div>
                  <br />
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
                    <span class="sequencetitle">
                      PRINCIPALES THÉMATIQUES DES FONDS D’INVESTISSEMENT
                    </span>
                    <br />
                    <br />
                  </div>
                  <div
                    style={{
                      width: '655px',
                      height: '380px',
                      backgroundColor: 'white',
                      padding: '2px',
                      paddingTop: '7px',
                      paddingLeft: '-2px',
                      marginBottom: '50px',
                      margin: '0 auto'
                    }}
                  >
                    <iframe
                      title="step1-iframe-3"
                      src="https://player.vimeo.com/video/200964801"
                      width="640"
                      height="365"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style={{ marginLeft: '5px', marginTop: '0px' }}
                    />
                  </div>
                  <br />
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
                    <span class="sequencetitle">
                      PRINCIPALES GARANTIES DES FONDS D’INVESTISSEMENT
                    </span>
                    <br />
                    <br />
                  </div>
                  <div
                    style={{
                      width: '655px',
                      height: '380px',
                      backgroundColor: 'white',
                      padding: '2px',
                      paddingTop: '7px',
                      paddingLeft: '-2px',
                      marginBottom: '50px',
                      margin: '0 auto'
                    }}
                  >
                    <iframe
                      title="step1-iframe-4"
                      src="https://player.vimeo.com/video/200964762"
                      width="640"
                      height="365"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style={{ marginLeft: '5px', marginTop: '0px' }}
                    />
                  </div>
                  <br /> <br />
                  <div class="consigncontainer">
                    <div class="gradient" />

                    <div class="sequence">
                      <div class="imgcontain horloge" />
                      <div class="sequencetextcontainer">
                        <span class="sequencetitle">ÉCHELLE DE RISQUE</span>
                        <br />
                        <div class="sequenceconsign">Durée : 5 min</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="iframecontainer actiondrop2"
                    style={{
                      display: 'block',
                      marginTop: '-20px',
                      width: '708px',
                      height: '600px'
                    }}
                  >
                    <div class="consigncontainer">
                      <div class="sequence" />
                      <br />
                      <div class="consigne">
                        <span class="titleblue">RISQUE DES FONDS</span>
                        <br />

                        <span>
                          Classez sur l’axe horizontal, « de moins à plus de
                          risque », les fonds ci-dessous à l’aide du bouton<img
                            class="hand"
                            src="assets/img/hand.png"
                            alt="hand"
                          />{' '}
                          et en fonction de l’évolution plus ou moins régulière
                          de leur performance, puis validez.
                        </span>
                      </div>
                    </div>
                    <iframe
                      title="step1-iframe-5"
                      src="../etape3/etape3/horizRiskDragnDrop/drop.html"
                      width="715"
                      height="470"
                      frameborder="0"
                      data-item1-content="item1"
                      data-item1-position="1"
                      data-item1-draggable="true"
                      data-item1-html="../carte/special4FondActaB/index"
                      class="iframedraganddrop actiondrop2"
                      data-item2-content="item2"
                      data-item2-position="2"
                      data-item2-draggable="true"
                      data-item2-html="../carte/special4FondObaB/index"
                      data-item3-content="item3"
                      data-item3-position="3"
                      data-item3-draggable="true"
                      data-item3-html="../carte/special4FondMonA/index"
                      data-drop-num="3"
                      data-rep-or="item3item2item1"
                      bonne-rep-obl="true"
                      ctresize="ok"
                      id="4step"
                      scrolling="no"
                      data-scroll="3680px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Step1.propTypes = {};
