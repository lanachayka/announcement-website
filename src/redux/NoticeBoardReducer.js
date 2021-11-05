const ADD_ANNOUNCEMENT = "ADD-ANNOUNCEMENT";
const UPDATE_NEW_ANNOUNCEMENT_TEXT = "UPDATE-NEW-ANNOUNCEMENT-TEXT";
const UPDATE_NEW_ANNOUNCEMENT_TITLE = "UPDATE-NEW-ANNOUNCEMENT-TITLE";

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

const announcementReducer = (state = initialState, action) => {
      return state;
};

export default announcementReducer;

export const addAnnouncementAC = () => ({ type: ADD_ANNOUNCEMENT });
export const updateNewAnnouncementTextAC = (newText) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TEXT,
  newText: newText,
});
export const updateNewAnnouncementTitleAC = (newTitle) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TITLE,
  newTitle: newTitle,
});