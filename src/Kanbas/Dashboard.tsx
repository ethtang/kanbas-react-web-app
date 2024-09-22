import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/mern.jpg" width={200} />
            <div>
              <h5>
                CS4550
              </h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/CLRS.jpg" width={200} />
            <div>
              <h5>
                CS5800
              </h5>
              <p className="wd-dashboard-course-title">
                Algorithms (Graduate)
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/numpy.jpg" width={200} />
            <div>
              <h5>
                DS3000
              </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/trolley.jpg" width={200} />
            <div>
              <h5>
                PHIL1145
              </h5>
              <p className="wd-dashboard-course-title">
                Technology and Human Values
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>
                CS3500
              </h5>
              <p className="wd-dashboard-course-title">
                Object Orietented Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/aws.jpg" width={200} />
            <div>
              <h5>
                CS4973
              </h5>
              <p className="wd-dashboard-course-title">
                Projects in Cloud Computing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

        <div className="wd-dashboard-course1">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/racket.jpg" width={200} />
            <div>
              <h5>
                CS2500
              </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of CS 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>

      </div>
    </div>


  );
}

