import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div className="landing-wrapper">
        <h1>Welcome to the Political Compass!</h1>
        <h2>
          This website uses responses to a set of 62 propositions to rate <br />
          political ideology in a political spectrum with two axes: economic and
          social{' '}
        </h2>
        <Link to="/test">
          <button>START TEST</button>
        </Link>
      </div>
    </>
  )
}

export default Landing
