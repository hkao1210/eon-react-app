"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineSearch } from "react-icons/md";
import queryString from "query-string";

const Search = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = {
      searchQuery: text,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/search",
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  return (
    <form
      className="flex items-center border-[1px] border-neutral-700 rounded-full overflow-hidden"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full py-2 px-4 bg-neutral-900 text-white outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="submit"
        className="p-2 bg-neutral-800 border-none flex items-center justify-center"
      >
        <MdOutlineSearch className="h-6 w-6 text-white" />
      </button>
    </form>
  );
};

export default Search;
