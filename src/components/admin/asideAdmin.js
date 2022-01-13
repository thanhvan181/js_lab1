const asideAdmin = {
    render() {
        return /* html */`
        <div class="w-1/6">
        <aside class="aside is-placed-left is-expanded">
        <div class="aside-tools">
          <div>
            Admin <b class="font-black">One</b>
          </div>
        </div>
        <div class="menu is-menu-main">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li class="--set-active-index-html">
              <a href="index.html">
                <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                <span class="menu-item-label">Dashboard</span>
              </a>
            </li>
          </ul>
          <p class="menu-label">Examples</p>
          <ul class="menu-list">
            <li class="--set-active-tables-html">
              <a href="/admin/news">
                <span class="icon"><i class="mdi mdi-table"></i></span>
                <span class="menu-item-label">Manager Product</span>
              </a>
            </li>
            <li class="--set-active-forms-html">
              <a href="forms.html">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Demo</span>
              </a>
            </li>
            <li class="--set-active-profile-html">
              <a href="profile.html">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Demo</span>
              </a>
            </li>
            <li>
              <a href="login.html">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Demo</span>
              </a>
            </li>
            <li>
              <a class="dropdown">
                <span class="icon"><i class="mdi mdi-view-list"></i></span>
                <span class="menu-item-label">Demo</span>
                <span class="icon"><i class="mdi mdi-plus"></i></span>
              </a>
              <ul>
                <li>
                  <a href="#void">
                    <span>Sub-item One</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span>Sub-item Two</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          
        </div>
      </aside>
      </div>


        `
    }
}
export default asideAdmin