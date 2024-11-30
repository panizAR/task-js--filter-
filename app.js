const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

const queryData = ({ filter = "", status = "all", sort = "latest" }) => {
  let filteredData = [...notesList];

  //   filter status
  if (status !== "all") {
    const isCompleted = status === "completed";
    filteredData = filteredData.filter(
      (note) => note.completed === isCompleted
    );
  }

  //   filter title
  if (filter) {
    const userTitle = filter.toLowerCase().trim();
    filteredData = filteredData.filter((note) =>
      note.title.toLowerCase().includes(userTitle)
    );
  }

  //   filtert time
  filteredData.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (sort === "latest") {
      return dateA < dateB ? 1 : -1;
    } else {
      return dateA > dateB ? 1 : -1;
    }
  });

  return filteredData;
};

console.log(queryData({ status: "all", filter: "co", sort: "eraliest" }));
console.log(
  queryData({ sort: "latest", filter: "coding", status: "completed" })
);
console.log(
  queryData({ sort: "earliest", filter: "study", status: "completed" })
);
console.log(queryData({ sort: "latest", filter: "react", status: "all" }));
