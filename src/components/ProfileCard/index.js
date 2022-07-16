import style from "./style.module.css";

export function ProfileCard({ profile }) {
  return (
    <div key={profile.id} className={style.card}>
      <div className={style.profileblock}>
        <h1>{profile.name}</h1>
        <div>📞: {profile.phone}</div>
        <div>📧: {profile.email}</div>
        <div>💻: {profile.company.bs}</div>
      </div>
    </div>
  );
}
