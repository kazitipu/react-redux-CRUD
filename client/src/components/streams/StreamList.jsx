import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreateStreambutton() {
    if (this.props.isSignedIn) {
      return (
        <Link to="streams/new" className="btn btn-primary">
          Create Stream
        </Link>
      );
    }
    return;
  }
  renderButton(userId, id) {
    if (this.props.isSignedIn && this.props.userId == userId) {
      return (
        <>
          <Link to={`streams/edit/${id}`} className="btn btn-primary">
            Edit
          </Link>
          <Link to={`streams/delete/${id}`} className="btn btn-danger">
            Delete
          </Link>
        </>
      );
    }
    return;
  }
  renderList() {
    if (this.props.streams.length > 0) {
      return this.props.streams.map((stream) => {
        return (
          <div key={stream.id}>
            <h4>
              <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link>
            </h4>
            <p>{stream.description}</p>
            {this.renderButton(stream.userId, stream.id)}
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <h1>StreamList</h1> <br />
        {this.renderList()}
        {this.renderCreateStreambutton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams.streams,
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
