import { Input } from "@/components/ui/input"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce'
import { FC } from "react";

const SearchIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  };

export default function SearchCard(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term)=>{
      const params = new URLSearchParams(searchParams);
      if (term){
        params.set('query',term);
      }else{
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    },500)
    return(
        <div className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow w-full">
      <Input
        type="text"
        placeholder="Search"
        className="flex-1 text-gray-900 dark:text-white bg-transparent border-none focus:ring-0"
        onChange={(e)=>{
          handleSearch(e.target.value)
        }}
      />
      <SearchIcon className="text-gray-500 dark:text-gray-400" />
    </div>
    )
}