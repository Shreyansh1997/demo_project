import axios from "axios";
import React, { useEffect, useState } from "react";

function BatchDropdown({ selectedBatch, handleBatchChange }) {
  const [batches, setBatches] = useState([]);
  const fetchBatches = async () => {
    try {
      const userbatchres = await axios.get(
        "https://localhost:7005/api/Batches"
      );
      setBatches(userbatchres.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchBatches();
  }, []);
  return (
    <select
      value={selectedBatch}
      name=""
      id=""
      class="form-control form-control-lg"
      onChange={(e) => handleBatchChange(e)}
    >
      {batches.map((batch) => (
        <option value={batch.batchId}>{batch.batchName}</option>
      ))}
    </select>
  );
}

export default BatchDropdown;
