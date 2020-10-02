import React from 'react';
import { Link } from 'react-router-dom';

const GirasolPage = () => {
  return (
    <React.Fragment>
      <div className="blog-container">
        <div className="blog-title">
          <h1>Girasol City</h1>
        </div>
        <div className="separator"></div>
      </div>

      <div className="girasol-container">
        <div className="section-separator">
          <h2>Bienvenidos! Miembros de Girasol City</h2>
          <p>En esta página podrán encontrar información de nuestro pueblo:</p>
        </div>

        <div className="section-separator">
          <h3 id="reglamento">Reglamento:</h3>
          <br></br>

          <p>
            En cada festival de fin de semana se requiere la debida
            participación de todos los miembros del pueblo (a excepción de que
            AVISE que NO podrá participar por cualquier motivo personal para así
            poder organizarnos y distribuirnos las copas que faltarían por su
            ausencia en el festival).
          </p>
        </div>

        <div className="girasol-indice">
          <h2>Indice:</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="#minimo">Minimo</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#recoleccion">
                    Recolección de diamantes para el tesoro
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#beneficios">Beneficios</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#conseguir-diamantes">
                    Cómo conseguir diamantes para el tesoro
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#reclutamiento">Reclutamiento</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#recoleccion">
                    Recolección de diamantes para el tesoro
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#rifa-regalos">Rifa de regalos</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="#rifa-maquinas">Rifa de Maquinas</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="#especias">Compra de especias</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section-separator">
          <h3 id="minimo">Minimo de Copas:</h3>
          <p>🏆20.000 Para todos los niveles</p>
          <p>
            Este sería el mínimo de puntos por el nivel de tu café. Es
            obligatorio que con cada festival se haga por lo menos el mínimo de
            copas 🏆 ya que si no se cumple, al terminar el festival, tendrás
            una infracción, y la multa será la mitad de tus diamantes ganados en
            el festival.
          </p>
          <p>
            Queda en ti hacer más del mínimo para hacer obtener una mayor
            recompensa en diamantes al finalizar el festival.
          </p>
        </div>

        <div className="section-separator">
          <h3 id="recoleccion">Recolección de diamantes para el tesoro:</h3>
          <p>
            En cada festival de fin de semana se descontará diamantes de tu
            premio de la siguiente manera:{' '}
          </p>
          <p>Liga Miel: 10 💎 Diamantes</p>
          <p>Liga Diamante: 50 💎 Diamantes</p>
          <p>
            Esto se hace con el fin de mantener recursos en el tesoro del pueblo
            para los sorteos de máquinas de café, recompensa por donación a la
            tesorería (RDT), cualquier ayuda que se requiera para completar
            tareas en festivales.{' '}
          </p>
        </div>

        <div className="section-separator">
          <h3 id="beneficios">Beneficios:</h3>
          <p>Premio de diamantes por donación a la tesorería del pueblo:</p>
          <p>Donado a la tesorería Recompensa:</p>
          <p>Por 400 💎 100💎</p>
          <p>Por 800 💎 200💎</p>
          <p>Por 1200💎 300💎</p>
          <p>Por 1600💎 100💎</p>

          <br></br>
          <p>
            Al llegar a 1600 en donaciones la recompensa se reestablece en 100,
            empezando de nuevo.
          </p>
          <br></br>
          <h4 id="reclamar-recompensa">¿Como reclamar tu recompensa?</h4>
          <p>
            Para poder reclamar tu recompensa por donación a la tesorería
            deberás tener un control de tus metas de donaciones ¿cómo? Enviando
            al grupo de WhatsApp un screenshot (captura de pantalla) donde se
            vea que has llegado a tu meta; al verificar tu meta se te donará y
            esto será reportado en el chat por el líder o colíderes afirmando
            haberte donado “equis” cantidad de diamantes para que así tengas un
            control de ello.{' '}
          </p>
          <p>
            Si no reclamas tu recompensa al llegar a tu siguiente meta y te
            saltas esta, no podrás reclamarla después. Solo podrás reclamar una
            sola recompensa por meta alcanzada.
          </p>
        </div>

        <div className="section-separator">
          <h3 id="conseguir-diamantes">
            ¿Cómo conseguir diamantes para la tesorería?{' '}
          </h3>
          <p>
            Puedes ver todos los días 10 anuncios donde te darán un diamanté’s
            por cada video que veas, esos 10 diamantes los donas a la tesorería.
            Si ves 10 videos todos los días al mes serían: 10 💎 x 30 días al
            mes = 300 diamantes al mes.
          </p>
          <p>
            Otra forma es donando especias de los regalos simplezas que lleves
            acumulados, por ejemplo:{' '}
          </p>
          <p>
            Tienes 30 regalos simples acumulados, puedes donar un regalo simple
            por día ya que Ana (dependiendo del nivel donde la tengas [si está
            al nivel 5 o más da 2 regalos simples por día] cada regalo simple
            varía la cantidad de especias, pero el aproximado son 5 especias
            (2💎 cada anís y 1💎 cada pétalo de rosa).{' '}
          </p>
        </div>

        <div className="section-separator">
          <h3 id="reclutamiento">Reclutamiento:</h3>
          <p>
            Por cada persona reclutada que se mantenga y participe en los
            festivales apoyando al pueblo con su buena cantidad de puntos.
            También debe ser alguien de nivel 15 en adelante. Al reclutador se
            le dará como recompensa o premio 30💎 (repito: por persona si cumple
            con lo ya especificado).{' '}
          </p>
          <p>
            Esto se propone con el fin de animarlos a encontrar personas para
            llenar al pueblo y tener más puntos en los festivales, para que así
            sea más fácil ganar.
          </p>
        </div>

        <div className="section-separator">
          <h3 id="rifa-regalos">RIFA DE REGALOS:</h3>
          <p>
            En cada festival de fin de semana se rifará un regalo (azul porque
            es el estante desbloqueado hasta el momento). El ganador que será
            escogido aleatoriamente en una ruleta, se llevará el famoso regalo
          </p>
          <p>
            Pero para el siguiente fin de semana, este ganador no podrá
            participar en la rifa, para así darle oportunidad a los demás de
            ganar en ese festival. Para poder participar en la rifa, se debe
            hacer el mínimo de copas obligatorio (20.000 🏆).{' '}
          </p>
        </div>

        <div className="section-separator">
          <h3 id="rifa-maquinas">
            RIFA DE MÁQUINAS DE CAFÉ: (en los súper descuentos de temporada)
          </h3>
          <p>
            Para participar en la rifa, se debe hacer más del mínimo de copas
            obligatorio (20.000), para ser exactos: 23.000 es lo mínimo para
            ingresar a la rifa. Quienes no hagan esta cantidad no podrán
            participar (no habrá excepciones, así hagas 22.999 no estás
            participando).
          </p>
          <br></br>
          <p>
            Podrás repetir tu nombre en la rifa teniendo más oportunidad de
            ganar, cumpliendo con la cantidad requerida para exigir dos veces o
            más tu nombre en la rifa, cuantas más copas hagas más oportunidad
            tienes de repetir tu nombre varias veces en la ruleta. Un ejemplo de
            esto sería:
          </p>
          <p>2 veces tu nombre 28.000 copas</p>
          <p>3 veces tu nombre 35.000 copas</p>
          <p>4 veces tu nombre 44.000 copas</p>
          <p>5 veces tu nombre 56.000 copas</p>
          <p>6 veces tu nombre 70.000 copas</p>

          <br></br>
          <h4>Premio al ganador:</h4>
          <p>
            Dos maquinas de café que estén en una sola oferta, por ejemplo: 2
            máquinas de café con estilo de 3 tazas o 2 máquinas de café con
            estilo de 3 y 2 tazas.{' '}
          </p>
        </div>

        <div className="section-separator">
          <h3 id="especias">Ayuda con especias:</h3>
          <p>
            Todas las especias doradas y azules quedan a mitad de precio de su
            valor en la tienda.
          </p>
          <p>
            Se paga depositando los diamantes en la tesorería enviando un
            capture de antes y después.{' '}
          </p>
          <p>
            Es importante revisar que haya existencia de las especias que se
            vayan a comprar.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GirasolPage;
