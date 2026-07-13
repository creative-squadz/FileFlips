import { SiConvertio } from "react-icons/si";
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdAppRegistration, MdOutlineMerge } from "react-icons/md";

export default function Nav(email) {
  const e = email || ":email";

  return [
    {
      id: 1,
      name: "Converters",
      path: `/${e}/home#converters`,
      icon: SiConvertio,
      submenu: [
        { id: 1, name: "PDF to DOCX", path: `/${e}/app/pdf_converter`, icon: FaFilePdf },
        { id: 2, name: "PDF to XLSX", path: `/${e}/app/pdf_to_xlsx`, icon: FaFilePdf },
        { id: 3, name: "DOCX to PDF", path: `/${e}/app/docx_converter`, icon: FaFileWord },
        { id: 4, name: "XLSX to PDF", path: `/${e}/app/xlsx_converter`, icon: FaFileExcel },
        { id: 5, name: "PDF Merger", path: `/${e}/app/pdf_merger`, icon: MdOutlineMerge },
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
