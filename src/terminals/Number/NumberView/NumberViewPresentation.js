import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FeedbackIcon } from './../../../components/NumberPreview.js';


class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: {
        one: true,
        two: false
      }
    };
  }

  toggle(id) {
    const { collapse } = this.state;
    collapse[id] = !collapse[id];
    this.setState({ collapse });
  }

  render() {
    return (
      <section className="collapseGroup">
        <div>
          <Button
            color="primary"
            onClick={()=>{ this.toggle('one') }}
            className="btn-block collapseGroup-btn"
          >
            Status {' '}
            
            <FeedbackIcon
              status={this.props.collapse1.head} 
            />
          </Button>
          <Collapse isOpen={this.state.collapse.one}>
            <Card className="collapseGroup-frame">
              <CardBody>
                {this.props.collapse1.body}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div style={{marginTop:'30px'}}>
          <Button
            color="primary"
            onClick={()=>{ this.toggle('two') }}
            className="btn-block collapseGroup-btn"
          >
            Comments {' '}
            
            <FeedbackIcon
              comment={this.props.collapse2.head} 
            />
          </Button>
          <Collapse isOpen={this.state.collapse.two}>
            <Card className="collapseGroup-frame">
              <CardBody>
                {this.props.collapse2.body}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </section>
    );
  }
}








const NumberViewPresentation = ({
  info,
  steps,
}) => {

  return (

    <React.Fragment>
      <Accordion
        collapse1={{ head:info.status, body:steps[0].render()}}
        collapse2={{ head:info.comment, body:steps[1].render()}}
      />
    </React.Fragment>
  );
};

NumberViewPresentation.defaultProps = {
  steps: [],
};

export default NumberViewPresentation;
