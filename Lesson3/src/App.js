import MangaContainer from "./components/MangaContainer";

function App() {
  let data = [
    {
      id: 1,
      name: "Pelecans onocratalus",
      view_count: 84650,
      comment_count: 25081,
      lastest_chapter: 250,
      date_modified: "2022-04-03",
      photo: "http://dummyimage.com/300x400.png/dddddd/000000",
    },
    {
      id: 2,
      name: "Spheniscus mendiculus",
      view_count: 52896,
      comment_count: 26932,
      lastest_chapter: 226,
      date_modified: "2021-10-27",
      photo: "http://dummyimage.com/300x400.png/5fa2dd/ffffff",
    },
    {
      id: 3,
      name: "Camelus dromedarius",
      view_count: 70243,
      comment_count: 43591,
      lastest_chapter: 136,
      date_modified: "2022-04-10",
      photo: "http://dummyimage.com/300x400.png/cc0000/ffffff",
    },
    {
      id: 4,
      name: "Potorous tridactylus",
      view_count: 25339,
      comment_count: 19913,
      lastest_chapter: 382,
      date_modified: "2021-12-17",
      photo: "http://dummyimage.com/300x400.png/5fa2dd/ffffff",
    },
    {
      id: 5,
      name: "Varanus sp.",
      view_count: 30068,
      comment_count: 24162,
      lastest_chapter: 299,
      date_modified: "2022-04-11",
      photo: "http://dummyimage.com/300x400.png/5fa2dd/ffffff",
    },
    {
      id: 6,
      name: "Phasianus colchicus",
      view_count: 59340,
      comment_count: 32443,
      lastest_chapter: 227,
      date_modified: "2021-09-29",
      photo: "http://dummyimage.com/300x400.png/dddddd/000000",
    },
    {
      id: 7,
      name: "Lamprotornis nitens",
      view_count: 31307,
      comment_count: 29111,
      lastest_chapter: 382,
      date_modified: "2021-10-31",
      photo: "http://dummyimage.com/300x400.png/5fa2dd/ffffff",
    },
    {
      id: 8,
      name: "Alopex lagopus",
      view_count: 74919,
      comment_count: 39475,
      lastest_chapter: 195,
      date_modified: "2021-06-26",
      photo: "http://dummyimage.com/300x400.png/dddddd/000000",
    },
    {
      id: 9,
      name: "Phoenicopterus chilensis",
      view_count: 99368,
      comment_count: 35310,
      lastest_chapter: 357,
      date_modified: "2022-04-16",
      photo: "http://dummyimage.com/300x400.png/cc0000/ffffff",
    },
    {
      id: 10,
      name: "Acridotheres tristis",
      view_count: 15836,
      comment_count: 19572,
      lastest_chapter: 322,
      date_modified: "2021-08-09",
      photo: "http://dummyimage.com/300x400.png/cc0000/ffffff",
    },
  ];
  return (
    <div>
      {data.map((value) => {
        return <MangaContainer key={value.id} data={value}></MangaContainer>;
      })}
    </div>
  );
}

export default App;
