const UPDATE_NEW_ANNOUNCEMENT_TITLE = "UPDATE-NEW-ANNOUNCEMENT-TITLE";
const UPDATE_NEW_ANNOUNCEMENT_TEXT = "UPDATE-NEW-ANNOUNCEMENT-TEXT";
const ADD_ANNOUNCEMENT = "ADD-ANNOUNCEMENT";
const DELETE_ANNOUNCEMENT = "DELETE-ANNOUNCEMENT";
const EDIT_ANNOUNCEMENT = "EDIT-ANNOUNCEMENT";
const dayjs = require("dayjs");

const initialState = {
  announcementData: [
    {
      id: 1,
      title: "Lost Cat!",
      description:
        "Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",
      dateAdded: "04.11.2021",
    },
    {
      id: 2,
      title: "Computer problems?",
      description:
        "Experienced IT engineer will sort out problems with home computers. Call me: 09651 325693",
      dateAdded: "02.11.2021",
    },
    {
      id: 3,
      title: "TV for sale!",
      description:
        "Thomson 32wh412b TV for sale. Diagonal 32. Fully working, remote control available. Suitable for cable and T2. Tel: 09652 355662",
      dateAdded: "05.10.2021",
    },
    {
      id: 4,
      title: "Vegetables for sale!",
      description:
        "We will sell house potatoes and anouther vegetables, specify the price 0501042169",
      dateAdded: "01.09.2021",
    },
    {
      id: 5,
      title: "Lost Dog!",
      description:
        "Dog missing in the Central Park. If you see him please phone 0789 324775",
      dateAdded: "07.09.2021",
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
        ...state,
        announcementData: [...state.announcementData],
      };
      const filterdState = newState.announcementData.filter(
        (el) => el.id !== action.id
      );
      return { ...state, announcementData: filterdState };
    }
    case EDIT_ANNOUNCEMENT: {
      const newState = {
        ...state,
        announcementData: [...state.announcementData],
      };
      newState.announcementData.forEach((el) => {
        if (el.id === action.id) {
          el.title = newState.newAnnouncementTitle;
          el.description = newState.newAnnouncementText;
        }
      });
      newState.newAnnouncementTitle = "";
      newState.newAnnouncementText = "";
      return newState;
    }
    default:
      return state;
  }
};

export default announcementsReducer;

export const updateNewAnnouncementTitle = (newTitle) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TITLE,
  newTitle: newTitle,
});
export const updateNewAnnouncementText = (newText) => ({
  type: UPDATE_NEW_ANNOUNCEMENT_TEXT,
  newText: newText,
});
export const addAnnouncement = () => ({ type: ADD_ANNOUNCEMENT });
export const deleteAnnouncement = (id) => ({
  type: DELETE_ANNOUNCEMENT,
  id: id,
});
export const editAnnouncement = (id) => ({
  type: EDIT_ANNOUNCEMENT,
  id: id,
});
