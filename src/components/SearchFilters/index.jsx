import { useState } from "react"
import "@/styles/SearchFilters.css"
import { FiChevronDown, FiChevronUp, FiSearch, FiCheck, FiX } from "react-icons/fi"
import { searchFilters } from "@/data"

function SearchFilters() {

  const [openFilterId, setOpenFilterId] = useState(null)
  const [switchValues, setSwitchValues] = useState({})
  const [searchTexts, setSearchTexts] = useState({})
  const [checkedValues, setCheckedValues] = useState({})

  const handleOpenFilter = (filterId) => {

    if (openFilterId !== filterId) {
      setOpenFilterId(filterId)
    } 
    
    else {
      setOpenFilterId(null)
    }
  }

  const handleSwitch = (filterId) => {
    setSwitchValues({
      ...switchValues,
      [filterId]: !switchValues[filterId],
    })
  }

  const handleSearchChange = (filterId, value) => {
    setSearchTexts({
      [filterId]: value,
    })
  }

  const clearSearch = (filterId) => {
    setSearchTexts({
      [filterId]: "",
    })
  }

  const getOptionTitle = (option) => {
    if (typeof option === "string") {
      return option
    }

    return option.title
  }

  const getOptionKey = (option) => {
    if (typeof option === "string") {
      return option
    }

    return option.id
  }

  const handleCheckbox = (filterId, option) => {
    const optionTitle = getOptionTitle(option)
    const currentValues = checkedValues[filterId] || []

    let newValues

    if (currentValues.includes(optionTitle)) {
      newValues = currentValues.filter((item) => item !== optionTitle)
    } 
    
    else {
      newValues = [...currentValues, optionTitle]
    }

    setCheckedValues({
      ...checkedValues,
      [filterId]: newValues,
    })
  }

  const isOptionChecked = (filterId, option) => {
    const optionTitle = getOptionTitle(option)
    const currentValues = checkedValues[filterId] || []

    return currentValues.includes(optionTitle)
  }

  const getFilteredOptions = (filter) => {
    if (!filter.options) {
      return []
    }

    const searchText = searchTexts[filter.id] || ""

    if (searchText.trim() === "") {
      return filter.options
    }

    return filter.options.filter((option) => {
      return getOptionTitle(option)
        .toLowerCase()
        .includes(searchText.toLowerCase())
    })
  }

  return (
    <aside className="search-filters">
      <div className="search-filters-box">
        <div className="search-filters-header">
          <h2>فیلترها</h2>
        </div>

        <div className="search-filters-list">
          {searchFilters.map((filter) => {
            const isOpen = openFilterId === filter.id
            const isSwitchOn = switchValues[filter.id]
            const filteredOptions = getFilteredOptions(filter)
            const searchText = searchTexts[filter.id] || ""

            return (
              <div className="search-filter-item" key={filter.id}>
                <div className="search-filter-row">
                  <button
                    className="search-filter-title-button"
                    type="button"
                    onClick={() => {
                      if (filter.type !== "switch") {
                        handleOpenFilter(filter.id)
                      }
                    }}
                  >
                    <div className="search-filter-title-line">
                      <span>{filter.title}</span>

                      {filter.iconImage && (
                        <span className="search-filter-image-icon">
                          <img src={filter.iconImage} alt="" />
                        </span>
                      )}
                    </div>

                    {filter.subtitle && (
                      <small>{filter.subtitle}</small>
                    )}
                  </button>

                  {filter.type === "switch" && (
                    <button
                      className={
                        isSwitchOn
                          ? "search-filter-switch search-filter-switch-active"
                          : "search-filter-switch"
                      }
                      type="button"
                      onClick={() => handleSwitch(filter.id)}
                    >
                      <span></span>
                    </button>
                  )}

                  {filter.type !== "switch" && (
                    <button
                      className="search-filter-arrow"
                      type="button"
                      onClick={() => handleOpenFilter(filter.id)}
                    >
                      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  )}
                </div>

                {isOpen && filter.hasSearch && (
                  <div className="search-filter-search-box">
                    <FiSearch />

                    <input
                      type="text"
                      placeholder={filter.searchPlaceholder || "جستجو"}
                      value={searchText}
                      onChange={(event) =>
                        handleSearchChange(filter.id, event.target.value)
                      }
                    />

                    {searchText && (
                      <button
                        className="search-filter-clear-search"
                        type="button"
                        onClick={() => clearSearch(filter.id)}
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                )}

                {isOpen && filter.type === "checkbox" && (
                  <div className="search-filter-content">
                    {filteredOptions.map((option) => {
                      const checked = isOptionChecked(filter.id, option)

                      return (
                        <button
                          className="search-filter-option"
                          type="button"
                          key={getOptionKey(option)}
                          onClick={() => handleCheckbox(filter.id, option)}
                        >
                          <span
                            className={
                              checked
                                ? "search-filter-checkbox search-filter-checkbox-active"
                                : "search-filter-checkbox"
                            }
                          >
                            {checked && <FiCheck />}
                          </span>

                          <span className="search-filter-option-title">
                            {getOptionTitle(option)}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}

                {isOpen && filter.type === "color" && (
                  <div className="search-filter-content search-filter-color-content">
                    {filteredOptions.map((option) => {
                      const checked = isOptionChecked(filter.id, option)

                      return (
                        <button
                          className="search-filter-option"
                          type="button"
                          key={option.id}
                          onClick={() => handleCheckbox(filter.id, option)}
                        >
                          <span
                            className={
                              checked
                                ? "search-filter-checkbox search-filter-checkbox-active"
                                : "search-filter-checkbox"
                            }
                          >
                            {checked && <FiCheck />}
                          </span>

                          <span
                            className="search-filter-color-circle"
                            style={{ backgroundColor: option.color }}
                          ></span>

                          <span className="search-filter-option-title">
                            {option.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}

                {isOpen && filter.type === "price" && (
                  <div className="search-filter-price-content">
                    <div className="search-filter-price-row">
                      <span>از</span>
                      <input type="text" placeholder="000,000,000" />
                      <small>تومان</small>
                    </div>

                    <div className="search-filter-price-row">
                      <span>تا</span>
                      <input type="text" placeholder="000,000,000" />
                      <small>تومان</small>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default SearchFilters