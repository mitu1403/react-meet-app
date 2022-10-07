import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meet-app-be885-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for(const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetps(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
