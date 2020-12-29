import React from "react";
import "./style.css";

const MyPage = (props) => {
  const users = [{ id: 1, name: "Danil" }];
  console.log(users);

  return (
    <div className="myPage">
      <div className="userInf">
        <div className="userImage">
          <h2>User Image</h2>
        </div>
        <div className="titles">
          <h1>User_Name</h1>
          <h2>Status</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            dignissimos necessitatibus reiciendis porro fugiat voluptatem iusto,
            quasi culpa eaque consectetur aut libero nihil illum natus nisi
            doloribus et delectus tenetur.
          </p>
        </div>
      </div>
      <h1>your_publics</h1>
      <hr />
    </div>
  );
};

export default MyPage;
