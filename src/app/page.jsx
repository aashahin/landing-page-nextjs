import { Button } from "@/_components/Button"
import { DetailsIcon } from "@/_components/DetailsIcon"
import Image from "next/image"

export default function Page() {
    return (
        <div>
            <header className="mx-4 md:mx-24 my-12 flex gap-8 justify-between">
                <Image src={'/assets/logo.svg'} width={96} height={96} alt="g" />

                <div className="flex gap-x-2 md:gap-x-6">
                    <Button text={"إنضم كمورد"} variant={"outline"} />
                    <Button text={"طلب تسعيرة"} variant={"primary"} />
                </div>

            </header>
            <div className="flex flex-col items-center gap-8 mt-24 px-4 md:px-0">
                <Image src={'/assets/shopping_boxes.png'} width={420} height={420} alt="ff" />
                <h1 className="text-4xl font-bold">تسوق الاف المنتجات واستوردها بكل سهولة</h1>
                <h3 className="text-2xl text-stone-600 font-bold ">نوفر لك منتجات الجملة لمتجرك ومحلك</h3>


                <div className="flex flex-col md:flex-row gap-10 mt-8">
                    <DetailsIcon iconName={"Gift"} text="العطور والهدايا" />
                    <DetailsIcon iconName={"WashingMachine"} text="كهربا" />
                    <DetailsIcon iconName={"Baby"} text="طفل" />
                    <DetailsIcon iconName={"CookingPot"} text="ست" />
                    <DetailsIcon iconName={"ShirtIcon"} text="قميص" />
                </div>

            </div>

            <div className="bg-gray-100 py-10 flex flex-col items-center mt-20">
                <h1 className="text-4xl font-bold">
                    علامات تجارية تثق بنا
                </h1>
                <div className="mt-14 grid grid-cols-5 gap-4">
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/1.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/3.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/1.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/3.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>

                </div>

            </div>
        </div>
    )
}