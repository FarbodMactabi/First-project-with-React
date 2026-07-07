import "./Search.css"

import SearchCategoryBox from "../components/SearchCategoryBox/SearchCategoryBox"
import SearchFilters from "../components/SearchFilters/SearchFilters"
import SearchProducts from "../components/SearchProducts/SearchProducts"

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