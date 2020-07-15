import { UPDATE_CHART_DATA } from './types';

const initialState = {
  chartData: {
    days: [
      {
        date: new Date(),
        count: 0,
      },
    ],
    points: [
      {
        date: new Date(),
        count: 0,
      },
    ],
    chartPoints: [
      {
        x: 0,
        y: 0,
      },
    ],
    xMin: 0,
    xMax: 1,
    yMin: 0,
    yMax: 1,
  },
};

function chartReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHART_DATA:
      return { ...state, chartData: action.payload };
    default:
      return state;
  }
}
export default chartReducer;
