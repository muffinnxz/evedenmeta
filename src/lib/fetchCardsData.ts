import { cards } from "@/constants/cards";
import {unstable_noStore as noStore} from 'next/cache'
export async function fetchCardData(query? :string){
    noStore();
    var filteredCards = cards
    if(query) {
         var filter = await filteredCards.filter((card)=>
            card.name.toLowerCase().includes(query.toLowerCase()));
        return filter
    }
    return filteredCards
}   