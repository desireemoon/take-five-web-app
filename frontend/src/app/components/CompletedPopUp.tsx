import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const CompletedPopUp = () => {



  return (
    <>
      <p>
        Congrats on completing today&apos;s activity! Would you like to favorite
        this?
      </p>
      <button>Yes</button>
      <button>No I never want to see this again</button>
    </>
  );
};

export default CompletedPopUp;