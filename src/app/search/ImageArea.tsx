import { fetchCardData } from "@/lib/fetchCardsData";
import { Link } from "@/lib/router-events";
import Image from "next/image";

export default async function ImageArea({query}:{query :string;} ){
    const filtered = await fetchCardData(query);
    console.log(filtered)
    return(
    <div className="mx-3 gap-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
            {filtered.map((card)=> (
                <Link
                key={card.name}
                href={"#"}
                className="w-max h-max"
                >
                <Image
                src={card.picture}
                alt={card.name}
                sizes={"100%"}
                width={200}
                height={200}
                quality={50}
                ></Image>
                </Link>
            ))}
        </div>
        )
}