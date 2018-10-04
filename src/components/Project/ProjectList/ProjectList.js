import { compose, withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import removeProject from "../../../redux/actions/projects/removeProject";
import ListView from "../../ListView/ListView";

const mapStateToProps = ({ projects }) => ({ items: projects });

const mapDispatchToProps = {
  removeProject
};

const deleteHandler = props => event => {
  const target = event.target;
  const id = target.dataset.id;

  props.removeProject(id);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withProps({ mainProperty: "projectName" }),
  withHandlers({ deleteHandler })
)(ListView);
