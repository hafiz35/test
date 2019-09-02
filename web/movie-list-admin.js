alert("Hello");
if(!localStorage.getItem("movies")){
    alert("World");
    var movies=[
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    }
    ];
    alert(JSON.stringfy(movies));
    var myJSON=JSON.stringfy(movies);
    alert("1");
    localStorage.setItem("movies",myStorage);
    alert("2");
}
alert("$");
var myStorage=localStorage.getItem("movies");
 myStorage=JSON.parse(myStorage);

alert(myStorage);