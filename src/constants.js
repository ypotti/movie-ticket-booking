import { getGenres, getLanguages, getLocations } from "./services/MovieService";
import { IoLanguageOutline, IoLocationOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";

export const filterItems = [
  {
    id: "Language",
    label: "Language",
    icon: <IoLanguageOutline className="filter-icon" />,
    apiMethod: getLanguages,
  },
  {
    id: "Location",
    label: "Location",
    icon: <IoLocationOutline className="filter-icon" />,
    apiMethod: getLocations,
  },
  {
    id: "Genre",
    label: "Genre",
    icon: <MdLocalMovies className="filter-icon" />,
    apiMethod: getGenres,
  },
];
