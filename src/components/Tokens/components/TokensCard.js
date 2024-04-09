import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
export const TokensCard = () => {
    return(
    <div className="w-[97%]  bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 items-center rounded-3xl ml-auto mr-auto h-auto">
        <div className="w-[100%] flex text-center py-3 px-4 h-12 mb-auto rounded-t-3xl bg-white/5">
            <div className=" w-[5%] ml-2 text-center ">#</div>
            <div className=" ml-4 w-[20%]  text-center ">Name</div>
            <div className=" ml-2 w-[30%]  text-center">Price</div>
            <div className=" ml-2 w-[20%]  text-center">24H%</div>
            <div className=" w-[20%] text-end">Volume</div>
        </div>
        <div className="w-full py-8 px-3 text-center h-[86%]">
            No Data Coming Soon
        {/**<div className="w-[100%] text-center flex py-3 px-4 h-10 mb-auto">
            <div className=" ml-3  w-[5%]  text-center">1</div>
            <div className=" ml-6 lg:ml-3 w-[20%] text-center">Doge</div>
            <div className=" ml-7 lg:ml-3 w-[30%] text-center">$23b</div>
            <div className=" ml-7 lg:ml-3 w-[20%] text-center">250k</div>
            <div className=" mr-2 lg:mr-8 text-end w-[20%] ">100m</div>
    </div>**/}
        </div>
        <div className="w-full py-2 flex px-4 rounded-b-3xl bg-white/5  mt-auto h-4 ">
           
        </div>
    </div>
)
}