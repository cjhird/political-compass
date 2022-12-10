const TestView = () => {
  // 4 Game Counters:
  // Economic Score - Left (Socialism) vs Right (Capitalism)
  // Social Score - Authoritarian vs Libertarian
  // Test Progress - e.g. 34 of 60
  // Section Counter - determines which statements are loaded. counter increments when user clicks nextSection button

  // Sections: 1, 2, 3 and  w/ six statements each

  // ! loadStatements function
  // check the current section.
  // load the set of 6 statements for specific section

  // ! inputValue function
  // Take user input on political statements
  // each statment will have a direction: right or left - this determines value of the input.
  // e.g. if the statement is left leaning and the user strongly agrees: economicScore += -2.00
  // e.g. whereas if statement is right leaning and user strongly agrees: economicScore += 2.00
  // e.g. whereas if statment is left leaning and user strongly disagrees: economicScore += 2.00
  // e.g. whereas if statement is right leaning and user strongly disagress: economicScore += -2.00
  // Based on statement direction and the value of the input selected, +/- value from economicScore & socialScore.
  // the inputValue function will be called when all statements have an input and the user clicks the nextSection button.

  return (
    <div className="testview-wrapper">
      <div className="testview-cont">
        <div className="section-box">
          <h3>Section: SECTION VARIABLE</h3>
          <h4>SECTION DESCRIPTION VARIABLE</h4>
        </div>
        <hr />
        <div className="progress-box">
          <h3>Your Test | PROGRESS COUNTER</h3>
          <h4>PROGRESS BAR</h4>
        </div>
        <hr />
        <div className="statements-box">
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 1</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
          <div className="statements-container"></div>
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 2</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 3</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 4</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 5</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
          <div className="statement">
            <div className="statement-content">
              <p>STATEMENT 6</p>
            </div>
            <div className="statement-input">
              <div className="strong-disagree">
                <p className="input-text">Strongly Disagree</p>
              </div>
              <div className="disagree">
                <p className="input-text">Disagree</p>
              </div>
              <div className="agree">
                <p className="input-text">Agree</p>
              </div>
              <div className="strong-agree">
                <p className="input-text">Strongly Agree</p>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="bottom-box">
          <div className="next-section">
            <p className="next-btn">NEXT SECTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestView
