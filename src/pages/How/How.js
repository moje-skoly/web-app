import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const How = () => {
  const styles = require('./How.less');
  return (
    <Grid>
      <Row>
        <Col md={8} mdOffset={2} xs={12}>
          <div className={styles.how}>
            <h1><strong>Manifest</strong></h1>
            <h3>Naše hodnoty</h3>
            <hr/>
            <ol>
              <li>Naším cílem je <strong>zvyšovat povědomí rodičů</strong> o kvalitní škole v jejich okolí.</li>
              <li>Věříme, že každé dítě <strong>má právo</strong> dostat <strong>kvalitní vzdělání</strong> ve své nejbližší škole.</li>
              <li>Každé dítě má ve škole <strong>zažívat radost</strong> a <strong>rozvíjet svůj potenciál</strong>.</li>
              <li>Hlásíme se k iniciativě <a href="http://uspechzaka.cz/" target="_blank">Úspěch pro každého žáka.</a></li>
              <li>Chceme, aby každá škola hledala cesty k tomu, jak děti naučit přemýšlet a učit se.</li>
              <li>Za standard považujeme pedagogiku, která vychází z toho, jak se lidský mozek učí a co je potřeba pro uplatnění v současném světě: <strong>spolupráce, komunikace, tvořivost, řešení problémů a občanská angažovanost.</strong></li>
              <li>Fandíme aktivnímu úsilí rodičů o zlepšování výuky a prostředí na své spádové škole prostřednictvím školských rad, jednání s učiteli, vedením školy, případně zástupci městské části, která školu zřizuje.</li>
            </ol>
            <br/>
            <h3>Odmítáme</h3>
            <hr/>
            <ul>
              <li>Odmítáme primárně porovnávat školy mezi sebou a vytvářet žebříčky.</li>
              <li>Odmítáme zvyšovat sociální nerovnosti tím, že se budou děti vzdělaných a movitých rodičů koncentrovat na vybraných školách a děti, které se narodily v chudém prostředí budou v těch zbývajících.</li>
              <li>Odmítáme kritizovat a vytvářet negativní atmosféru v českém školství, věříme v pozitivní přístup k řešení problémů skrze občanskou anganžovanost.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default How;
