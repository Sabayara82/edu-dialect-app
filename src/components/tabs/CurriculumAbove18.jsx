export default function CurriculumAbove18() {
  return (
    <>
      <div className="mainDiv">
        <h1>18 and Above Section</h1>
        <h3>Click on the current week to download the PDF.</h3>

        <div id="clickableBoxes">
          <div className="curriculumLeft">
            <div className="week1">
              <p>Week 1 Material</p>
            </div>

            <div className="week2">
              <p>Week 2 Material</p>
            </div>

            <div className="week3">
              <p>Week 3 Material</p>
            </div>

            <div className="week4">
              <p>Week 4 Material</p>
            </div>
          </div>

          <div className="curriculumRight">
            <div className="week5">
              <p>Week 5 Material</p>
            </div>

            <div className="week6">
              <p>Week 6 Material</p>
            </div>

            <div className="week7">
              <p>Week 7 Material</p>
            </div>

            <div className="week8">
              <p>Week 8 Material</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
