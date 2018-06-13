let initialState = {
  restarauntViewToggle: false
};

const TOGGLE_RESTAURANT_DETAILS = "TOGGLE_RESTAURANT_DETAILS";

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RESTAURANT_DETAILS:
      return { ...state, restarauntViewToggle: action.payload };
    default:
      return state;
  }
}

export function toggleRestaurantDetails(val) {
  return {
    type: TOGGLE_RESTAURANT_DETAILS,
    payload: val
  };
}
