const UPDATE_NEW_ANNOUNCEMENT_TITLE = "UPDATE-NEW-ANNOUNCEMENT-TITLE";
const UPDATE_NEW_ANNOUNCEMENT_TEXT = "UPDATE-NEW-ANNOUNCEMENT-TEXT";
const ADD_ANNOUNCEMENT = "ADD-ANNOUNCEMENT";
const DELETE_ANNOUNCEMENT = "DELETE-ANNOUNCEMENT";
const dayjs = require('dayjs')

const initialState = {
  announcementData: [
    {
      id: 1,
      title: "Lost Cat!",
      description:
        "Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",
      dateAdded: "04.11.2021",
    },
  ],
  newAnnouncementTitle: "",
  newAnnouncementText: "",
};

const announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_ANNOUNCEMENT_TITLE: {
      return { ...state, newAnnouncementTitle: action.newTitle };
    }
    case UPDATE_NEW_ANNOUNCEMENT_TEXT: {
      return { ...state, newAnnouncementText: action.newText };
    }
    case ADD_ANNOUNCEMENT: {
      return {
        ...state,
        announcementData: [
          ...state.announcementData,
          {
            id:
              state.announcementData[state.announcementData.length - 1].id + 1,
            title: state.newAnnouncementTitle,
            description: state.newAnnouncementText,
            dateAdded: dayjs().format("DD.MM.YYYY"),
          },
        ],
        newAnnouncementTitle: "",
        newAnnouncementText: "",
      };
    }
    case DELETE_ANNOUNCEMENT: {
      const newState = {
        ...state, announcementData: [
          ...state.announcementData]
      };
      const filterdState = newState.announcementData.filter(el => el.id !== action.id);
      return { ...state, announcementData: filterdState };
    }
    default:
      return state;
  }
};

export default announcementsReducer;

export const updateNewAnnouncementTitleAC = (newTitle) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TITLE,
  newTitle: newTitle,
});
export const updateNewAnnouncementTextAC = (newText) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TEXT,
  newText: newText,
});
export const addAnnouncementAC = () => ({ type: ADD_ANNOUNCEMENT });
export const deleteAnnouncementAC = (id) => ({ type: DELETE_ANNOUNCEMENT, id:id });
