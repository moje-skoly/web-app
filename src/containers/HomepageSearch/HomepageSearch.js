import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

export default class HomepageSarch extends Component {

    state = {
        loc: '',
        type: 'Základní škola',
        canSearch: false
    };

    changeLoc = (event) => {
        this.setState({
            loc: event.target.value,
            canSearch: event.target.value.length > 0
        });
    }

    changeType = (event) => {
        this.setState({
            type: event.target.value
        });
    }

    searchSchool = () => {
        if(this.state.canSearch) {
            console.log(this.state);            
        }
    }

    render() {
        const styles = require('./HomepageSearch.less');
        const btnStyles = require('../../theme/less/buttons.less');
        const { loc, type, canSearch } = this.state;
        return (
            <Grid>
                <div className={styles.searchBox}>
                    <form className="form form-horizontal">
                        <Row>
                            <Col md={8} xs={12}>
                                <label htmlFor="loc">Lokalita</label>
                                <input id="loc" type="text" value={loc} onChange={this.changeLoc} placeholder="zadejte adresu" className="form-control" />
                            </Col>
                            <Col md={2} xs={6}>
                                <label htmlFor="type">Typ školy</label>
                                <select id="type" name="school_type" className="form-control" value={type} onChange={this.changeType}>
                                    <option value="Mateřská škola">Mateřská</option>
                                    <option value="Základní škola">Základní</option>
                                    <option value="Střední škola">Střední</option>
                                </select>
                            </Col>
                            <Col md={2} xs={6}>
                                <label>&nbsp;</label>
                                <Button className={btnStyles.pink} onClick={this.searchSchool} disabled={canSearch}>Najít Školu</Button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Grid>
        );
    }
}
