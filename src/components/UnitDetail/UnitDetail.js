import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MetaData from '../../containers/MetaData/MetaData';
import styles from './UnitDetail.less';

const UnitDetail = ({
  schoolMetadata,
  unit: {
    unitType,
    metadata,
    sections
  }
}) => (
  <div className={styles.unit}>
    <h3 className={styles.unitTitle}>{unitType}</h3>
    <div className={styles.body}>
      {metadata
        && <MetaData comparison={schoolMetadata} data={metadata} />}

      {sections
        && sections.map((section, sectionId) => (
        <div key={sectionId}>
          <h4 className={styles.sectionTitle}>{section.title}</h4>
            {section.information.map((info, infoId) => {
              const { key, value } = info;
              return (
                <Row key={infoId} className={styles.questionRow}>
                  <Col sm={6}><p className={styles.question}>{key}{':'}</p></Col>
                  <Col sm={6}><p className={styles.answer}>{value}</p></Col>
                </Row>
              );
            })}
        </div>
      ))}
    </div>
  </div>
);

export default UnitDetail;
