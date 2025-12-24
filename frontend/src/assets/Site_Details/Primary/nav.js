import { SiConvertio } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { PiArrowsMergeBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { FaFileWord } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";
import { AiFillFilePpt } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function Nav() {
  const list = [
    {
      id: 1,
      name: "Converters",
      path: "converters",
      icon: SiConvertio,
      submenu: [
        {
          id: 1,
          name: "PDF Converter",
          path: "pdf_converter",
          icon: FaFilePdf,
        },
        {
          id: 2,
          name: "PDF Merger",
          path: "pdf_merger",
          icon: PiArrowsMergeBold,
        },
        {
          id: 3,
          name: "PDF Editor",
          path: "pdf_editor",
          icon: MdEditDocument,
        },
        {
          id: 4,
          name: "DOCX Converter",
          path: "docx_converter",
          icon: FaFileWord,
        },
        {
          id: 5,
          name: "XLSX Converter",
          path: "xlsx_converter",
          icon: FaFileExcel,
        },
        {
          id: 6,
          name: "PPT Converter",
          path: "ppt_converter",
          icon: AiFillFilePpt,
        },
      ],
    },

    // 🔥 Membership Menu
    {
      id: 6,
      name: "Membership",
      path: "/membership",
      icon: LuFiles,
      submenu: [
        {
          id: 1,
          name: "My Plan",
          path: "/membership/plan",
          icon: LuFiles,
        },
        {
          id: 2,
          name: "Invoice",
          path: "/membership/invoice",
          icon: LuFiles,
        },
      ],
    },

    {
      id: 7,
      name: "Sign In",
      path: "/signIn",
      icon: IoIosLogIn,
    },
    {
      id: 8,
      name: "Sign Up",
      path: "/signUp",
      icon: MdAppRegistration,
    },
    {
      id: 9,
      name: "Sign Out",
      path: "/signout",
      icon: IoIosLogOut,
    },
  ];

  return list;
}
