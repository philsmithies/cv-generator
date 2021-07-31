import React, { useState, useRef } from "react";
import PersonalInput from "./Components/PersonalInput";
import Bio from "./Components/Bio";
import WorkDetails from "./Components/WorkDetails";
import EducationDetails from "./Components/EducationDetails";
import WorkInput from "./Components/WorkInput";
import EducationInput from "./Components/EducationInput";
import WorkInputPreview from "./Components/WorkInputPreview";
import EducationInputPreview from "./Components/EducationInputPreview";
import RoundImage from "./round_image.png";
import Headshot from "./headshot.jpeg";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import { jsPDF } from "jspdf";
// import { useReactToPrint } from 'react-to-print'
import "./App.css";

const App = () => {
  const [previewSource, setPreviewSource] = useState(RoundImage);
  const [state, setState] = useState({});
  const [elements, setElements] = useState([]);
  const [education, setEducation] = useState([]);

  const addWork = (e) => {
    setElements([
      ...elements,
      {
        company: e.company,
        position: e.position,
        startDate: e.startDate,
        endDate: e.endDate,
      },
    ]);
  };

  const addEducation = (e) => {
    setEducation([
      ...education,
      {
        school: e.school,
        city: e.city,
        subject: e.subject,
        startDate: e.startDate,
        endDate: e.endDate,
      },
    ]);
  };

  const deleteWork = (index) => {
    const newWorks = [...elements];
    newWorks.splice(index, 1);
    setElements(newWorks);
  };

  const deleteEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleFile = (e) => {
    setPreviewSource(e.target.files[0]);
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    // reads the file as url to create preview
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const resetForm = () => {
    setElements([]);
    setEducation([]);
    setState([]);
  };

  const printCV = () => {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(document.getElementById('previewCv'), {
        callback: function (pdf) {
            pdf.save('cv.pdf');
        },
        margin: [60, 60, 60, 60],
        x: 32,
        y: 32,
        html2canvas: {
            scale: 0.60,  // adjust to pdf size
            width: 800
        },
    });
  };

  // const componentRef = useRef()

  // // throws warning because react-to-print uses findDOMNode
  // const handlePrint = useReactToPrint({ content: () => componentRef.current })

  const loadExample = () => {
    setEducation([
      ...education,
      {
        school: "Makers",
        city: "London",
        subject: "Full Stack Web Dev",
        startDate: "2020",
        endDate: "2021",
      },
    ]);
    setElements([
      ...elements,
      {
        company: "Deliveroo",
        city: "London",
        startDate: "2018",
        endDate: "2020",
        description: "Junior Dev who is learning react",
        position: "Junior Dev",
      },
    ]);
    setState({
      fullName: "John Doe",
      role: "Software Developer",
      email: "john@doe.org",
      phone: "07809038123",
      location: "London,uk",
      bio: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
      company: "Big Shots",
      startDate: "02/01/20",
      endDate: "25/05/21",
      description:
        "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
    });
    setPreviewSource(Headshot);
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <h3>Personal Info:</h3>
        <PersonalInput
          name="fullName"
          placeholder={state.fullName}
          onChange={handleChange}
        />
        <PersonalInput
          name="role"
          placeholder={state.role}
          onChange={handleChange}
        />
        <PersonalInput
          name="email"
          placeholder={state.email}
          onChange={handleChange}
        />
        <PersonalInput
          name="phone"
          placeholder={state.phone}
          onChange={handleChange}
        />
        <PersonalInput
          name="location"
          placeholder={state.location}
          onChange={handleChange}
        />
        <Bio name="bio" value={state.bio} onChange={handleChange} />
        <label id="upload_image">
          Upload an Image:
          <input type="file" className="fileUpload" onChange={handleFile} />
        </label>
        <h3>Work Experience</h3>
        <WorkInput addWork={addWork} handleChange={handleChange} />
        {elements.map((work, index) => (
          <WorkInputPreview
            company={work.company}
            position={work.position}
            startDate={work.startDate}
            description={work.description}
            endDate={work.endDate}
            deleteWork={deleteWork}
          />
        ))}
        <h3>Education</h3>
        <EducationInput
          addEducation={addEducation}
          handleChange={handleChange}
        />
        {education.map((education, index) => (
          <EducationInputPreview
            school={education.school}
            subject={education.subject}
            startDate={education.startDate}
            endDate={education.endDate}
            deleteEducation={deleteEducation}
          />
        ))}
        <button className="loadButton" onClick={loadExample}>
          Load Example
        </button>
        <button className="generateButton" onClick={printCV}>
          Print PDF
        </button>
        <button className="resetButton" onClick={resetForm}>
          Reset
        </button>
      </div>

      <div id="previewCv">
        <div className="previewCvHeader">
          <h1>
            {state.fullName}: {state.role}
          </h1>
        </div>

        <div className="previewCVSide">
          {previewSource && (
            <img src={previewSource} alt="" className="placeholder_image" />
          )}
          <h2>Personal Details</h2>
          <hr />
          <p>{state.email}</p>
          <p>{state.phone}</p>
          <p>{state.location}</p>
        </div>

        <div className="maincv">
          <div className="previewBio">
            <h2>Bio</h2>
            {state.bio}
          </div>

          <div className="previewCVWork">
            <h2 class="worktitle">Work Experience</h2>
            <hr />
            {elements.map((work, index) => (
              <WorkDetails
                company={work.company}
                position={work.position}
                city={work.city}
                startDate={work.startDate}
                description={work.description}
                endDate={work.endDate}
                deleteWork={deleteWork}
              />
            ))}
          </div>
          <div className="previewCVEducation">
            <h2 class="worktitle">Education</h2>
            <hr />
            {education.map((education, index) => (
              <EducationDetails
                school={education.school}
                city={education.city}
                subject={education.subject}
                startDate={education.startDate}
                description={education.description}
                endDate={education.endDate}
                deleteEducation={deleteEducation}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
