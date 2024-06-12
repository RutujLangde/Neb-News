import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/general">NebNews</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Genre
                  </a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link class="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li class="dropdown-item"><Link class="dropdown-item" to="/general">General</Link></li>
                    <li class="dropdown-item"><Link class="dropdown-item" to="/health">Health</Link></li>
                    <li class="dropdown-item"><Link class="dropdown-item" to="/science">Science</Link></li>
                    <li class="dropdown-item"><Link class="dropdown-item" to="/sports">Sports</Link></li>
                    <li class="dropdown-item"><Link class="dropdown-item" to="/technology">Technology</Link></li>

                  </ul>
                </li>

              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

    )
  }


export default Navbar
