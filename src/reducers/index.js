import { combineReducers } from "redux";
import {
  SET_USERNAME,
  FETCHING_SKILL_DATA,
  FETCHED_SKILL_DATA
} from "../actions/types";

const initialUserState = {
  isLoaded: false,
  username: "",
  skillData: null
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return { ...state, username: action.payload.username };
    }

    case FETCHING_SKILL_DATA: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCHED_SKILL_DATA: {
      return {
        ...state,
        skillData: action.payload.skillData,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  user: userReducer
});
