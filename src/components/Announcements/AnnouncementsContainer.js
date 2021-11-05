import Announcements from './Announcements';
import { connect } from "react-redux";
import { addAnnouncementAC, deleteAnnouncementAC, editAnnouncementAC, updateNewAnnouncementTextAC, updateNewAnnouncementTitleAC } from '../../redux/announcementsReducer';

const mapStateToProps = (state) => {
  return {
    announcementData: state.announcements.announcementData,
    newAnnouncementTitle: state.announcements.newAnnouncementTitle,
    newAnnouncementText: state.announcements.newAnnouncementText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnnouncement: () => {
      dispatch(addAnnouncementAC());
    },
    updateNewAnnouncementTitle: (title) => {
      dispatch(updateNewAnnouncementTitleAC(title));
    },
    updateNewAnnouncementText: (text) => {
      dispatch(updateNewAnnouncementTextAC(text));
    },
    deleteAnnouncement: (id) => {
      dispatch(deleteAnnouncementAC(id))
    },
    editAnnouncement: (id) => {
      dispatch(editAnnouncementAC(id));
    }
  };
};

const AnnouncementsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Announcements);

export default AnnouncementsContainer;
