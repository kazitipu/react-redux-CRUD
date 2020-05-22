const INITIAL_STATE = {
  streams: [],
};

const streamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_STREAM":
      const newStreamsList = [...state.streams, action.payload];
      return { ...state, streams: newStreamsList };

    case "FETCH_STREAMS":
      return { ...state, streams: action.payload };

    case "FETCH_STREAM":
      if (state.streams.length > 0) {
        return { ...state };
      } else {
        return { ...state, streams: [action.payload] };
      }

    case "EDIT_STREAM":
      const updatedStreamsList = state.streams.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        }
        return stream;
      });
      return { ...state, streams: updatedStreamsList };

    case "DELETE_STREAM":
      const newStreams = state.streams.filter(
        (stream) => stream.id != action.payload
      );
      return { ...state, streams: newStreams };

    default:
      return state;
  }
};
export default streamsReducer;
