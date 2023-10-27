"use client";

import Link from "next/link";
import { useState } from "react";
import { Pencil } from "lucide-react";

export type HeaderContentProps = {
  logo: string;
  navLinks: string;
};

const Header: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [navigationItems, setNavigationItems] = useState([
    { text: "Home", link: "/" },
    { text: "About", link: "/" },
    { text: "Contacts", link: "/" },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (index: number, field: any, value: string) => {
    const updatedItems = [...navigationItems];
    updatedItems[index][field] = value;
    setNavigationItems(updatedItems);
  };

  return (
    <div className="relative h-fit bg-slate-300 dark:bg-slate-500-500 py-6 text-slate-800 dark:text-slate-100">
      <div className="container max-w-[1200px] flex justify-between items-center align-middle">
        <Link href="/">ProgTeam</Link>
        {isEditing ? (
          <div>
            {navigationItems.map((item, index) => (
              <div key={index} className="">
                <input
                  className="bg-gray-100"
                  type="text"
                  value={item.text}
                  onChange={(e) =>
                    handleInputChange(index, "text", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="bg-gray-100"
                  value={item.link}
                  onChange={(e) =>
                    handleInputChange(index, "link", e.target.value)
                  }
                />
              </div>
            ))}
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <ul className="flex flex-row w-auto gap-6 ml-auto">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
            <button className="w-8 h-8" onClick={handleEditClick}>
              <Pencil />
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
