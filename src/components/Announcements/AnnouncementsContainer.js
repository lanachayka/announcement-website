import Announcements from './Announcements';
import { connect } from "react-redux";
import { addAnnouncementAC, updateNewAnnouncementTextAC, updateNewAnnouncementTitleAC } from '../../redux/announcementsReducer';

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
  };
};

const AnnouncementsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Announcements);

export default AnnouncementsContainer;
