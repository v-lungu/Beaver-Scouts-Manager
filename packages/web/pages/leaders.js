import EnhancedTable from "../components/EnhancedTable";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";

function createData(id, name, colony, phone, email) {
  return {
    id,
    name,
    colony,
    phone,
    email,
  };
}

const rows = [
  createData(1, "Albert", "colony 1", "1234", "abc@gmail.com"),
  createData(2, "Vlad", "colony 2", "1234", "abc@gmail.com"),
  createData(3, "Kyle", "colony 3", "1234", "abc@gmail.com"),
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "colony",
    numeric: false,
    disablePadding: true,
    label: "Colony",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: true,
    label: "Phone",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
];

export default function Leader() {
  return (
    <>
      <div className={styles.background}>
        <Image src="/leaders.jpg" alt="background" fill />
      </div>
      <EnhancedTable headCells={headCells} title="Leaders" rows={rows} />
    </>
  );
}
