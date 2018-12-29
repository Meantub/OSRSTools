import { SET_USERNAME, FETCHED_SKILL_DATA, FETCHING_SKILL_DATA } from "./types";
import axios from "axios";
import { api_url } from "../config";

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: {
    username: username
  }
});

export const fetchSkillData = username => {
  return dispatch => {
    dispatch(fetchingSkillData());

    axios.get(api_url + "/player?user=" + username).then(result => {
      dispatch(fetchedSkillData(result.data));
    });
  };
};

export const fetchingSkillData = () => {
  return {
    type: FETCHING_SKILL_DATA,
    payload: {
      isLoading: true
    }
  };
};

export const fetchedSkillData = skillData => ({
  type: FETCHED_SKILL_DATA,
  payload: {
    skillData: skillData
  }
});
