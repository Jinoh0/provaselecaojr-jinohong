import style from "./style.module.css";

export function DetailCard({ detail }) {
  return (
    <div className={style.card}>
      <div className={style.textblock}>
        <h1>{detail.name}</h1>
        <h4>{detail.email}</h4>
        <h4>{detail.phone}</h4>
        <h4>{detail.company.name}</h4>
        <h4>{detail.website}</h4>
      </div>
      <div className={style.addressblock}>
        <h1 className={style.addresstitle}>ADDRESS</h1>
        <p>Street : {detail.address.street}</p>
        <p>Suite : {detail.address.suite}</p>
        <p>City : {detail.address.city}</p>
        <p>ZipCode : {detail.address.zipcode}</p>
      </div>
    </div>
  );
}
