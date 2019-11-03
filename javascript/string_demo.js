console.log("".trim());
console.log("  this is ".trim());


var response = {
    "activeProjects": 0,
    "todayReleases": 0,
    "tomorrowRelease": 0,
    "last30DaysReleases": 0,
    "activeApps": 0,
    "monthlyReleases": {
        "project1": {
            "01": 76,
            "02": 34,
            "03": 90,
            "04": 21
        },
        "project2": {
            "06": 76

        },
        "project3": {
            "01": 76,
            "02": 34,
            "03": 90,
            "11": 21
        }
    },
    "dailyReleases": null
}

var releaseChartLabel = ["01", "02", "03",
    "04", "05", "06", "07", "08", "09", "10"
    , "11", "12"];

for (const key in response.monthlyReleases) {
    console.log(key);
    var values = [];
    for (var index in releaseChartLabel) {
        var month = releaseChartLabel[index];
        if (response.monthlyReleases[key][month] == undefined) {
            values.push(0);
        } else {
            values.push(response.monthlyReleases[key][month]);
     }
    }
    console.log(values);
}


emailList="1@abc.com;2@abc.com;3@abc.com;4@abc.com;5@abc.com";

emails = emailList.split(";");
count=emails.length;
console.log(emails)
console.log(count);

for (var i =0;i<count;i+=3){
    console.log(i)
    endIndex = i+2>count?count:i+3
    console.log(endIndex)
    console.log(emails.slice(i,endIndex));
}