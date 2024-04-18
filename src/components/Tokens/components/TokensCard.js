import { Each } from "@/components/Home/Each";
import { GlobalContext } from "@/context/context";
import { useGetToken } from "@/hooks/useGetTokens";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
export const TokensCard = () => {
    const { tokens } = GlobalContext()
    const token = useGetToken()
    const number = 234234;
    const language = "en"
    return(
    <div className="w-[97%]  bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 items-center rounded-3xl ml-auto mr-auto h-[]">
        <div className="w-[100%] flex text-md text-center py-3 px-4 h-10 mb-auto rounded-t-3xl bg-white/5">
            <div className=" w-[5%] ml-2 text-center ">#</div>
            <div className=" ml-1 w-[30%]  text-center ">Token</div>
            <div className=" ml-2 w-[30%]  text-center">Price</div>
            <div className=" ml-2 w-[30%]  text-center">1hr Volume</div>
            <div className=" ml-2 w-[30%]  text-center">24H Volume</div>
        </div>
       {/**  <div className="w-full h-[86%]">
        <Each of={tokens} render={(item,index) => (
        <div  className="w-[100%] text-center  text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
            <div className=" ml-2  w-[5%]  text-center">{index + 1}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{item.attributes.name}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.attributes.name}%`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(3444444444444)}`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(3444444444444)}`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(3444444444444)}`}</div>
        </div>
        )} />
    </div> **/}
        <p className="text-center py-2 px-3 text-xl">No Data Coming Soon</p>
        <div className="w-full py-2 flex px-4 rounded-b-3xl bg-white/5  mt-auto h-4 ">
           
        </div>
    </div>
)
}