
const events = [
    {
      title: "Web Design Workshop",
      date: new Date("2024-09-25"),
      location: "Nairobi",
      attendees: new Set(["Alpha", "Peter", "Joy"])
    },
    {
      title: "Coding Bootcamp Graduation",
      date: new Date("2024-10-02"),
      location: "Mombasa",
      attendees: new Set(["Jane", "Kent", "Lucy"])
    },
    {
      title: "Wedding Preparation Event",
      date: new Date("2024-09-29"),
      location: "Lavington Private Hall",
      attendees: new Set(["Alpha", "Peter", "Joy", "Jane", "Lucy", "Kent", "Paul", "Beth", "John", "Trevor", "Victor"])
    },
    {
      title: "Business Meeting",
      date: new Date("2024-09-30"),
      location: "Kiambu",
      attendees: new Set(["Paul", "Beth", "John"])
    }
  ];
 
  const today = new Date();
 
  const upcomingEvents = events
    .filter(event => {
      const timeDifference = event.date.getTime() - today.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      return daysDifference >= 0 && daysDifference <= 7;
    })
    .map(event => ({
      title: event.title,
      date: event.date.toDateString(),
      location: event.location,
      attendees: [...event.attendees]
    }));
  

  console.log(upcomingEvents);
  