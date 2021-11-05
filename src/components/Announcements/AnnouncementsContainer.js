import Announcements from './Announcements';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    announcementData: state.announcements.announcementData,
  };
};

const AnnouncementsContainer = connect(
  mapStateToProps,
)(Announcements);

export default AnnouncementsContainer;
