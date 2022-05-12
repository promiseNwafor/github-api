import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { IRepo } from "../../lib/Interfaces";
import Image from "../common/Image";
import lockClosed from "../../assets/images/lock-closed.svg";
import lockOpen from "../../assets/images/lock-open.svg";

type Props = {
  item: IRepo;
};

const Card: React.FC<Props> = ({ item }) => {
  const nagivate = useNavigate();

  const handleNavigate = () => nagivate(`/${item.id}`);

  return (
    <div key={item.id} className="col-md-6 col-lg-4 p-3">
      <div
        className={`card px-3 border border-${getBorder()} d-flex flex-column justify-content-center align-items-between`}
      >
        <div className="d-flex justify-content-between align-items-center gap-4">
          <div className="">
            <Avatar
              name={item.name}
              src={item.owner.avatar_url}
              round
              size="50"
            />
            <p className="fw-bold text-capitalize pt-1">{item.owner.login}</p>
          </div>
          <div className="w-50 text-right">
            <h5>{item.name}</h5>
            <p className="text-truncate">{item.description}</p>
          </div>
        </div>
        <Image
          className="lock"
          src={item.private ? lockClosed : lockOpen}
          alt={item.private ? "private" : "public"}
        />
        <p onClick={handleNavigate} className="view">
          {/* <Link to={`/${item.id}`} className="view"> */}
          &#x2192;
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
};

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "info",
  "warning",
  "light",
  "dark",
];

const getBorder = () => colors[Math.floor(Math.random() * colors.length)];

export default Card;
