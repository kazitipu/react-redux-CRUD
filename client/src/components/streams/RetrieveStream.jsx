import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class RetrieveStream extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    if (window.flvjs.isSupported()) {
      var videoElement = this.videoRef.current;
      this.flvPlayer = window.flvjs.createPlayer({
        type: "flv",
        url: "http://localhost:8000/live/20.flv",
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
    }
  }
  componentWillUnmount() {
    this.flvPlayer.destroy();
  }
  renderStream() {
    if (this.props.stream) {
      return (
        <div>
          <h4>{this.props.stream.title}</h4>
          <p>{this.props.stream.description}</p>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h3> RetrieveStream</h3>
        <br />
        {this.renderStream()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams.streams.filter(
      (stream) => stream.id == ownProps.match.params.id
    )[0],
  };
};

export default connect(mapStateToProps, { fetchStream })(RetrieveStream);
