const TestView = () => {
  // Sections: A, B, C and D w/ six statements each

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
  // Based on statement direction and the value of the input selected, +/- value from economicScore & socialScore

  return (
    <div className="testview-wrapper">
      <h1>TestView</h1>
    </div>
  )
}

export default TestView
