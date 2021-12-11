import format from "date-fns/format";

const filterList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default function MonthFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Month: </p>
        {filterList.map((filter) => (
          <button
            className={currentFilter === format(new Date(), "LLL") ? "active" : ""}
            key={filter}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
