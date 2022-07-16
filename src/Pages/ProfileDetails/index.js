import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../../components/DetailCard";
import { HomeBtn } from "../../components/HomeBtn";
import style from "./style.module.css";
import axios from "axios";

export function ProfileDetails() {
  const [detail, setDetail] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <>
      {detail
        .filter((currentDetail) => {
          return currentDetail.id === Number(profileId);
        })
        .map((currentDetails) => {
          console.log(currentDetails);
          return (
            <div key={currentDetails.id} className={style.details}>
              <HomeBtn />
              <DetailCard detail={currentDetails} />
            </div>
          );
        })}
    </>
  );
}
