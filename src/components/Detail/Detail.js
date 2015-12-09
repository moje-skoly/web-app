import React, {Component, PropTypes} from 'react';
import SchoolDetail from '../SchoolDetail/SchoolDetail';
import { connect } from 'redux-react';
import {} from '../../redux/modules/';

@connect(
  state => ({
    school: state.detail
  })
)
export default class DetailPage extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    fetchSchool: PropTypes.function.isRequired,
    school: PropTypes.object
  };

  static state = { school: null, isLoaded: false };

  componentDidMount = () => {
    const { school } = this.props;
    if (school !== null) {
      this.setState({ school, isLoaded: true }); // the school is already loaded
    } else {
      // @todo: fetch school
    }
  };

  render() {
    const styles = require('./DetailPage.less');
    const { school, isLoaded } = this.state;
    return (
      <div className={styles.detailPage}>
        {isLoaded && <SchoolDetail school={school} />}
        {!isLoaded && 'Loading...'}
      </div>
    );
  }
}
