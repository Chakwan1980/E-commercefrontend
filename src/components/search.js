import '../styles/search.css'

function Search() {
  return (
<div>
  <nav class="navbar">
    <div class="container">
      <form class="search-form">
        <input
          class="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="search-button" type="submit">
          click
        </button>
      </form>
    </div>
  </nav>
</div>

  );
}

export default Search;