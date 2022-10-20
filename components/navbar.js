function Navbar() {
    const html = `<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" id="searchKey" aria-label="Search">
        <button class="btn btn-outline-success" type="button" onclick="filterSearch(document.getElementById('searchKey').value)">Search</button>
      </div>
    </div>
  </nav>`;

  return html;
}