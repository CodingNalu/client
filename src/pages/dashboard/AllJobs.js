import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext.js";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
const AllJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    status,
    statusOptions,
  } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log("create job");
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        {/* position */}
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleInput}
        />
      </form>
    </Wrapper>
  );
};
export default AllJob;
