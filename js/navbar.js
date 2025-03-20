// Redirect if not authorized
if (!localStorage.getItem("user")) {
  window.location.href = "./login.html";
}
let user = JSON.parse(localStorage.getItem("user"));

const navbar = `
      <button   
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse change--div" id="navbarTogglerDemo01">
        <!-- User Info on the Right -->
        <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item active">
            <span class="nav-link nav-bar-userName">مرحبا ${user.name}</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active">
              # <span class="user--rank">${user.rank}</span>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link active">
              النقاط: <span class="user--balance">${user.balance} 🪙</span>
            </span>
          </li>
        </ul>

        <!-- Search Bar Centered -->
        <form class="form-inline my-2 my-lg-0 search-bar mx-auto">
          <input
            class="form-control ml-sm-2"
            type="search"
            placeholder="بحث"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0 searchUsersBtn" type="submit">
            بحث
          </button>
        </form>

        <!-- Icons on the Left -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link setting-icon" href="./vision.html">
              <i class="fa fa-eye"></i>
            </a>
          </li>
        </ul>

        <!-- Brand Logo -->
        <a class="navbar-brand mr-3" href="../HTML/main.html">تنوير</a>
      </div>
`;

export default navbar;
