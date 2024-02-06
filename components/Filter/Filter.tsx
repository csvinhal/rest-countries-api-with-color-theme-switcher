import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row gap-10 md:justify-between">
      <div className="relative md:basis-5/12">
        <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
          <FontAwesomeIcon
            className="w-5 h-5 mr-3 text-dark-gray-light"
            icon={faSearch}
          />
        </div>
        <input
          className="h-10 p-6 ps-16 rounded-md w-full placeholder:text-dark-gray-light dark:placeholder:text-white bg-white dark:bg-dark-blue-dark shadow-lg shadow-dark-gray dark:shadow-very-dark-blue-dark"
          name="name"
          type="search"
          autoComplete="country"
          placeholder="Search for a country..."
        />
      </div>
      <select
        className="h-12 p-2 rounded-md w-1/2 md:w-full md:basis-1/4 bg-white dark:bg-dark-blue-dark shadow-lg shadow-dark-gray dark:shadow-very-dark-blue-dark"
        name="region"
        defaultValue=""
      >
        <option disabled value="" selected>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
