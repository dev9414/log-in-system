import React from "react";
import  { Redirect } from 'react-router-dom'
export default function Dashboard() {
  if (localStorage.getItem("uid")==null) {
    return <Redirect to={"/"} />
}

  return (
    <div>
       hello
       <button />
    </div>
  );
}

