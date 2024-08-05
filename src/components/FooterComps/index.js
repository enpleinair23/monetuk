import Link from "next/link";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

function FooterComps() {
  return (
    <footer>
      <div className="footer-bottom xl:py-[25px] lg:py-[25px] md:py-[25px] py-[25px]">
        <div>
          <div className="grid grid-cols-12 md:gap-y-0 gap-y-[20px] items-center">
            <div className="md:col-span-5 col-span-12 px-8">
              <ul className="flex md:justify-start justify-center gap-4">
                <Link
                  href={`/privacypolicy`}
                  className="font-normal transition-all hover:text-[#666666]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={`/returnpolicy`}
                  className="font-normal transition-all hover:text-[#666666]"
                >
                  Return Policy
                </Link>
                <Link
                  href={`/termsconditions`}
                  className="font-normal transition-all hover:text-[#666666]"
                >
                  Terms & Conditions
                </Link>
              </ul>
            </div>
            <div className="md:col-span-2 col-span-12">
              <div className="footer-logo flex justify-center">
                <Link href="/">
                  <img
                    src="/darklogo.png" // Path to your image in the public folder
                    alt="Logo"
                    width={150} // Specify width
                    height={50} // Specify height
                  />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 px-8">
              <ul className="flex md:justify-end justify-center gap-8">
                <Link
                  href="https://www.instagram.com/monetu.k/"
                  className="font-normal hover:text-[#666666]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </Link>
                <Link
                  href="https://twitter.com/MonetK88651"
                  className="font-normal hover:text-[#666666]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                </Link>
                <Link
                  href="https://www.youtube.com/@MONETUK"
                  className="font-normal hover:text-[#666666]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright pt-[5px] pb-[20px]">
        <div className="container">
          <div className="grid grid-cols-1">
            <span className="flex justify-center items-center">
              © {new Date().getFullYear()} Monet U.K. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

FooterComps.propTypes = {
  footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default FooterComps;
