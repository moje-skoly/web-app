import React from 'react';
import MetaData from '../../containers/MetaData/MetaData';
import styles from './UnitDetail.less';

const UnitDetail = ({
  schoolMetadata,
  unit: {
    unitType,
    metadata,
    sections
  }
}) => {
  const getUnitType = (type) => {
    switch (type) {
    case 'materska_skola':
      return 'Mateřská škola';
    case 'zakladni_skola':
      return 'Základní škola';
    case 'stredni_skola':
      return 'Střední škola';
    default:
      return type + 'original';
    }
  };

  return (
    <div className={styles.unit}>
      <h3 className={styles.unitTitle}>Hello {getUnitType(unitType)}</h3>
      <div className={styles.body}>
        {metadata
          && <MetaData comparison={schoolMetadata} data={metadata} />}

        {sections
          && sections.map((section, sectionId) => (
          <div key={sectionId}>
            <h4 className={styles.sectionTitle}>{section.title}</h4>
            <table>
              <tbody>
                {section.information.map((info, infoId) => {
                  const { key, value } = info;
                  return (
                    <tr key={infoId}>
                      <th className={styles.question}>{key}{':'}</th>
                      <td className={styles.answer}>{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitDetail;
