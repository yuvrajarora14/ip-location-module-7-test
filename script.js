var dynamicTimeZone = "";
var dynamicIpAdd = "";
var dynamicLat = "";
var dynamicLong = "";
var dynamicPincode = "";
const map = document.getElementById("maps");

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    ip.innerHTML = response.ip;
    dynamicIpAdd = ip.innerHTML;

    fetch(`https://ipinfo.io/${dynamicIpAdd}/json?token=3a6e490992dd17`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        city.innerHTML = response.city;
        country.innerHTML = response.country;
        lat.innerHTML = response.loc.substr(0, 7);
        dynamicLat = lat.innerHTML;
        long.innerHTML = response.loc.substr(8);
        dynamicLong = long.innerHTML;
        org.innerHTML = response.org;
        pincode.innerHTML = response.postal;
        dynamicPincode = pincode.innerHTML;
        region.innerHTML = response.region;
        timezone.innerHTML = response.timezone;
        dynamicTimeZone = timezone.innerHTML;

        fetch(
          `https://api.ipgeolocation.io/timezone?apiKey=ca39d51a9e1149a3b30627e1ca221fa9&${dynamicTimeZone}`
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            date.innerHTML = response.date;
            time_12.innerHTML = response.time_12;

            fetch(`https://api.postalpincode.in/pincode/${dynamicPincode}`)
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                document.getElementById("name").innerHTML =
                  response[0].PostOffice[0].Name;
                document.getElementById("branch").innerHTML =
                  response[0].PostOffice[0].BranchType;
                document.getElementById("status").innerHTML =
                  response[0].PostOffice[0].DeliveryStatus;
                document.getElementById("dist").innerHTML =
                  response[0].PostOffice[0].District;
                document.getElementById("div").innerHTML =
                  response[0].PostOffice[0].Division;

                document.getElementById("name2").innerHTML =
                  response[0].PostOffice[1].Name;
                document.getElementById("branch2").innerHTML =
                  response[0].PostOffice[1].BranchType;
                document.getElementById("status2").innerHTML =
                  response[0].PostOffice[1].DeliveryStatus;
                document.getElementById("dist2").innerHTML =
                  response[0].PostOffice[1].District;
                document.getElementById("div2").innerHTML =
                  response[0].PostOffice[1].Division;

                document.getElementById("name3").innerHTML =
                  response[0].PostOffice[2].Name;
                document.getElementById("branch3").innerHTML =
                  response[0].PostOffice[2].BranchType;
                document.getElementById("status3").innerHTML =
                  response[0].PostOffice[2].DeliveryStatus;
                document.getElementById("dist3").innerHTML =
                  response[0].PostOffice[2].District;
                document.getElementById("div3").innerHTML =
                  response[0].PostOffice[2].Division;

                document.getElementById("name4").innerHTML =
                  response[0].PostOffice[3].Name;
                document.getElementById("branch4").innerHTML =
                  response[0].PostOffice[3].BranchType;
                document.getElementById("status4").innerHTML =
                  response[0].PostOffice[3].DeliveryStatus;
                document.getElementById("dist4").innerHTML =
                  response[0].PostOffice[3].District;
                document.getElementById("div4").innerHTML =
                  response[0].PostOffice[3].Division;

                document.getElementById("name5").innerHTML =
                  response[0].PostOffice[4].Name;
                document.getElementById("branch5").innerHTML =
                  response[0].PostOffice[4].BranchType;
                document.getElementById("status5").innerHTML =
                  response[0].PostOffice[4].DeliveryStatus;
                document.getElementById("dist5").innerHTML =
                  response[0].PostOffice[4].District;
                document.getElementById("div5").innerHTML =
                  response[0].PostOffice[4].Division;

                document.getElementById("name6").innerHTML =
                  response[0].PostOffice[5].Name;
                document.getElementById("branch6").innerHTML =
                  response[0].PostOffice[5].BranchType;
                document.getElementById("status6").innerHTML =
                  response[0].PostOffice[5].DeliveryStatus;
                document.getElementById("dist6").innerHTML =
                  response[0].PostOffice[5].District;
                document.getElementById("div6").innerHTML =
                  response[0].PostOffice[5].Division;
                  Message.innerHTML = response[0].Message;

                let link = `https://maps.google.com/maps?q=${dynamicLat},${dynamicLong} &output=embed`;
                const iframe = document.createElement("iframe");
                iframe.src = link;
                iframe.width = "100%";
                iframe.height = "100%";
                map.appendChild(iframe);
              });
          });
      });
  });
