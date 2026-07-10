import { SiConvertio } from "react-icons/si";
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";
import { PiArrowsMergeBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { AiFillFilePpt } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";

export default function Nav(email) {
  const e = email || ":email";

  return [
    {
      id: 1,
      name: "Converters",
      path: `/${e}/home#converters`,
      icon: SiConvertio,
      submenu: [
        { id: 1, name: "PDF Converter", path: `/${e}/app/pdf_converter`, icon: FaFilePdf },
        { id: 2, name: "PDF Merger", path: `/${e}/app/pdf_merger`, icon: PiArrowsMergeBold },
        { id: 3, name: "PDF Editor", path: `/${e}/app/pdf_editor`, icon: MdEditDocument },
        { id: 4, name: "DOCX Converter", path: `/${e}/app/docx_converter`, icon: FaFileWord },
        { id: 5, name: "XLSX Converter", path: `/${e}/app/xlsx_converter`, icon: FaFileExcel },
        { id: 6, name: "PPT Converter", path: `/${e}/app/ppt_converter`, icon: AiFillFilePpt },
      ],
    },

    {
      id: 6,
      name: "Membership",
      path: `/${e}/app/plans`,
      icon: LuFiles,
      submenu: [
        {
          id: 1,
          name: "My Plan",
          path: `/${e}/app/plans`,
          icon: LuFiles,
        },
        {
          id: 2,
          name: "Invoice",
          path: `/${e}/invoice`,
          icon: LuFiles,
        },
      ],
    },

    { id: 4, name: "Sign In", path: "/signin", icon: IoIosLogIn },
    { id: 5, name: "Sign Up", path: "/signup", icon: MdAppRegistration },
    { id: 7, name: "Sign Out", path: "/signout", icon: IoIosLogOut },
  ];
}
