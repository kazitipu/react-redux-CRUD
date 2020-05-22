import React from "react";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";

class DeleteStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };
  renderTitle = () => {
    if (this.props.stream.length > 0) {
      const stream = this.props.stream[0];
      return (
        <h3>{`Are you sure you want to delete this stream title: ${stream.title}`}</h3>
      );
    }
    return <h3>Are you sure you want to delete this stream title:</h3>;
  };
  render() {
    const buttons = (
      <>
        <button
          onClick={() => history.push("/")}
          className="btn btn-primary"
          data-dismiss="modal"
        >
          Cancel
        </button>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger"
          data-dismiss="modal"
        >
          Delete
        </button>
      </>
    );
    return (
      <div>
        {this.renderTitle()}
        <Link to="/" className="btn btn-primary">
          Cancel
        </Link>
        <button
          className="btn btn-danger"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Delete
        </button>
        <Modal
          title="Delete Stream"
          body={this.renderTitle()}
          buttons={buttons}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams.streams.filter(
      (stream) => stream.id == ownProps.match.params.id
    ),
  };
};
export default connect(mapStateToProps, { deleteStream, fetchStream })(
  DeleteStream
);
