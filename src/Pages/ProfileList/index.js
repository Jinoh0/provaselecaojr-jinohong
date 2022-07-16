import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "../../components/ProfileCard";
import style from "./style.module.css";

export function ProfileList() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div className={style.homepage}>
      <h1 className={style.title}>📕Profile List</h1>
      <div className={style.profile}>
        {profile.map((currentProfile) => {
          return (
            <div key={currentProfile.id}>
              <Link
                to={`/${currentProfile.id}`}
                style={{ textDecoration: "none" }}
              >
                <ProfileCard profile={currentProfile} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
