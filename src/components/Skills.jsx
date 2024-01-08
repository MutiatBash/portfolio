import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export function Skills() {
  return (
    <section className="py-6">
      <div className="flex flex-row justify-between bg-gray-800 py-4 lg:py-8 px-4 lg:px-16 text-slate-50">
        <div>
          <p>WEB DEVELOPMENT</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
        <div>
          <p>UI DESIGN</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
        <div>
          <p>MOBILE DEVELOPMENT</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
        <div>
          <p>TECHNICAL WRITING</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
        <div>
          <p>OPEN SOURCE</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faStarOfLife} />
        </div>
        <div>
          <p>ACCESSIBILITY</p>
        </div>
      </div>
    </section>
  );
}

export function Socials() {
  return (
    <div className="">
      <div className="flex flex-row gap-7 shadow-md border rounded-full py-4 px-5 items-start w-[fit-content]">
        <Link>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
    </div>
  );
}
