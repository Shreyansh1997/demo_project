import axios from "axios";
import React, { useEffect, useState } from "react";
import BatchDropdown from "../components/placement/BatchDropdown";
import StudentCard from "../components/StudentCard";

function Placement() {
  const [studentData, setStudentData] = useState([]);

  const [selectedBatch, setSelectedBatch] = useState(null);

  const fetchPlacements = async () => {
    try {
      const userbatchres = await axios.get(
        "https://localhost:7005/api/Placements/"
      );
      setStudentData(userbatchres.data);
    } catch (error) {}
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up">Placement</h2>
          <p data-aos="fade-up">
            More than 95% Placement for 10 Consecutive batches for PG-DAC and
            PG-DBDA
          </p>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 d-flex justify-content-end">
            <BatchDropdown
              selectedBatch={selectedBatch}
              handleBatchChange={handleBatchChange}
            />
          </div>
        </div><br/>
        <div className="row">
          {studentData.map((student) => (
            <StudentCard key={student.placementId} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placement;
