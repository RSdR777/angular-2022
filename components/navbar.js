function Navbar() {
    const html = `<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" id="searchKey" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" onclick="filterSearch(document.getElementById('searchKey').value)">Search</button>
      </form>
    </div>
  </nav>`;

  return html;
}