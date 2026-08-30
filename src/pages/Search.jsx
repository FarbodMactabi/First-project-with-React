import "../styles/Search.css"

import SearchCategoryBox from "../components/SearchCategoryBox"
import SearchFilters from "../components/SearchFilters"
import SearchProducts from "../components/SearchProducts"

function Search() {
  return (
    <main className="search-page">
      <SearchCategoryBox />

      <section className="search-body-section">
        <div className="search-body-container">
          <SearchFilters />

          <SearchProducts />
        </div>
      </section>
    </main>
  )
}

export default Search