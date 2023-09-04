import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>BPSC Document Verification Checklist</h1>
      <form className="formOriginal">
        <div>
          <input type="checkbox" />
          <label>Aadhar Card</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>BPSC Admit Card</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>STET 2019 Result Card</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Caste Certificate</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Residential Proof (Awasiya Praman Patr)</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Date of Birth Proof (10th Certificate)</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>12th Certificate</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Graduation Certificate</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Post Graduation Certificate (If you have)</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>B.Ed Certificate (Not Required for CS)</label>
        </div>
      </form>
      <footer>
        <p>Document Verification will start from 10 AM</p>
      </footer>
    </div>
  );
}
