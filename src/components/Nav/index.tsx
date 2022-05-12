import { Link } from "react-router-dom";
import Button from "../common/Button";
import Image from "../common/Image";

const Nav = () => (
  <div className="container-fluid px-5 border-bottom border-4 border-light">
    <div className="py-4 d-flex flex-column gap-4 flex-md-row justify-content-between align-items-center">
      <div className="">
        <Link to="/">
          <Image src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="text-dark d-flex gap-4 align-items-center">
        <p>New to GitHub?</p>
        <Button className="btn-primary">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            Get Started
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default Nav;
