import { useParams } from "next/navigation";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'costmers',
};
export default function Page() {
    const params = useParams;
    console.log(params)
    return <p>customers Page</p>
}