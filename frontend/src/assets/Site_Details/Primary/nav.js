import { SiConvertio } from "react-icons/si";
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";
import { PiArrowsMergeBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { AiFillFilePpt } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";

export default function Nav() {
  return [
    {
      id: 1,
      name: "Converters",
      path: "/:email/converters",
      icon: SiConvertio,
      submenu: [
        { id: 1, name: "PDF Converter", path: "/:email/pdf_converter", icon: FaFilePdf },
        { id: 2, name: "PDF Merger", path: "/:email/pdf_merger", icon: PiArrowsMergeBold },
        { id: 3, name: "PDF Editor", path: "/:email/pdf_editor", icon: MdEditDocument },
        { id: 4, name: "DOCX Converter", path: "/:email/docx_converter", icon: FaFileWord },
        { id: 5, name: "XLSX Converter", path: "/:email/xlsx_converter", icon: FaFileExcel },
        { id: 6, name: "PPT Converter", path: "/:email/ppt_converter", icon: AiFillFilePpt },
      ],
    },

    {
      id: 6,
      name: "Membership",
      path: "/:email/membership",
      icon: LuFiles,
      submenu: [
        {
          id: 1,
          name: "My Plan",
          path: "/:email/plans",
          icon: LuFiles,
        },
        {
          id: 2,
          name: "Invoice",
          path: "/:email/invoice",  
          icon: LuFiles,
        },
      ],
    },

    { id: 4, name: "Sign In", path: "/signin", icon: IoIosLogIn },
    { id: 5, name: "Sign Up", path: "/signup", icon: MdAppRegistration },
    { id: 7, name: "Sign Out", path: "/signout", icon: IoIosLogOut },
  ];
}

